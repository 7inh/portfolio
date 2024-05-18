import { createContext, useContext } from "react";
import { Route } from "src/common/types";

export interface NavState {
    open: boolean;
    routes: Route[];
    currentRoute: Route | null;
}

interface NavContextProps extends NavState {
    toggle: () => void;
    setCurrentRoute: (route: Route) => void;
}

const NavContext = createContext<NavContextProps>({
    open: false,
    routes: [],
    currentRoute: null,
    toggle: () => {},
    setCurrentRoute: () => {},
});

NavContext.displayName = "NavContext";

const useNavContext = () => useContext(NavContext);

export { NavContext, useNavContext };
