import { Project } from "src/common/types";
import BoxBase from "src/components/Boxs/BoxBase";
import Iconify from "src/components/Iconify/Iconify";
import LinkBase from "src/components/Links/LinkBase";
import TypographyBase from "src/components/Typographys/TypographyBase";

export interface CardProjectProps {
    project: Project;
    onClick: () => void;
}

const CardProject = ({ project, onClick }: CardProjectProps) => {
    const { name, description, url } = project;
    return (
        <BoxBase
            sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 1,
                bgcolor: "rgba(0, 0, 0, 0.5)",
                opacity: 0,
                transition: "opacity 0.3s",
                display: "flex",
                color: "white",
                flexDirection: "column",
                justifyContent: "center",
                cursor: "pointer",
                "&:hover": {
                    opacity: 1,
                },
            }}
            onClick={onClick}
        >
            <TypographyBase variant="h5" color="white">
                {name}
            </TypographyBase>
            <TypographyBase variant="subtitle1" color="white">
                {description}
            </TypographyBase>
            {url ? (
                <LinkBase to={url} target="_blank">
                    <Iconify
                        icon="material-symbols:link"
                        sx={{
                            width: "34px",
                            height: "34px",
                            cursor: "pointer",
                            "&:hover": {
                                color: "primary.main",
                            },
                        }}
                    />
                </LinkBase>
            ) : null}
        </BoxBase>
    );
};

export default CardProject;
