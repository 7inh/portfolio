import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { BoxProps, IconButton } from "@mui/material";
import { memo } from "react";

const _sx = {
    iconButton: {
        bgcolor: "secondary.light",
        boxShadow:
            "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)",
        position: "absolute",
        zIndex: 2000,
        top: "50%",
    },
};

export interface CarouselNavigationProps extends BoxProps {
    color?: string;
    onClickNext?: () => void;
    onClickPrev?: () => void;
    disableGoToPrev?: boolean;
    disableGoToNext?: boolean;
}

const CarouselNavigation = ({
    color,
    onClickPrev,
    onClickNext,
    disableGoToPrev,
    disableGoToNext,
}: CarouselNavigationProps) => {
    return (
        <>
            <IconButton
                sx={{
                    ..._sx.iconButton,
                    left: 10,
                }}
                onClick={onClickPrev}
                disabled={disableGoToPrev}
            >
                <NavigateBeforeRoundedIcon
                    sx={{
                        width: "20px",
                        height: "20px",
                        color: disableGoToPrev ? "default" : color,
                    }}
                />
            </IconButton>
            <IconButton
                sx={{ ..._sx.iconButton, right: 10 }}
                onClick={onClickNext}
                disabled={disableGoToNext}
            >
                <NavigateNextRoundedIcon
                    sx={{
                        width: "20px",
                        height: "20px",
                        color: disableGoToNext ? "default" : color,
                    }}
                />
            </IconButton>
        </>
    );
};

export default memo(CarouselNavigation);
