import { ButtonProps } from "@mui/material";
import ButtonBase from "src/components/Buttons/ButtonBase";

export interface ButtonPrimaryProps extends ButtonProps {
    children?: React.ReactNode;
    label?: string;
    rounded?: boolean;
}

const ButtonPrimary = (props: ButtonPrimaryProps) => {
    const { label, sx, disabled, fullWidth, rounded, ...rest } = props;
    return (
        <ButtonBase
            {...rest}
            fullWidth
            sx={{
                bgcolor: disabled ? "grey" : "primary.main",
                color: "white",
                cursor: disabled ? "not-allowed" : "pointer",
                "&:hover": {
                    bgcolor: disabled ? "grey" : "primary.dark",
                },
                width: fullWidth ? "100%" : "fit-content",
                height: "fit-content",
                flexShrink: 0,
                px: 5,
                ...(rounded && {
                    borderRadius: "50px",
                }),
                ...sx,
            }}
        >
            {label}
        </ButtonBase>
    );
};

export default ButtonPrimary;
