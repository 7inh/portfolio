import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const now = DateTime.now();
        const nextMidnight = now.plus({ days: 1 }).startOf("day");
        const millisecondsUntilMidnight = nextMidnight.diff(now).milliseconds;

        const timeoutId = setTimeout(() => {
            setCurrentTime(new Date());
        }, millisecondsUntilMidnight);

        return () => clearTimeout(timeoutId);
    }, []);

    return currentTime;
};

export default useCurrentTime;
