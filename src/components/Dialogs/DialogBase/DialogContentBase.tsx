import { DialogContent } from "@mui/material";
import TypographyBase from "src/components/Typographys/TypographyBase";

export interface DialogContentBaseProps {
    content: string | React.ReactNode;
}

const DialogContentBase = (props: DialogContentBaseProps) => {
    const { content } = props;

    return (
        <DialogContent sx={{ p: 3, pb: 3 }}>
            {typeof content === "string" ? (
                <TypographyBase
                    sx={{
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "20px",
                        whiteSpace: "pre-line",
                    }}
                    data-testid="DialogBase__content"
                >
                    {content}
                </TypographyBase>
            ) : (
                content
            )}
        </DialogContent>
    );
};

export default DialogContentBase;
