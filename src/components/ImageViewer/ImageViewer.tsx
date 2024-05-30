import { Box, BoxProps, Button, CardMedia, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { v4 as uuidv4 } from "uuid";

export interface ImageViewerProps extends BoxProps {
    open?: boolean;
    currentSelectedIdx?: number;
    images: string[];
    onClose?: () => void;
}

const ImageViewer = (props: ImageViewerProps) => {
    const { open, currentSelectedIdx, images, ...rest } = props;
    const [currentSelectedImage, setCurrentSelectedImage] = useState<number>(
        currentSelectedIdx || 0
    );

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                props.onClose?.();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [props]);

    return (
        <Box
            sx={{
                display: open ? "flex" : "none",
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
                bgcolor: "rgba(0,0,0,0.5)",
            }}
            onClick={() => {
                props.onClose?.();
            }}
            {...rest}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 5,
                    right: 35,
                }}
            >
                <IconButton
                    sx={{
                        color: "white",
                    }}
                    onClick={() => {
                        props.onClose?.();
                    }}
                >
                    <CloseRoundedIcon fontSize="large" />
                </IconButton>
            </Box>
            <Box>
                <Button
                    sx={{
                        color: "white",
                        borderRadius: 0,
                        height: "200px",
                        position: "absolute",
                        top: "30%",
                        left: 0,
                        ":hover": {
                            bgcolor: "rgba(0,0,0,0.5)",
                        },
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSelectedImage(Math.max(currentSelectedImage - 1, 0));
                    }}
                >
                    <ArrowBackIosNewRoundedIcon fontSize="large" />
                </Button>
                <Button
                    sx={{
                        color: "white",
                        borderRadius: 0,
                        height: "200px",
                        position: "absolute",
                        top: "30%",
                        right: 0,
                        ":hover": {
                            bgcolor: "rgba(0,0,0,0.5)",
                        },
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        setCurrentSelectedImage(
                            Math.min(currentSelectedImage + 1, images.length - 1)
                        );
                    }}
                >
                    <ArrowForwardIosRoundedIcon />
                </Button>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    boxSizing: "border-box",
                }}
            >
                <Box
                    sx={{
                        px: 5,
                        py: 2,
                        boxSizing: "border-box",
                        flexGrow: 1,
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <CardMedia
                        component="img"
                        style={{
                            height: "fit-content",
                            maxHeight: "100%",
                            objectFit: "scale-down",
                        }}
                        src={images[currentSelectedImage]}
                        onClick={(e) => e.stopPropagation()}
                    />
                </Box>
                <br />
                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        overflowX: "auto",
                        flexShrink: 0,
                    }}
                >
                    {images.map((image, index) => (
                        <CardMedia
                            key={uuidv4()}
                            component="img"
                            style={{
                                width: "100%",
                                height: "100px",
                                objectFit: "contain",
                                border: currentSelectedImage === index ? "3px solid" : "",
                                borderColor: currentSelectedImage === index ? "white" : "",
                                cursor: "pointer",
                            }}
                            src={image}
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentSelectedImage(index);
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default ImageViewer;
