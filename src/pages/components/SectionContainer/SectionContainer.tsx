import { useRef } from "react";
import BoxBase from "src/components/Boxs/BoxBase";
import DividerShort from "src/components/Divider/DividerShort";
import TypographyBase from "src/components/Typographys/TypographyBase";
import useFadeUp from "src/hooks/utils/useFadeUp";

export interface SectionContainerProps {
    children: React.ReactNode;
    id: string;
    label: string;
}

const SectionContainer = ({ children, label, id }: SectionContainerProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useFadeUp({ ref });

    return (
        <BoxBase
            component="section"
            id={id}
            sx={{
                px: {
                    xs: 2,
                    sm: 5,
                    md: 10,
                },
                boxSizing: "border-box",
                py: 10,
                textAlign: "center",
                ".fade-up": {
                    pt: 10,
                },
            }}
            ref={ref}
        >
            <TypographyBase variant="h4">{label}</TypographyBase>
            <DividerShort />
            {children}
        </BoxBase>
    );
};

export default SectionContainer;
