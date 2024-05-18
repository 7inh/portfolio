import TypographyBase from "src/components/Typographys/TypographyBase";

export interface TypographyWithLinkProps {
    replaceList: {
        key: string;
        value: React.ReactNode | string;
    }[];
    text: string;
}

const TypographyWithLink = (props: TypographyWithLinkProps) => {
    const { replaceList, text } = props;

    return (
        <TypographyBase
            sx={{
                fontSize: "12px",
                color: "#637381",
                fontWeight: 400,
                lineHeight: "18px",
                textAlign: "center",
                textWrap: "balance",
            }}
        >
            {text.split(/(%\{.*?\})/).map((item) => {
                const isReplace = replaceList.find((replaceItem) => {
                    return item === `%{${replaceItem.key}}`;
                });
                if (isReplace) {
                    if (typeof isReplace.value === "string") {
                        return (
                            <TypographyBase
                                component="span"
                                key={item}
                                sx={{
                                    fontSize: "12px",
                                    textDecoration: "underline",
                                }}
                            >
                                {isReplace.value}
                            </TypographyBase>
                        );
                    }
                    return isReplace.value;
                }
                return item;
            })}
        </TypographyBase>
    );
};

export default TypographyWithLink;
