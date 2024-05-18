import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import {
    Box,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    MenuProps,
    Tooltip,
    Typography,
} from "@mui/material";
import { useCallback, useMemo, useRef, useState } from "react";

export interface MenuBaseProps {
    trigger?: React.ReactNode;
    actions: {
        key: string;
        label: string;
        color?: string;
        icon?: React.ReactNode;
        divider?: boolean;
        disabled?: boolean;
        tooltip?: string;
    }[];
    anchorOrigin?: MenuProps["anchorOrigin"];
    transformOrigin?: MenuProps["transformOrigin"];
    borderRadius?: string;
    minWidth?: string;
    onActionClick: (key: string) => void;
}

const MenuBase = (props: MenuBaseProps) => {
    const {
        trigger,
        anchorOrigin,
        transformOrigin,
        borderRadius,
        actions,
        minWidth,
        onActionClick,
    } = props;

    const triggerRef = useRef<HTMLDivElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = useCallback((event) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    }, []);
    const handleClose = useCallback((e) => {
        e.stopPropagation();
        setAnchorEl(null);
    }, []);

    const renderMenuItem: React.ReactNode[] = useMemo(() => {
        return actions.map(({ key, label, color, icon, divider, disabled, tooltip }) => {
            return [
                <Tooltip key={key} title={tooltip} placement="left">
                    <MenuItem
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClose(e);
                            onActionClick(key);
                        }}
                        sx={{
                            color,
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                        }}
                        disabled={disabled}
                    >
                        {icon}
                        <Typography
                            color={color}
                            sx={{
                                fontWeight: 500,
                                fontSize: "14px",
                                lineHeight: "20px",
                            }}
                        >
                            {label}
                        </Typography>
                    </MenuItem>
                </Tooltip>,
                divider ? <Divider key={`${key}-divider`} /> : null,
            ];
        });
    }, [actions, handleClose, onActionClick]);

    return (
        <>
            {trigger ? (
                <Box ref={triggerRef} onClick={handleClick}>
                    {trigger}
                </Box>
            ) : (
                <IconButton onClick={handleClick}>
                    <MoreVertRoundedIcon fontSize="small" />
                </IconButton>
            )}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={
                    anchorOrigin || {
                        vertical: "bottom",
                        horizontal: "center",
                    }
                }
                transformOrigin={
                    transformOrigin || {
                        vertical: "top",
                        horizontal: "right",
                    }
                }
                slotProps={{
                    paper: {
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            width: triggerRef.current?.clientWidth,
                            minWidth: "fit-content",
                            boxShadow:
                                "0px 0px 0px 0.5px rgba(145, 158, 171, 0.12), 0px 0px 0px 0.5px rgba(145, 158, 171, 0.20)",
                            borderRadius: borderRadius || "16px 0 16px 16px",
                            ...(minWidth && { minWidth }),
                        },
                    },
                }}
            >
                {renderMenuItem.map((item) => item)}
            </Menu>
        </>
    );
};

export default MenuBase;
