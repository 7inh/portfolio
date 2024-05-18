import CircularProgress, { CircularProgressProps } from "@mui/material/CircularProgress";
import BoxBase from "src/components/Boxs/BoxBase";
import TypographyBase from "src/components/Typographys/TypographyBase";

const CircularProgressWithLabel = (
    props: CircularProgressProps & { value: number; label: string }
) => {
    return (
        <BoxBase sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
                variant="determinate"
                {...props}
                sx={{
                    color: (theme) => theme.palette.text.primary,
                }}
            />
            <BoxBase
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <TypographyBase
                    sx={{
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: -0.75,
                        lineHeight: 1,
                    }}
                >
                    {props.label}
                </TypographyBase>
            </BoxBase>
        </BoxBase>
    );
};

export default CircularProgressWithLabel;
