import { Dialog, IconButton } from "@mui/material";
import { Project } from "src/common/types";
import BoxBase from "src/components/Boxs/BoxBase";
import CarouselBase from "src/components/Carousels/CarouselBase/CarouselBase";
import Iconify from "src/components/Iconify/Iconify";
import LinkBase from "src/components/Links/LinkBase";
import TypographyBase from "src/components/Typographys/TypographyBase";
import { useResponsive } from "src/hooks/utils/useResponsive";

export interface DialogDetailProjectProps {
    open: boolean;
    project: Project;
    onClose: () => void;
}

const DialogDetailProject = ({ open, project, onClose }: DialogDetailProjectProps) => {
    const xsDown = useResponsive("down", "sm");
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl" fullScreen={xsDown}>
            <IconButton
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    zIndex: 1,
                }}
                onClick={onClose}
            >
                <Iconify
                    icon="ant-design:close-circle"
                    sx={{
                        width: "34px",
                        height: "34px",
                        cursor: "pointer",
                        "&:hover": {
                            color: "primary.main",
                        },
                    }}
                />
            </IconButton>
            <BoxBase
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: { xs: "column", lg: "row" },
                    height: xsDown ? "100dvh" : "calc(100dvh - 64px)",
                }}
            >
                <CarouselBase mediaList={project.images} />
                <BoxBase
                    sx={{
                        flexShrink: 0,
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "400px",
                        mx: "auto",
                        p: {
                            xs: 1,
                            sm: 2,
                        },
                        "& > h4,p": {
                            textAlign: "center",
                            width: "fit-content",
                        },
                    }}
                >
                    <TypographyBase variant="h4">{project.name}</TypographyBase>
                    <TypographyBase variant="subtitle1">{project.description}</TypographyBase>
                    {project.url ? (
                        <LinkBase to={project.url} target="_blank">
                            <Iconify icon="material-symbols:link" />
                        </LinkBase>
                    ) : null}
                </BoxBase>
            </BoxBase>
        </Dialog>
    );
};

export default DialogDetailProject;
