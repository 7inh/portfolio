import { Typography } from "@mui/material";
import withDrawerContainer from "src/HOCs/withDrawerContainer";
import BoxBase from "src/components/Boxs/BoxBase";
import Iconify from "src/components/Iconify/Iconify";
import { useNavContext } from "src/contexts/NavContext";
import useTranslation from "src/hooks/utils/useTranslation";
import { menuItemSx } from "src/pages/components/SideMenu/sx";

export interface SideMenuProps {
    expanded?: boolean;
}

const SideMenu = ({ expanded }: SideMenuProps) => {
    const t = useTranslation();

    const { routes, currentRoute } = useNavContext();

    return (
        <BoxBase
            sx={{
                top: 0,
                padding: 2,
                boxSizing: "border-box",
                position: expanded ? "relative" : "fixed",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                height: "100vh",
                justifyContent: "center",
                alignItems: "start",
                marginRight: expanded ? "10px" : "0",
            }}
        >
            {routes.map((route) => {
                const isSelected = route.path === currentRoute?.path;
                const title = t(route.name);
                return (
                    <BoxBase
                        key={route.path}
                        sx={menuItemSx(isSelected, expanded)}
                        onClick={() => {
                            setTimeout(() => {
                                document?.querySelector(route.path)?.scrollIntoView({
                                    block: "start",
                                    inline: "nearest",
                                    behavior: "smooth",
                                });
                            }, 10);
                        }}
                    >
                        <Iconify icon={route.icon} />
                        <Typography variant="subtitle2" className="menu-item-title">
                            {title}
                        </Typography>
                    </BoxBase>
                );
            })}
        </BoxBase>
    );
};

export default withDrawerContainer(SideMenu);
