import BoxBase from "src/components/Boxs/BoxBase";

export interface BackgroundBlurProps {
    placement?: "top-left" | "bottom-right";
    bgColor?: string;
}

const randomTransform = (): string => {
    const x = Math.floor(Math.random() * 100) - 50;
    const y = Math.floor(Math.random() * 100) - 50;
    return `translate(${x}%, ${y}%)`;
};

const BackgroundBlur = (props: BackgroundBlurProps) => {
    const { placement = "top-left", bgColor } = props;

    const coordinates = () => {
        if (placement === "top-left") {
            return {
                top: 0,
                left: 0,
                transform: randomTransform(),
            };
        }

        return {
            right: 0,
            bottom: 0,
            transform: randomTransform(),
        };
    };

    return (
        <BoxBase
            sx={{
                position: "absolute",
                ...coordinates(),
                width: "524px",
                height: "505px",
                borderRadius: "50%",
                background: bgColor,
                pointerEvents: "none",
                filter: "blur(150px)",
            }}
        />
    );
};

export default BackgroundBlur;
