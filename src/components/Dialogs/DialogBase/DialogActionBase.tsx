import { DialogActions } from "@mui/material";
import ButtonBase from "src/components/Buttons/ButtonBase";
import TypographyBase from "src/components/Typographys/TypographyBase";
import useTranslation from "src/hooks/utils/useTranslation";

export interface DialogActionBaseProps {
    showCancel?: boolean;
    cancelText?: string;
    confirmText?: string;
    onConfirm: () => void;
    onCancel?: () => void;
    onClose: () => void;
    formId?: string;
}

const DialogActionBase = (props: DialogActionBaseProps) => {
    const { showCancel, cancelText, confirmText, formId, onConfirm, onCancel, onClose } = props;
    const t = useTranslation();

    return (
        <DialogActions
            sx={{
                width: "100%",
                p: 3,
                pt: 0,
                boxSizing: "border-box",
                display: "grid",
                gridTemplateColumns: `${showCancel ? "1fr" : ""} 1fr`,
            }}
        >
            {showCancel ? (
                <ButtonBase
                    onClick={() => {
                        onCancel?.();
                        onClose();
                    }}
                    sx={{
                        bgcolor: "#D9D9D9",
                        textTransform: "none",
                        p: 1.2,
                        borderRadius: "10px",
                        "&:hover": {
                            bgcolor: "#D9D9D9",
                        },
                    }}
                >
                    <TypographyBase variant="body1">
                        {cancelText || t("common.cancel")}
                    </TypographyBase>
                </ButtonBase>
            ) : null}
            <ButtonBase
                onClick={onConfirm}
                variant="contained"
                sx={{
                    boxShadow: "none",
                    textTransform: "none",
                    borderRadius: "10px",
                    "&:hover": {
                        boxShadow: "none",
                    },
                    p: 1.2,
                }}
                {...(formId
                    ? {
                          form: formId,
                          type: "submit",
                      }
                    : {})}
            >
                <TypographyBase variant="body1" color="white">
                    {confirmText || t("common.confirm")}
                </TypographyBase>
            </ButtonBase>
        </DialogActions>
    );
};

export default DialogActionBase;
