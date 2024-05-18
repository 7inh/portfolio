import BoxBase, { BoxBaseProps } from "src/components/Boxs/BoxBase";

export interface CardBaseProps extends BoxBaseProps {
    ref?: React.Ref<HTMLDivElement>;
}

const CardBase = ({ children, sx, ...props }: CardBaseProps) => {
    return (
        <BoxBase
            sx={{
                bgcolor: "white",
                p: "18px 30px",
                boxSizing: "border-box",
                borderRadius: "10px",
                ...sx,
            }}
            {...props}
        >
            {children}
        </BoxBase>
    );
};

export default CardBase;
