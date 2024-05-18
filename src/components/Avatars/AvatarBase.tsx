import { Avatar } from "@mui/material";

export interface AvatarBaseProps {
    src: string;
    alias: string;
    size?: string;
    variant?: "circular" | "rounded" | "square";
    radius?: string;
}

const AvatarBase = ({ size, src, alias, variant, radius }: AvatarBaseProps) => {
    return (
        <Avatar
            src={src}
            sx={{
                width: size || 40,
                height: size || 40,
                fontSize: parseInt(size || "40px") / 2.5,
                borderRadius: radius || "50%",
            }}
            imgProps={{ style: { objectFit: "contain" } }}
            variant={variant || "circular"}
        >
            {alias
                ?.normalize("NFKD")
                ?.replace(/[\u0300-\u036F]/g, "")
                ?.trim()
                ?.split(" ")
                .slice(0, 2)
                .map((item) => item[0])}
        </Avatar>
    );
};

export default AvatarBase;
