import { BoxProps } from "@mui/material";
import { useCallback } from "react";
import { FieldValues, FormProvider as Form, UseFormReturn } from "react-hook-form";
import { isRequestSuccessful } from "src/common/utils";
import BoxBase from "src/components/Boxs/BoxBase";
import BackdropLoading from "src/components/Progress/BackdropLoading";

interface Props<T extends FieldValues, P = T> extends Omit<BoxProps, "ref"> {
    ref?: React.Ref<HTMLDivElement>;
    children: React.ReactNode;
    methods: UseFormReturn<T>;
    formId?: string;
    mutateAsyncFn?: (params: P) => Promise<any>;
    mapDataToParams?: (data: T) => P;
    onChange?: VoidFunction;
    onSuccessful?: (data: any) => void;
    onSubmitCustom?: (data: T) => void;
    validateResponse?: (response: any) => boolean;
}

const RHFWrapper = <T extends FieldValues, P = T>({
    children,
    onChange,
    mutateAsyncFn,
    onSuccessful,
    mapDataToParams,
    onSubmitCustom,
    validateResponse,
    methods,
    formId,
    ref,
    ...rest
}: Props<T, P>) => {
    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = useCallback(
        async (data) => {
            if (!mutateAsyncFn) {
                return;
            }

            const response: any = await mutateAsyncFn?.(
                mapDataToParams ? mapDataToParams(data) : data
            );

            if (validateResponse ? validateResponse(response) : isRequestSuccessful(response)) {
                onSuccessful?.(response.data?.data);
            }
        },
        [mapDataToParams, mutateAsyncFn, onSuccessful, validateResponse]
    );

    return (
        <Form {...methods}>
            <BackdropLoading open={isSubmitting} />
            <BoxBase
                ref={ref}
                component="form"
                onSubmit={handleSubmit(onSubmitCustom ? onSubmitCustom : onSubmit)}
                onChange={onChange}
                {...(formId ? { id: formId } : {})}
                {...rest}
            >
                {children}
            </BoxBase>
        </Form>
    );
};

export default RHFWrapper;
