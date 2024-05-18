import Timeline from "@mui/lab/Timeline";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { useMemo } from "react";
import withSectionControl from "src/HOCs/withSectionControl";
import { INFO } from "src/common/consts";
import { useResponsive } from "src/hooks/utils/useResponsive";
import useTranslation from "src/hooks/utils/useTranslation";
import SectionContainer from "src/pages/components/SectionContainer/SectionContainer";
import WorkHistoryItem from "src/pages/components/WorkHistory/WorkHistoryItem";

const WorkHistory = () => {
    const t = useTranslation();
    const mdDown = useResponsive("down", "md");
    const renderWorkHistory = useMemo(() => {
        return (
            <SectionContainer id="work-history" label={t("page.employmentHistory.title")}>
                <Timeline
                    sx={{
                        ...(mdDown
                            ? {
                                  [`& .${timelineItemClasses.root}:before`]: {
                                      flex: 0,
                                      padding: 0,
                                  },
                              }
                            : {
                                  [`& .${timelineOppositeContentClasses.root}`]: {
                                      flex: 0.2,
                                  },
                              }),
                    }}
                >
                    {INFO.employmentHistory.map((workHistoryItem, index) => (
                        <WorkHistoryItem
                            key={index}
                            {...workHistoryItem}
                            oppositeContent={!mdDown}
                        />
                    ))}
                </Timeline>
            </SectionContainer>
        );
    }, [mdDown, t]);
    return <>{renderWorkHistory}</>;
};

export default withSectionControl(WorkHistory);
