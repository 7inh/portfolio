import { Route } from "src/common/types";

export const ACCEPTED_DOCUMENT_EXT = ".pdf, .txt, .docx, .md, .pptx, .ppt, .csv";

const MAP_COLOR_TO_HEX: Record<string, string> = {
    red: "#FF0000",
    green: "#008000",
    blue: "#0000FF",
    yellow: "#FFFF00",
    orange: "#FFA500",
    purple: "#800080",
    pink: "#FFC0CB",
    brown: "#A52A2A",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#808080",
    silver: "#C0C0C0",
    gold: "#FFD700",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    teal: "#008080",
    lime: "#00FF00",
    aqua: "#00FFFF",
    fuchsia: "#FF00FF",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
};

export const MAP_COLOR_TO_HEX_PROXY = new Proxy(MAP_COLOR_TO_HEX, {
    get: function (target, prop) {
        if (prop in target) {
            return Reflect.get(target, prop);
        }
        return prop;
    },
});

export const Routes: Route[] = [
    {
        path: "#home",
        name: "page.home.title",
        icon: "line-md:home-simple",
    },
    {
        path: "#about",
        name: "page.about.title",
        icon: "line-md:account",
    },
    {
        path: "#work-history",
        name: "page.employmentHistory.title",
        icon: "line-md:briefcase",
    },
    {
        path: "#projects",
        name: "page.projects.title",
        icon: "line-md:document-code",
    },
    {
        path: "#contact",
        name: "page.contact.title",
        icon: "line-md:chat-bubble",
    },
];

export const INFO = {
    name: "Tran Quoc Linh",
    intro: "I'm a",
    role: "Software Engineer",
    summary:
        "With over four years of practical experience, I specialize in developing web applications. I adeptly leverage AI tools in my projects. My expertise spans various front‐end technologies, and I possess knowledge in back‐end development, desktop applications, and mobile app development. I stay updated with industry advancements and continuously strive to enhance my skills to contribute positively in dynamic development environ‐ ments.",
    employmentHistory: [
        {
            company: "Kamiverse JSC / NewAI VIETNAM",
            position: "Frontend Developer",
            startDate: "May 2023",
            endDate: "June 2024",
            descriptions: [
                "Built an entire website that integrated with the company’s AI system. Contributed ideas, collaborated on the development of system logic and user behavior.",
                "Developed the primary product connecting various users, facilitating community interaction, product sales, and purchases within the website. Users utilized the website for effective presentation and sales activities.",
                "Technologies: ReactJS, Typescript, react-testing-library, PostgreSQL, RESTful API.",
            ],
        },
        {
            company: "Manabie VIETNAM Co.ltd",
            position: "Front-end Developer",
            startDate: "April 2022",
            endDate: "Sep 2023",
            descriptions: [
                "Added a calendar feature to the company’s product. Developed UI components, authored unit tests, integration tests, end-to-end (e2e) tests, and low-code solutions.",
                "Crafted a standout feature with an appealing UI that provided the company with a competitive edge in marketing its products. Developed unit tests achieving over 70% coverage.",
                "Technologies: ReactJS, Typescript, react-testing-library, Hasura, gRPC, Cucumber BDD, Go-lang, Low code (Appsmith, Salesforce).",
            ],
        },
        {
            company: "Yedda/WAV Co.ltd",
            position: "Full-stack Developer",
            startDate: "Dec 2020",
            endDate: "July 2022",
            descriptions: [
                "Designed and developed lightweight applications and tools, catering to the needs of various departments and clients within the company. These applications encompassed web, desktop, and mobile platforms.",
                "Helped the company work more effectively, reduced time, and fostered increased job satisfaction among employees.",
                "Technologies: ReactJS, Typescript, React Native, Electron JS, NodeJS, PostgreSQL, MongoDB, Firebase, Python, Docker.",
            ],
        },
        {
            company: "Dai Phat Solutions Co.ltd",
            position: "AI R&D, Full-stack Developer",
            startDate: "May 2020",
            endDate: "Dec 2020",
            descriptions: [
                "Explore emerging technologies, and machine learning such as language models and time series models, and undertake the design and development of both web and desktop applications.",
                "Contributed to informed decision-making by assisting the company in selecting the most suitable technology for their projects.",
                "Technologies: Python (pandas, numpy, pytorch), ElectronJS, VueJS.",
            ],
        },
    ],
    projects: [
        {
            id: "project1",
            name: "Comage",
            description: "A mobile application for reading manga.",
            images: [
                "/imgs/comage/1.jpg",
                "/imgs/comage/2.jpg",
                "/imgs/comage/3.jpg",
                "/imgs/comage/4.jpg",
                "/imgs/comage/5.jpg",
            ],
            url: "",
        },
        {
            id: "project3",
            name: "Manabie Calendar",
            description: "A calendar for teacher and student.",
            images: [
                "/imgs/manabie/1.png",
                "/imgs/manabie/2.png",
                "/imgs/manabie/3.png",
                "/imgs/manabie/4.png",
            ],
            url: "",
        },
        {
            id: "project2",
            name: "Kamimind",
            description: "A platform for build your own AI bot.",
            images: [
                "/imgs/kamimind/1.png",
                "/imgs/kamimind/2.png",
                "/imgs/kamimind/3.png",
                "/imgs/kamimind/4.png",
                "/imgs/kamimind/5.png",
            ],
            url: "https://kamimind.ai/",
        },
        {
            id: "project3",
            name: "SUMSUE",
            description: "A book store online selling manga.",
            images: [
                "/imgs/sumsue/1.png",
                "/imgs/sumsue/2.png",
                "/imgs/sumsue/3.png",
                "/imgs/sumsue/4.png",
                "/imgs/sumsue/5.png",
            ],
            url: "https://7inh.github.io",
        },
    ],
    information: [
        {
            label: "Address",
            value: "Ho Chi Minh City, Vietnam",
        },
        {
            label: "Email",
            value: "tranquoclinh247@gmail.com",
        },
        {
            label: "Phone",
            value: "+84 0943 493 916",
        },
        {
            label: "LinkedIn",
            value: "https://www.linkedin.com/in/tranquoclinh247/",
            isLink: true,
        },
        {
            label: "Github",
            value: "https://github.com/7inh",
            isLink: true,
        },
    ],
};
