import { CircularProgress } from "@mui/material";
import BoxBase from "src/components/Boxs/BoxBase";

export interface CardLoadingProps {}

const CardLoading = (_: CardLoadingProps) => {
    return (
        <BoxBase
            sx={{
                p: 10,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <CircularProgress />
        </BoxBase>
    );
};

export default CardLoading;
