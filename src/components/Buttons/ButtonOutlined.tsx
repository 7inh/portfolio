import { ButtonProps } from "@mui/material";
import ButtonBase from "src/components/Buttons/ButtonBase";

export interface ButtonOutlinedProps extends ButtonProps {
    children?: React.ReactNode;
    label?: string | React.ReactNode;
}

const ButtonOutlined = ({ label, sx, ...props }: ButtonOutlinedProps) => {
    return (
        <ButtonBase
            variant="outlined"
            {...props}
            sx={{
                width: "fit-content",
                height: "fit-content",
                background: "rgba(7, 91, 255, 0.08)",
                flexShrink: 0,
                "&:hover": {
                    background: "rgba(7, 91, 255, 0.12)",
                },
                ...sx,
            }}
        >
            {label}
        </ButtonBase>
    );
};

export default ButtonOutlined;
