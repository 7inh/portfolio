import { useMemo } from "react";
import withSectionControl from "src/HOCs/withSectionControl";
import BoxBase from "src/components/Boxs/BoxBase";
import FormSendMessage from "src/components/Forms/FormSendMessage";
import useTranslation from "src/hooks/utils/useTranslation";
import Information from "src/pages/components/Contact/Information";
import SectionContainer from "src/pages/components/SectionContainer/SectionContainer";

const Contact = () => {
    const t = useTranslation();
    const renderContact = useMemo(() => {
        return (
            <SectionContainer id="contact" label={t("page.contact.title")}>
                <BoxBase
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > *:last-child": {
                            flexGrow: 1,
                        },
                        columnGap: {
                            xs: 5,
                            sm: 20,
                        },
                        rowGap: 5,
                        px: {
                            xs: 0,
                            sm: 5,
                            md: 10,
                        },
                    }}
                >
                    <Information />
                    <FormSendMessage />
                </BoxBase>
            </SectionContainer>
        );
    }, [t]);

    return <>{renderContact}</>;
};

export default withSectionControl(Contact);
