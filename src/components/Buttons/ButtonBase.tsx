import { Button, ButtonProps } from "@mui/material";
import { forwardRef } from "react";

export interface ButtonBaseProps extends ButtonProps {}

const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
    ({ children, sx, ...props }, ref) => (
        <Button
            {...props}
            ref={ref}
            fullWidth
            sx={{
                textTransform: "none",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "26px",
                p: "11px 16px",
                ...sx,
            }}
        >
            {children}
        </Button>
    )
);

ButtonBase.displayName = "ButtonBase";

export default ButtonBase;
