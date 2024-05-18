import { Routes } from "src/common/consts";
import Contact from "src/pages/components/Contact/Contact";
import Home from "src/pages/components/Home/Home";
import Projects from "src/pages/components/Projects/Projects";
import SideMenu from "src/pages/components/SideMenu/SideMenu";
import About from "src/pages/components/Summary/Summary";
import WorkHistory from "src/pages/components/WorkHistory/WorkHistory";
import NavProvider from "src/providers/NavProvider";
import "./style.css";

const Portfolio = () => {
    return (
        <NavProvider>
            <SideMenu />
            <Home route={Routes[0]} />
            <About route={Routes[1]} />
            <WorkHistory route={Routes[2]} />
            <Projects route={Routes[3]} />
            <Contact route={Routes[4]} />
        </NavProvider>
    );
};

export default Portfolio;
