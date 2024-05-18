import { useEffect, useState } from "react";
import { INFO } from "src/common/consts";
import TypographyBase from "src/components/Typographys/TypographyBase";

const Typing = () => {
    const [typingState, setTypingState] = useState({
        index: 0,
        isIncreasing: true,
    });

    useEffect(() => {
        const interval = setInterval(
            () => {
                setTypingState((prev) => ({
                    index: prev.isIncreasing ? prev.index + 1 : prev.index - 1,
                    isIncreasing:
                        prev.index === INFO.role.length
                            ? false
                            : prev.index === 1
                            ? true
                            : prev.isIncreasing,
                }));
            },
            typingState.index === INFO.role.length ? 1000 : 100
        );
        return () => clearInterval(interval);
    }, [typingState.index]);

    return (
        <TypographyBase variant="subtitle2">
            {INFO.intro}{" "}
            <TypographyBase component="span" color="primary.main">
                {INFO.role.slice(0, typingState.index)}|
            </TypographyBase>
        </TypographyBase>
    );
};

export default Typing;
