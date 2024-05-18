import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Iconify from "src/components/Iconify/Iconify";
import useTranslation from "src/hooks/utils/useTranslation";

export interface InputSearchProps {
    defaultValue?: string;
    onChange?: (value: string) => void;
}

const InputSearch = (props: InputSearchProps) => {
    const { defaultValue, onChange } = props;

    const t = useTranslation();

    const [value, setValue] = useState(defaultValue ?? "");

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange?.(value);
        }, 500);

        return () => clearTimeout(timeout);
    }, [onChange, value]);

    return (
        <TextField
            fullWidth
            value={value}
            placeholder={t("common.search") + "..."}
            onChange={(e) => setValue(e.target.value)}
            sx={(theme) => ({
                "& fieldset": {
                    border: "1px solid rgba(145, 158, 171, 0.20)",
                    borderRadius: "8px",
                },
                "& input": {
                    fontWeight: 400,
                },
                "&:hover fieldset": {
                    border: `1px solid ${theme.palette.primary.main} !important`,
                },
                "& .MuiInputBase-root": {
                    borderRadius: "8px",
                    background: "white",
                },
                minWidth: {
                    sm: "300px",
                    md: "343px",
                },
            })}
            InputProps={{
                startAdornment: (
                    <Iconify
                        icon="eva:search-fill"
                        sx={{
                            width: "24px",
                            height: "24px",
                            color: "#919EAB",
                        }}
                    />
                ),
            }}
            inputProps={{
                style: {
                    padding: 14,
                    paddingLeft: 8,
                },
            }}
        />
    );
};

export default InputSearch;
