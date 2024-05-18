import { Chip } from "@mui/material";
import RHFAutocomplete from "src/components/RHFs/RHFAutocomplete";

export interface RHFAutocompleteMultipleProps<T = any> {
    name: string;
    label: string;
    options: T[];
    optionKey: keyof T;
    optionLabel: keyof T;
}

const RHFAutocompleteMultiple = <T,>(props: RHFAutocompleteMultipleProps<T>) => {
    const { name, label, options, optionKey, optionLabel } = props;
    return (
        <RHFAutocomplete
            limitTags={1}
            name={name}
            label={label}
            multiple
            getOptionLabel={(option) => {
                if (typeof option === "string") {
                    return option;
                }
                const label = option[optionLabel];

                if (typeof label === "string") {
                    return label;
                }

                return "";
            }}
            renderTags={(value: T[], getTagProps: any) =>
                value.map((option, index) => (
                    <Chip
                        key={index}
                        {...getTagProps({ index })}
                        label={option[optionLabel] as string}
                        sx={{
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "text.primary",
                        }}
                    ></Chip>
                ))
            }
            options={options}
            disableClearable
            filterSelectedOptions
            isOptionEqualToValue={(option, value) => option[optionKey] === value[optionKey]}
            sx={{
                minWidth: "250px",
            }}
            // chip overflow collapse + number
        />
    );
};

export default RHFAutocompleteMultiple;
