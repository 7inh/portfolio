import Typography, { TypographyProps } from "@mui/material/Typography";
import { forwardRef } from "react";

export interface TypographyBaseProps extends TypographyProps {
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "div" | "label";
    oneLine?: boolean;
}

const TypographyBase = forwardRef<HTMLParagraphElement, TypographyBaseProps>(
    ({ oneLine, children, sx, ...props }, ref) => {
        return (
            <Typography
                {...props}
                ref={ref}
                sx={{
                    whiteSpace: oneLine ? "nowrap" : "initial",
                    overflow: oneLine ? "hidden" : "initial",
                    textOverflow: oneLine ? "ellipsis" : "initial",
                    ...sx,
                }}
            >
                {children}
            </Typography>
        );
    }
);

TypographyBase.displayName = "TypographyBase";

export default TypographyBase;
