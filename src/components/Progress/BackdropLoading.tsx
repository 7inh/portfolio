import { Backdrop, CircularProgress } from "@mui/material";

export interface BackdropLoadingProps {
    open: boolean;
}

const BackdropLoading = ({ open }: BackdropLoadingProps) => {
    return (
        <Backdrop
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                color: "#fff",
            }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default BackdropLoading;
