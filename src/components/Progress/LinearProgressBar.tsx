import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === "light" ? "#22C55E" : "#308fe8",
    },
}));

export interface LinearProgressBarProps {
    value: number;
}

const LinearProgressBar = ({ value }: LinearProgressBarProps) => {
    return <BorderLinearProgress variant="determinate" value={value} />;
};

export default LinearProgressBar;
