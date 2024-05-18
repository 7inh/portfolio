import { Drawer, IconButton } from "@mui/material";
import { useMemo } from "react";
import theme from "src/common/theme";
import Iconify from "src/components/Iconify/Iconify";
import { useBoolean } from "src/hooks/utils/useBoolean";
import { useResponsive } from "src/hooks/utils/useResponsive";

const withDrawerContainer = <T extends object>(WrappedComponent: (_: T) => JSX.Element) => {
    const withDrawerContainer = ({ ...props }: T) => {
        const mdDown = useResponsive("down", "md");
        const openDrawer = useBoolean(false);

        const renderComponent = useMemo(() => {
            return <WrappedComponent expanded={mdDown} {...(props as T)} />;
        }, [mdDown, props]);

        return (
            <>
                {mdDown ? (
                    <>
                        <Drawer
                            open={openDrawer.value}
                            variant="temporary"
                            onClose={openDrawer.onFalse}
                        >
                            {renderComponent}
                        </Drawer>
                        <IconButton
                            sx={{
                                position: "fixed",
                                top: "10px",
                                right: "10px",
                                zIndex: theme.zIndex.drawer + 1,
                                bgcolor: openDrawer.value ? "primary.light" : "transparent",
                                "&:hover": {
                                    bgcolor: openDrawer.value ? "primary.light" : "transparent",
                                },
                            }}
                        >
                            <Iconify
                                icon={openDrawer.value ? "line-md:close" : "line-md:menu"}
                                onClick={openDrawer.onToggle}
                                sx={{
                                    color: openDrawer.value ? "primary.main" : "primary.light",
                                    width: "30px",
                                    height: "30px",
                                }}
                            />
                        </IconButton>
                    </>
                ) : (
                    renderComponent
                )}
            </>
        );
    };

    return withDrawerContainer;
};

withDrawerContainer.displayName = "withDrawerContainer";

export default withDrawerContainer;
