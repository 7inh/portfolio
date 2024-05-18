import { useFormContext, Controller, UseControllerProps } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import { Tooltip } from "@mui/material";
import useTranslation from "src/hooks/utils/useTranslation";
import { textFieldsSx } from "src/common/sxs";
import Iconify from "src/components/Iconify/Iconify";

interface Props<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
    name: string;
    label?: string;
    placeholder?: string;
    helperText?: React.ReactNode;
    required?: boolean;
    renderTags?: any;
    rules?: UseControllerProps["rules"];
    type?: "tags" | "others";
    onBlurWithValue?: (value: any) => void;
    showInfoIcon?: boolean;
    infoIconTooltip?: string;
    multiline?: boolean;
    minRows?: number;
    shrink?: boolean;
    customSx?: any;
    showAddIcon?: boolean;
}

export default function RHFAutocomplete<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined
>({
    name,
    label,
    placeholder,
    helperText,
    renderTags,
    rules,
    type,
    onChange = undefined,
    onBlurWithValue,
    showAddIcon = false,
    showInfoIcon = false,
    infoIconTooltip,
    multiline,
    minRows,
    shrink,
    customSx,
    ...other
}: Omit<Props<T, Multiple, DisableClearable, FreeSolo>, "renderInput">) {
    const t = useTranslation();
    const { control, setValue, getValues } = useFormContext();
    const [inputValue, setInputValue] = useState("");

    return (
        <Controller
            name={name}
            rules={rules}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <Autocomplete
                    {...field}
                    inputValue={inputValue}
                    onChange={(event, newValue, reason) => {
                        setValue(name, newValue, { shouldValidate: true });
                        onChange?.(event, newValue, reason);
                    }}
                    onInputChange={(event, newInputValue) => {
                        if (type !== "tags") {
                            setInputValue(newInputValue);
                            return;
                        }

                        const options = newInputValue.split(",");
                        const value = getValues(name);

                        if (options.length > 1) {
                            setValue(
                                name,
                                value
                                    .concat(options)
                                    .map((x: string) => x.trim())
                                    .filter((x: string) => x),
                                { shouldValidate: true }
                            );
                            setInputValue("");
                            onChange?.(event, value, "selectOption");
                        } else {
                            setInputValue(newInputValue);
                        }
                    }}
                    onBlur={(event) => {
                        const value = getValues(name);
                        onBlurWithValue?.(value || inputValue);

                        if (type === "tags") {
                            if (inputValue.trim()) {
                                setValue(name, [...value, inputValue.trim()], {
                                    shouldValidate: true,
                                });
                                onChange?.(event, value, "blur");
                            }
                            setInputValue("");
                        }
                    }}
                    renderInput={({ inputProps, InputProps, InputLabelProps, ...params }) => (
                        <TextField
                            multiline={multiline}
                            minRows={minRows}
                            required={other.required}
                            label={label}
                            placeholder={!field.value?.length ? placeholder : undefined}
                            error={!!error}
                            inputProps={{
                                ...inputProps,
                                required:
                                    other.required &&
                                    (!other.multiple || getValues(name)?.length === 0),
                            }}
                            helperText={error ? error?.message : helperText}
                            InputProps={{
                                ...InputProps,
                                ...(showAddIcon && {
                                    startAdornment: (
                                        <Iconify
                                            icon="material-symbols:add"
                                            sx={{
                                                color: "#C9C9C9",
                                            }}
                                        />
                                    ),
                                }),
                                ...(showInfoIcon && {
                                    endAdornment: (
                                        <Tooltip title={infoIconTooltip} placement="top">
                                            <InfoIcon
                                                sx={{
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </Tooltip>
                                    ),
                                }),
                            }}
                            InputLabelProps={{
                                ...InputLabelProps,
                                shrink: shrink,
                            }}
                            sx={{
                                ...(showAddIcon && {
                                    ".MuiInputBase-root": {
                                        paddingRight: "-6px !important",
                                    },
                                }),
                                ...(showInfoIcon && {
                                    ".MuiInputBase-root": {
                                        paddingRight: "6px !important",
                                    },
                                }),
                                ...textFieldsSx,
                                ...customSx,
                            }}
                            {...params}
                        />
                    )}
                    renderTags={renderTags}
                    noOptionsText={t("message.noOptions")}
                    {...other}
                />
            )}
        />
    );
}
