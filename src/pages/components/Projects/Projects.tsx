import { useMemo } from "react";
import withSectionControl from "src/HOCs/withSectionControl";
import { INFO } from "src/common/consts";
import BoxBase from "src/components/Boxs/BoxBase";
import useTranslation from "src/hooks/utils/useTranslation";
import ProjectItem from "src/pages/components/Projects/ProjectItem";
import SectionContainer from "src/pages/components/SectionContainer/SectionContainer";

const Projects = () => {
    const t = useTranslation();
    const renderProject = useMemo(() => {
        return (
            <SectionContainer id="projects" label={t("page.projects.title")}>
                <BoxBase
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1rem",
                        px: {
                            xs: 0,
                            sm: 5,
                            md: 10,
                        },
                    }}
                >
                    {INFO.projects.map((project) => (
                        <ProjectItem key={project.name} project={project} />
                    ))}
                </BoxBase>
            </SectionContainer>
        );
    }, [t]);
    return <>{renderProject}</>;
};

export default withSectionControl(Projects);
