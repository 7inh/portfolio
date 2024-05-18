import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";

export interface SelectBaseProps {
    icon?: React.ReactNode;
    options: {
        value: string;
        label: string;
    }[];
    onChange?: (value: { value: string; label: string }) => void;
}

const SelectBase = (props: SelectBaseProps) => {
    const { icon, options, onChange } = props;

    const [value, setValue] = useState(options[0].value);

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);

        onChange?.({
            value: event.target.value as string,
            label: options.find((option) => option.value === event.target.value)?.label || "",
        });
    };

    return (
        <Select
            labelId="select-base"
            size="small"
            value={value}
            onChange={handleChange}
            startAdornment={icon}
            sx={{
                "& .MuiSelect-select": {
                    py: 1,
                    ".MuiTypography-root": {
                        fontSize: "16px !important",
                    },
                },
            }}
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    <Typography
                        sx={{
                            fontSize: "14px",
                        }}
                    >
                        {option.label}
                    </Typography>
                </MenuItem>
            ))}
        </Select>
    );
};

export default SelectBase;
