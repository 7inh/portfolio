import { useMemo } from "react";
import withSectionControl from "src/HOCs/withSectionControl";
import { INFO } from "src/common/consts";
import Particles from "src/components/AnimateBackgrounds/Particles";
import BoxBase from "src/components/Boxs/BoxBase";
import TypographyBase from "src/components/Typographys/TypographyBase";
import Typing from "src/pages/components/Home/Typing";

const Home = () => {
    const renderComponent = useMemo(() => {
        return (
            <BoxBase
                sx={{
                    height: "100vh",
                    position: "relative",
                }}
                id="home"
            >
                <Particles />
                <BoxBase
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        zIndex: 1000,
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pointerEvents: "none",
                    }}
                >
                    <BoxBase
                        sx={{
                            m: {
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 6,
                                xl: 8,
                            },
                            textAlign: "center",
                        }}
                    >
                        <TypographyBase variant="h2">{INFO.name}</TypographyBase>
                        <Typing />
                    </BoxBase>
                </BoxBase>
            </BoxBase>
        );
    }, []);

    return <>{renderComponent}</>;
};

export default withSectionControl(Home);
