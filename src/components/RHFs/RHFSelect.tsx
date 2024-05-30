import { Controller, useFormContext } from "react-hook-form";
import { CircularProgress, InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectProps } from "@mui/material/Select";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles";
import { textFieldsSx } from "src/common/sxs";
import TypographyBase from "src/components/Typographys/TypographyBase";

type RHFSelectProps = TextFieldProps & {
    name: string;
    native?: boolean;
    maxHeight?: boolean | number;
    children?: React.ReactNode;
    PaperPropsSx?: SxProps<Theme>;
    loading?: boolean;
    options?: any[];
    getOptionKey?: (option: any) => string;
    getOptionLabel?: (option: any) => string;
    onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
};

export function RHFSelect({
    name,
    native,
    maxHeight = 220,
    helperText,
    children,
    PaperPropsSx,
    loading,
    options = [],
    getOptionKey,
    getOptionLabel,
    onChange: _onChange,
    ...other
}: RHFSelectProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    onChange={(value) => {
                        _onChange?.(value);
                        field.onChange(value);
                    }}
                    select
                    fullWidth
                    SelectProps={{
                        native,
                        MenuProps: {
                            PaperProps: {
                                sx: {
                                    ...(!native && {
                                        maxHeight:
                                            typeof maxHeight === "number" ? maxHeight : "unset",
                                    }),
                                    ...PaperPropsSx,
                                },
                            },
                        },
                        sx: { textTransform: "capitalize" },
                    }}
                    error={!!error}
                    disabled={loading}
                    helperText={error ? error?.message : helperText}
                    InputProps={
                        loading
                            ? {
                                  endAdornment: (
                                      <InputAdornment position="end">
                                          <CircularProgress size={25} color="primary" />
                                      </InputAdornment>
                                  ),
                              }
                            : {}
                    }
                    sx={{
                        ...textFieldsSx,
                    }}
                    {...other}
                    value={getOptionLabel?.(field.value) || field.value}
                >
                    {options.map((item) => {
                        const key = getOptionKey?.(item) || item;
                        return (
                            <MenuItem key={key} value={key}>
                                <TypographyBase variant="body2">
                                    {getOptionLabel?.(item) || item}
                                </TypographyBase>
                            </MenuItem>
                        );
                    })}
                    {children}
                </TextField>
            )}
        />
    );
}

type RHFMultiSelectProps = SelectProps & {
    name: string;
    label?: string;
    chip?: boolean;
    checkbox?: boolean;
    placeholder?: string;
    helperText?: React.ReactNode;
    options: {
        label: string;
        value: string;
    }[];
};

export function RHFMultiSelect({
    name,
    chip,
    label,
    options,
    checkbox,
    placeholder,
    helperText,
    sx,
    ...other
}: RHFMultiSelectProps) {
    const { control } = useFormContext();

    const renderValues = (selectedIds: string[]) => {
        const selectedItems = options.filter((item) => selectedIds.includes(item.value));

        if (!selectedItems.length && placeholder) {
            return (
                <Box component="em" sx={{ color: "text.disabled" }}>
                    {placeholder}
                </Box>
            );
        }

        if (chip) {
            return (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selectedItems.map((item) => (
                        <Chip key={item.value} size="small" label={item.label} />
                    ))}
                </Box>
            );
        }

        return selectedItems.map((item) => item.label).join(", ");
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <FormControl sx={sx}>
                    {label && <InputLabel id={name}> {label} </InputLabel>}

                    <Select
                        {...field}
                        multiple
                        displayEmpty={!!placeholder}
                        labelId={name}
                        input={<OutlinedInput fullWidth label={label} error={!!error} />}
                        renderValue={renderValues}
                        {...other}
                    >
                        {placeholder && (
                            <MenuItem disabled value="">
                                <em> {placeholder} </em>
                            </MenuItem>
                        )}

                        {options.map((option) => {
                            const selected = field.value.includes(option.value);

                            return (
                                <MenuItem key={option.value} value={option.value}>
                                    {checkbox && (
                                        <Checkbox size="small" disableRipple checked={selected} />
                                    )}

                                    {option.label}
                                </MenuItem>
                            );
                        })}
                    </Select>

                    {(!!error || helperText) && (
                        <FormHelperText error={!!error}>
                            {error ? error?.message : helperText}
                        </FormHelperText>
                    )}
                </FormControl>
            )}
        />
    );
}
