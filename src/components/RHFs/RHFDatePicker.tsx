import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
    name: string;
    label: string;
}

const RHFDatePicker = (props: Props) => {
    const { name, label } = props;
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label={label}
                        onChange={(newValue: any, context) => {
                            if (context.validationError === null) field.onChange(newValue);
                        }}
                        value={field.value}
                        sx={{
                            width: "100%",
                        }}
                        slotProps={{
                            textField: {
                                autoComplete: "off",
                                name: name,
                            },
                        }}
                        format="DD/MM/YYYY"
                    />
                </LocalizationProvider>
            )}
        />
    );
};

export default RHFDatePicker;
