import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

export interface BoxBaseProps extends BoxProps {}

const BoxBase = forwardRef<HTMLDivElement, BoxBaseProps>((props, ref) => (
    <Box ref={ref} {...props} />
));

BoxBase.displayName = "BoxBase";

export default BoxBase;
