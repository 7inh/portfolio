import { CardMedia } from "@mui/material";
import BoxBase from "src/components/Boxs/BoxBase";

export interface LogoProps {
    iconOnly?: boolean;
    size?: "small" | "medium";
}

const mapSize = {
    small: "35px",
    medium: "42px",
};

const Logo = (props: LogoProps) => {
    const { size } = props;

    return (
        <BoxBase
            sx={{
                display: "flex",
                alignItems: "center",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                height: size ? mapSize[size] : "42px",
                gap: "12px",
                width: "fit-content",
                overflow: "hidden",
            }}
        >
            <CardMedia
                component="img"
                src="/icons/portfolio.svg"
                sx={{
                    objectFit: "contain",
                    height: "100%",
                    width: "auto",
                    flexShrink: 0,
                }}
            />

            <CardMedia
                component="img"
                src="/svgs/portfolio.svg"
                sx={{
                    objectFit: "contain",
                    height: "70%",
                }}
            />
        </BoxBase>
    );
};

export default Logo;
