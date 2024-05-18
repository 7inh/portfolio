import { useMemo } from "react";
import { Project } from "src/common/types";
import BoxBase from "src/components/Boxs/BoxBase";
import CardProject from "src/components/Cards/CardProject";
import DialogDetailProject from "src/components/Dialogs/DialogDetailProject/DialogDetailProject";
import { useBoolean } from "src/hooks/utils/useBoolean";

export interface WithProjectItem {
    project: Project;
}

const withInteractProjectItem = <T extends object & WithProjectItem>(
    WrappedComponent: (_: T) => JSX.Element
) => {
    const withInteractProjectItem = ({ ...props }: T) => {
        const { project } = props;

        const open = useBoolean();

        const renderDetail = useMemo(() => {
            return (
                <DialogDetailProject
                    open={open.value}
                    project={props.project}
                    onClose={open.onFalse}
                />
            );
        }, [open.onFalse, open.value, props.project]);

        return (
            <BoxBase position="relative">
                {renderDetail}
                <CardProject project={project} onClick={open.onTrue} />
                <WrappedComponent {...(props as T)} />
            </BoxBase>
        );
    };

    return withInteractProjectItem;
};

withInteractProjectItem.displayName = "withInteractProjectItem";

export default withInteractProjectItem;
