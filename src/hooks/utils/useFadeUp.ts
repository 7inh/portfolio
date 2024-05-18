import { useEffect } from "react";

export interface UseFadeUpProps {
    ref: React.RefObject<HTMLDivElement>;
    threshold?: number;
}

const useFadeUp = ({ ref, threshold = 0.3 }: UseFadeUpProps) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-up");
                }
            },
            { threshold }
        );

        if (ref.current) {
            const currentRef = ref.current;
            observer.observe(currentRef);

            return () => {
                observer.unobserve(currentRef);
            };
        }
    }, [ref, threshold]);
};

export default useFadeUp;
