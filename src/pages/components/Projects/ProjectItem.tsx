import CardMedia from "@mui/material/CardMedia";
import { Project } from "src/common/types";
import withInteractProjectItem from "src/HOCs/withInteractProjectItem";

export interface ProjectItemProps {
    project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
    return (
        <CardMedia
            component="img"
            image={project.images[0]}
            alt={project.name}
            sx={{
                width: "100%",
                height: "auto",
                aspectRatio: "1/1",
                overflow: "hidden",
                objectFit: "cover",
            }}
        />
    );
};

export default withInteractProjectItem(ProjectItem);
