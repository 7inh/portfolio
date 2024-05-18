export const scrollbarSx = {
    "::-webkit-scrollbar": {
        width: "3px",
    },
    "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
        bgcolor: "primary.main",
    },
    "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
    },
};

export const textFieldsSx = {
    "& fieldset": {
        borderRadius: "8px",
        border: "1px solid rgba(145, 158, 171, 0.20) !important",
    },
    "& label": {
        color: "#919EAB !important",
        fontWeight: 400,
    },
    "& label.MuiInputLabel-shrink": {
        top: 1.5,
    },
    "& input": {
        fontSize: "14px",
        fontWeight: 400,
        color: "text.primary",
    },
    "& label.Mui-focused": {
        color: "#637381 !important",
        fontWeight: 500,
    },
    "& textarea::placeholder": {
        fontSize: "14px",
        fontWeight: 400,
    },
    "& textarea": {
        fontSize: "14px",
        fontWeight: 400,
    },
};
