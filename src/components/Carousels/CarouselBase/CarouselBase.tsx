import { Box, CardMedia } from "@mui/material";
import { useCallback, useMemo, useRef, useState } from "react";
import CarouselIndicator from "src/components/Carousels/CarouselBase/CarouselIndicator";
import CarouselNavigation from "src/components/Carousels/CarouselBase/CarouselNavigation";
import CarouselSlide from "src/components/Carousels/CarouselBase/CarouselSlide";
import { v4 as uuidv4 } from "uuid";

export interface CarouselBaseProps {
    mediaList: string[];
}

const CarouselBase = (props: CarouselBaseProps) => {
    const { mediaList } = props;
    const [currentIdx, setCurrentIdx] = useState(0);

    const slideRef = useRef<HTMLDivElement>(null);

    const SLICE_LENGTH = mediaList.length;

    const handleChangeIdx = useCallback(
        (idx: number) => {
            if (slideRef.current) {
                slideRef.current.scrollBy({
                    left: (idx - currentIdx) * slideRef.current.clientWidth,
                    behavior: "smooth",
                });
            }
        },
        [currentIdx]
    );

    const renderSlices = useMemo(() => {
        return (
            <Box
                ref={slideRef}
                sx={{
                    display: "flex",
                    overflow: "auto",
                    scrollSnapType: "x mandatory",
                    scrollBehavior: "smooth",
                    "::-webkit-scrollbar": {
                        display: "none",
                    },
                    height: "100%",
                }}
                onScroll={(e) => {
                    setCurrentIdx(
                        Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth)
                    );
                }}
            >
                {mediaList.map((media) => (
                    <CarouselSlide key={uuidv4()}>
                        <CardMedia
                            component="img"
                            src={media}
                            sx={{
                                height: "100%",
                                objectFit: "scale-down",
                            }}
                        />
                    </CarouselSlide>
                ))}
            </Box>
        );
    }, [mediaList]);

    const renderIndicator = useMemo(() => {
        return (
            <CarouselIndicator
                length={SLICE_LENGTH}
                currentIdx={currentIdx}
                onChangeIdx={(idx) => handleChangeIdx(idx)}
            />
        );
    }, [SLICE_LENGTH, currentIdx, handleChangeIdx]);

    const renderNavigation = useMemo(() => {
        return (
            <CarouselNavigation
                onClickPrev={() => {
                    handleChangeIdx(currentIdx - 1);
                }}
                onClickNext={() => {
                    handleChangeIdx(currentIdx + 1);
                }}
                disableGoToPrev={currentIdx === 0}
                disableGoToNext={currentIdx === SLICE_LENGTH - 1}
                color="white"
            />
        );
    }, [SLICE_LENGTH, currentIdx, handleChangeIdx]);

    return (
        <Box
            data-testid="CarouselBase__container"
            sx={{
                position: "relative",
                flexGrow: 1,
                width: "100%",
                overflow: "hidden",
                height: {
                    xs: "auto",
                    lg: "100%",
                },
                bgcolor: "secondary.main",
            }}
        >
            {renderSlices}
            <Box
                sx={{
                    position: "absolute",
                    zIndex: 1000,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    py: 3,
                }}
            >
                {renderIndicator}
            </Box>
            {renderNavigation}
        </Box>
    );
};

export default CarouselBase;
