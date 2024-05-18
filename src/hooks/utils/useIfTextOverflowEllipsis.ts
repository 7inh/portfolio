import { useEffect, useMemo, useState } from "react";

export interface UseIfTextOverflowEllipsisProps {
    ref: React.RefObject<HTMLElement>;
}

const useIfTextOverflowEllipsis = (props: UseIfTextOverflowEllipsisProps) => {
    const { ref } = props;

    const [tempCopy, setTempCopy] = useState<HTMLElement | null>(null);

    const isOverflow = useMemo(() => {
        if (!tempCopy || !ref.current) return false;
        document.body.appendChild(tempCopy);

        const isOverflow = tempCopy.clientWidth >= ref.current?.clientWidth;
        tempCopy.remove();

        return isOverflow;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current?.clientWidth]);

    useEffect(() => {
        if (!tempCopy && ref.current) {
            const tempCopy = ref.current.cloneNode(true) as HTMLElement;
            tempCopy?.setAttribute(
                "style",
                "visibility: hidden; opacity: 0; position: absolute; top: 0; left: 0; width: fit-content; z-index: -1"
            );
            setTempCopy(tempCopy);
        }
    }, [ref, tempCopy]);

    return { isOverflow };
};

export default useIfTextOverflowEllipsis;
