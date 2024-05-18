import { useMemo } from "react";
import withSectionControl from "src/HOCs/withSectionControl";
import { INFO } from "src/common/consts";
import TypographyBase from "src/components/Typographys/TypographyBase";
import useTranslation from "src/hooks/utils/useTranslation";
import SectionContainer from "src/pages/components/SectionContainer/SectionContainer";

const About = () => {
    const t = useTranslation();

    const renderSummary = useMemo(() => {
        return (
            <SectionContainer id="about" label={t("page.about.title")}>
                <TypographyBase variant="subtitle1">{INFO.summary}</TypographyBase>
            </SectionContainer>
        );
    }, [t]);
    return <>{renderSummary}</>;
};

export default withSectionControl(About);
