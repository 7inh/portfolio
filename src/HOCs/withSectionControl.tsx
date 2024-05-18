import { Route } from "src/common/types";
import { useNavContext } from "src/contexts/NavContext";
import useIsObserver from "src/hooks/utils/useIsObserver";

interface WithRoute {
    route: Route;
}

const withSectionControl = <T extends object & WithRoute>(
    WrappedComponent: (_: T) => JSX.Element
) => {
    const withSectionControl = ({ route, ...props }: T) => {
        const { currentRoute, setCurrentRoute } = useNavContext();
        useIsObserver({
            querySelector: route.path,
            onIntersecting: (isIntersecting) => {
                if (isIntersecting && currentRoute?.path !== route.path) {
                    setCurrentRoute(route);
                }
            },
        });

        return <WrappedComponent {...(props as T)} />;
    };

    return withSectionControl;
};

withSectionControl.displayName = "withSectionControl";

export default withSectionControl;
