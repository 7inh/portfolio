import { Dialog, DialogProps } from "@mui/material";
import DialogActionBase from "src/components/Dialogs/DialogBase/DialogActionBase";
import DialogContentBase from "src/components/Dialogs/DialogBase/DialogContentBase";
import DialogTitleBase from "src/components/Dialogs/DialogBase/DialogTitleBase";

export interface DialogBaseProps extends DialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    onCancel?: () => void;
    title: string;
    content: string | React.ReactNode;
    cancelText?: string;
    confirmText?: string;
    showCancel?: boolean;
    zIndex?: number;
    formId?: string;
}

const DialogBase = (props: DialogBaseProps) => {
    const {
        open,
        onClose,
        onCancel,
        onConfirm,
        title,
        content,
        cancelText,
        confirmText,
        showCancel = true,
        zIndex,
        formId,
        ...rest
    } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                style: { borderRadius: 16 },
            }}
            sx={{
                ...(zIndex ? { zIndex } : {}),
            }}
            onClick={(e) => {
                if ((e.target as HTMLElement)?.className?.includes("MuiDialog-container")) {
                    onClose();
                }
                e.stopPropagation();
            }}
            {...rest}
        >
            <DialogTitleBase title={title} />
            <DialogContentBase content={content} />
            <DialogActionBase
                onCancel={onCancel}
                onConfirm={onConfirm}
                onClose={onClose}
                cancelText={cancelText}
                confirmText={confirmText}
                showCancel={showCancel}
                formId={formId}
            />
        </Dialog>
    );
};

export default DialogBase;
