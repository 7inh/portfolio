import { DialogTitle } from "@mui/material";

export interface DialogTitleBaseProps {
    title: string;
}

const DialogTitleBase = (props: DialogTitleBaseProps) => {
    const { title } = props;

    return (
        <DialogTitle
            sx={{
                p: 2,
                textAlign: "center",
            }}
        >
            {title}
        </DialogTitle>
    );
};

export default DialogTitleBase;
