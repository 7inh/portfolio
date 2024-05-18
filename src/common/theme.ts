import { alpha } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        variant1: true;
        variant2: true;
        variant3: true;
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    variant1: React.CSSProperties;
    variant2: React.CSSProperties;
    variant3: React.CSSProperties;
}

const TEXT_SECONDARY = "#2E3957";

const theme = createTheme({
    palette: {
        primary: {
            main: "#70a1ff",
            dark: "#2f3542",
            light: "#f1f2f6",
        },
        // success: {
        //     main: "#2ed573",
        //     light: "#dfe4ea",
        // },
        // error: {
        //     main: "#FF5630",
        // },
        secondary: {
            main: "#919EAB",
            dark: "#132A00",
            contrastText: "#838383",
        },
        text: {
            primary: "#212B36",
            secondary: TEXT_SECONDARY,
        },
    },
    typography: {
        variant1: {
            fontSize: "14px",
            fontWeight: 700,
            color: "#000",
            lineHeight: "24px",
        },
        variant2: {
            fontSize: "22px",
            fontWeight: 600,
            color: "rgb(69, 80, 91)",
        },
        h2: {
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: "normal",
            marginBottom: "20px",
            color: "white",
        },
        h3: {
            fontSize: "40px",
            fontWeight: 700,
            color: TEXT_SECONDARY,
            height: "48px",
            lineHeight: "normal",
        },
        h4: {
            fontSize: "32px",
            fontWeight: 700,
            color: "rgb(69, 80, 91)",
            textTransform: "uppercase",
        },
        h5: {
            fontSize: "24px",
            fontWeight: 700,
            color: "rgb(69, 80, 91)",
            textTransform: "uppercase",
        },
        h6: {
            fontSize: "18px",
            fontWeight: 700,
            color: "rgb(5, 99, 187)",
            textTransform: "uppercase",
        },
        caption: {
            fontSize: "12px",
            color: "#919EAB",
            fontWeight: 400,
            lineHeight: "18px",
        },
        body1: {
            fontSize: "14px",
            color: "white",
            fontWeight: 600,
            lineHeight: "22px",
        },
        body2: {
            fontSize: "14px",
            color: "#637381",
            fontWeight: 400,
            lineHeight: "22px",
        },
        subtitle1: {
            fontSize: "16px",
            color: "rgb(39, 40, 41)",
            fontWeight: 400,
        },
        subtitle2: {
            fontSize: "15px",
            color: "#C0C0C0",
            fontWeight: 500,
        },
        allVariants: {
            fontFamily: "Raleway, sans-serif",
            color: "#000",
        },
    } as ExtendedTypographyOptions,
});

export default theme;

type BgBlurProps = {
    blur?: number;
    opacity?: number;
    color?: string;
    imgUrl?: string;
};

export function bgBlur(props?: BgBlurProps) {
    const color = props?.color || "#000000";
    const blur = props?.blur || 6;
    const opacity = props?.opacity || 0.8;
    const imgUrl = props?.imgUrl;

    if (imgUrl) {
        return {
            position: "relative",
            backgroundImage: `url(${imgUrl})`,
            "&:before": {
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 9,
                content: "''",
                width: "100%",
                height: "100%",
                backdropFilter: `blur(${blur}px)`,
                WebkitBackdropFilter: `blur(${blur}px)`,
                backgroundColor: alpha(color, opacity),
            },
        } as const;
    }

    return {
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
    };
}
