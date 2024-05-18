import { useForm } from "react-hook-form";
import BoxBase from "src/components/Boxs/BoxBase";
import ButtonPrimary from "src/components/Buttons/ButtonPrimary";
import RHFTextField from "src/components/RHFs/RHFTextField";
import RHFWrapper from "src/components/Wrappers/RHFWrapper";
import useSendMessage from "src/hooks/utils/useSendMessage";
import useSnackBar from "src/hooks/utils/useSnackBar";
import useTranslation from "src/hooks/utils/useTranslation";

export type FormSendMessageType = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

const defaultValues: FormSendMessageType = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const FormSendMessage = () => {
    const t = useTranslation();
    const snackbar = useSnackBar();

    const { submitContact } = useSendMessage({});

    const methods = useForm<FormSendMessageType>({ defaultValues });

    return (
        <RHFWrapper
            methods={methods}
            mutateAsyncFn={submitContact}
            validateResponse={() => true}
            onSuccessful={() => {
                snackbar({
                    message: t("success.sendMessage"),
                    severity: "success",
                });
                methods.reset();
            }}
        >
            <BoxBase
                sx={{
                    display: "grid",
                    gridTemplateAreas: `
                    "name email"
                    "subject subject"
                    "message message"
                `,
                    gap: "20px",
                    "& > *:nth-of-type(1)": {
                        gridArea: "name",
                    },
                    "& > *:nth-of-type(2)": {
                        gridArea: "email",
                    },
                    "& > *:nth-of-type(3)": {
                        gridArea: "subject",
                    },
                    "& > *:nth-of-type(4)": {
                        gridArea: "message",
                    },
                }}
            >
                <RHFTextField name="name" label={t("form.contact.name")} required />
                <RHFTextField name="email" label={t("form.contact.email")} required />
                <RHFTextField name="subject" label={t("form.contact.subject")} required />
                <RHFTextField
                    multiline
                    minRows={5}
                    name="message"
                    label={t("form.contact.message")}
                    required
                />
            </BoxBase>
            <br />
            <ButtonPrimary type="submit" rounded label={t("common.submit")} />
        </RHFWrapper>
    );
};

export default FormSendMessage;
