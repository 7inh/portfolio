import { forwardRef } from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import Box, { BoxProps } from "@mui/material/Box";

export type IconifyProps = IconifyIcon | string;

interface Props extends BoxProps {
    icon: IconifyProps;
    disabled?: boolean;
}

const Iconify = forwardRef<SVGElement, Props>(
    ({ icon, width = 20, sx, disabled, ...other }, ref) => (
        <Box
            ref={ref}
            component={Icon}
            className="component-iconify"
            icon={icon}
            sx={{
                width,
                height: width,
                ...(disabled && {
                    color: "text.disabled",
                    pointerEvents: "none",
                }),
                ...sx,
            }}
            {...other}
        />
    )
);

Iconify.displayName = "Iconify";

export default Iconify;
