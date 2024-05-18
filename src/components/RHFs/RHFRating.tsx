import { Stack } from "@mui/material";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import StarIcon from "@mui/icons-material/Star";

type Props = {
    name: string;
};

const MAX_RATING_VALUE = 5;
const InputList = Array.from({ length: MAX_RATING_VALUE }).map((_, index) => ({
    id: uuidv4(),
    value: index,
}));

export default function RHFRating({ name }: Props) {
    const { control } = useFormContext();
    const [tempRating, setTempRating] = useState(0);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Stack direction="row" spacing={1}>
                    {InputList.map((value, index) => (
                        <StarIcon
                            key={value.id}
                            sx={{
                                cursor: "pointer",
                                color: (tempRating || field.value) > index ? "#FFC107" : "#E0E0E0",
                            }}
                            onClick={() => {
                                field.onChange(index + 1);
                            }}
                            onMouseEnter={() => {
                                setTempRating(index + 1);
                            }}
                            onMouseLeave={() => {
                                setTempRating(0);
                            }}
                        />
                    ))}
                </Stack>
            )}
        />
    );
}
