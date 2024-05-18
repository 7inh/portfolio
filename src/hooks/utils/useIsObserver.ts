import { useEffect } from "react";

export interface UseIsObserverProps {
    querySelector: string;
    onIntersecting?: (isIntersecting: boolean) => void;
}

const useIsObserver = ({ querySelector, onIntersecting }: UseIsObserverProps) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                onIntersecting?.(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        const ref = document.querySelector(querySelector);
        if (ref) {
            observer.observe(ref);
            return () => {
                observer.unobserve(ref);
            };
        }
    }, [onIntersecting, querySelector]);
};

export default useIsObserver;
