import BoxBase from "src/components/Boxs/BoxBase";
import TypographyBase from "src/components/Typographys/TypographyBase";

export interface TypographyWithValueProps {
    title: string;
    value: string;
}

const TypographyWithValue = ({ title, value }: TypographyWithValueProps) => {
    return (
        <BoxBase>
            <TypographyBase variant="body1" color="secondary.contrastText">
                {title}{" "}
                <TypographyBase
                    component="span"
                    color="secondary.contrastText"
                    sx={{
                        border: "1px solid",
                        borderRadius: "5px",
                        p: "2px 6px",
                        height: "24px",
                    }}
                >
                    {value}
                </TypographyBase>
            </TypographyBase>
        </BoxBase>
    );
};

export default TypographyWithValue;
