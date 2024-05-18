import { Outlet } from "react-router-dom";
import BoxBase from "src/components/Boxs/BoxBase";
import BackgroundBlur from "src/layouts/LayoutAuth/BackgroundBlur";

export interface LayoutAuthProps {}

const LayoutAuth = () => {
    return (
        <BoxBase
            sx={{
                position: "relative",
                height: "100dvh",
                overflow: "hidden",
                bgcolor: "#F5F7FA",
            }}
        >
            <BoxBase
                sx={{
                    position: "relative",
                    height: "100%",
                    zIndex: 1,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Outlet />
            </BoxBase>

            <BackgroundBlur bgColor="#C8DAFD" />
            <BackgroundBlur bgColor="#C8DAFD" placement="bottom-right" />
        </BoxBase>
    );
};

export default LayoutAuth;
