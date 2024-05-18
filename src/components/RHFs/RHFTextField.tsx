import { useFormContext, Controller, UseControllerProps } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useBoolean } from "src/hooks/utils/useBoolean";
import { InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { textFieldsSx } from "src/common/sxs";

type Props = TextFieldProps & {
    name: string;
    rules?: UseControllerProps["rules"];
    isPassword?: boolean;
    stripOnBlur?: boolean;
};

export default function RHFTextField({
    name,
    helperText,
    type,
    rules,
    onChange,
    isPassword,
    stripOnBlur = true,
    sx,
    ...other
}: Props) {
    const { control } = useFormContext();

    const visible = useBoolean(!!isPassword);

    return (
        <Controller
            rules={rules}
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    fullWidth
                    type={isPassword ? (!visible.value ? "text" : "password") : type}
                    value={field.value}
                    onChange={(event) => {
                        if (type === "number") {
                            if (!event.target.value) {
                                field.onChange("");
                            } else {
                                field.onChange(Number(event.target.value));
                            }
                        } else {
                            field.onChange(event.target.value);
                        }
                        onChange?.(event);
                    }}
                    error={!!error}
                    helperText={error ? error?.message : helperText}
                    sx={{
                        ...textFieldsSx,
                        ...sx,
                    }}
                    InputProps={{
                        ...(isPassword
                            ? {
                                  endAdornment: (
                                      <InputAdornment position="end">
                                          <IconButton onClick={visible.onToggle} edge="end">
                                              {visible.value ? (
                                                  <VisibilityIcon />
                                              ) : (
                                                  <VisibilityOffIcon />
                                              )}
                                          </IconButton>
                                      </InputAdornment>
                                  ),
                              }
                            : {}),
                    }}
                    {...(stripOnBlur
                        ? { onBlur: (e) => field.onChange(e.target.value.trim()) }
                        : {})}
                    {...other}
                />
            )}
        />
    );
}
