import { useCallback, useMemo, useState } from "react";
import { Routes } from "src/common/consts";
import { NavContext, NavState } from "src/contexts/NavContext";

interface NavProviderProps {
    children: React.ReactNode;
}

const NavProvider = ({ children }: NavProviderProps) => {
    const [state, setState] = useState<NavState>({
        open: true,
        routes: Routes,
        currentRoute: Routes[0],
    });

    const toggle = useCallback(() => {
        setState((prevState) => ({
            ...prevState,
            open: !prevState.open,
        }));
    }, []);

    const setCurrentRoute = useCallback((currentRoute: NavState["currentRoute"]) => {
        setState((prevState) => ({
            ...prevState,
            currentRoute,
        }));
    }, []);

    const value = useMemo(
        () => ({
            ...state,
            toggle,
            setCurrentRoute,
        }),
        [state, toggle, setCurrentRoute]
    );

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};

export default NavProvider;
