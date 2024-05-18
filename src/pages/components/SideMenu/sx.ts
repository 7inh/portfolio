import { SxProps, SystemStyleObject } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const menuItemSx = (isSelected: boolean, expanded = false): SxProps<Theme> => ({
    height: "56px",
    width: "56px",
    borderRadius: "56px",
    overflow: "hidden",
    bgcolor: isSelected ? "primary.main" : "primary.light",
    color: isSelected ? "white" : "primary.main",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "& .menu-item-title": {
        whiteSpace: "nowrap",
        ...menuTitleSx(expanded ? isSelected : false, expanded),
    },
    "& svg": {
        flexShrink: 0,
        ml: "18px",
    },
    ...expandedMenuItemSx(expanded),
    "&:hover": {
        bgcolor: "primary.main",
        color: "white",
        ...expandedMenuItemSx(true),
        ".menu-item-title": {
            ...menuTitleSx(true, expanded),
        },
    },

    transition: "ease-in-out 0.5s",
});

export const expandedMenuItemSx = (expanded: boolean): SystemStyleObject<Theme> =>
    expanded ? { width: "100%", paddingRight: "10px" } : {};

export const menuTitleSx = (isSelected: boolean, expanded = false): SystemStyleObject<Theme> => {
    if (expanded || isSelected) {
        return {
            marginLeft: "10px",
            width: "100%",
            opacity: 1,
            color: isSelected ? "white" : "primary.main",
        };
    }

    return {
        width: "0",
        overflow: "hidden",
        opacity: 0,
    };
};
