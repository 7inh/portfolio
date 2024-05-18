import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { useMemo } from "react";
import BoxBase from "src/components/Boxs/BoxBase";
import Iconify from "src/components/Iconify/Iconify";
import TypographyBase from "src/components/Typographys/TypographyBase";

export interface WorkHistoryItemProps {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    descriptions: string[];
    oppositeContent?: boolean;
}

const WorkHistoryItem = ({
    company,
    position,
    startDate,
    endDate,
    descriptions,
    oppositeContent,
}: WorkHistoryItemProps) => {
    const renderDuration = useMemo(() => {
        return (
            <BoxBase
                sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    justifyContent: oppositeContent ? "flex-end" : "flex-start",
                    gap: "8px",
                    whiteSpace: "nowrap",
                    color: "text.secondary",
                }}
            >
                <Iconify
                    icon="mdi:calendar-outline"
                    sx={{
                        flexShrink: 0,
                    }}
                />
                {startDate} - {endDate}
            </BoxBase>
        );
    }, [endDate, oppositeContent, startDate]);
    return (
        <TimelineItem>
            {oppositeContent ? (
                <TimelineOppositeContent>{renderDuration}</TimelineOppositeContent>
            ) : null}
            <TimelineSeparator>
                <TimelineDot variant="outlined" sx={{ borderColor: "rgb(5, 99, 187)" }} />
                <TimelineConnector sx={{ bgcolor: "rgb(5, 99, 187)" }} />
            </TimelineSeparator>
            <TimelineContent>
                <BoxBase>
                    <TypographyBase variant="h6">{company}</TypographyBase>
                    <TypographyBase variant="subtitle1">{position}</TypographyBase>
                    {oppositeContent ? null : renderDuration}
                    <BoxBase
                        component="ul"
                        sx={{
                            color: "#637381",
                            px: 2,
                            pt: 1,
                        }}
                    >
                        {descriptions.map((description, index) => (
                            <li key={index}>
                                <TypographyBase variant="body2">{description}</TypographyBase>
                            </li>
                        ))}
                    </BoxBase>
                </BoxBase>
            </TimelineContent>
        </TimelineItem>
    );
};

export default WorkHistoryItem;
