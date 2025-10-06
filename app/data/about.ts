export type Achievement = string;

export type ExperienceImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

export type Experience = {
    company: string;
    timeframe: string;
    role: string;
    achievements: Achievement[];
    images?: ExperienceImage[];
};

export type Institution = {
    name: string;
    description: string;
};

export type SkillTag = {
    name: string;
    icon?: string;
};

export type SkillImage = ExperienceImage;

export type Skill = {
    title: string;
    description?: string;
    tags?: SkillTag[];
    images?: SkillImage[];
};

export type Person = {
    firstName: string;
    lastName: string;
    name: string;
    role: string;
    avatar: string;
    email: string;
    location: string;
    locationIcon?: string;
    languages?: string[];
};

export type SocialLink = {
    name: string;
    icon?: string;
    link: string;
};

export const person: Person = {
    firstName: "Carolina",
    lastName: "Capilla",
    name: "Carolina Capilla",
    role: "Full Stack Developer & Agentic AI Developer",
    avatar: "/avatar.jpeg",
    email: "carolina.capilla@gmail.com",
    location: "Europe/Madrid",
    locationIcon: "pepicons-pop:earth-europe",
    languages: [ "English", "Spanish"],
};

export const social: SocialLink[] = [
    { name: "GitHub", icon: "uil:github", link: "https://github.com/CarolinaCapilla" },
    { name: "LinkedIn", icon: "simple-icons:linkedin", link: "https://www.linkedin.com/in/carolina-capilla" },
    { name: "Email", icon: "mdi:email", link: "mailto:carolina.capilla@gmail.com" },
];

export const aboutContent = {
    title: `About – ${person.name}`,
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    intro: {
        display: true,
        title: "Introduction",
        description: [
            "Full Stack Developer with experience in backend and frontend development, building scalable, user-focused applications.",
            "Strong problem-solving and communication skills; quick to adapt and learn new technologies.",
            "Currently focused on Python and Agentic AI: building agents and prototypes with OpenAI Agents SDK, CrewAI, and LangGraph.",
        ],
    },
    work: {
        display: true,
        title: "Work Experience",
        experiences: [
            {
                company: "Lenox Park Solutions, Inc.",
                timeframe: "2021 - 2025",
                role: "Intermediate Full Stack Developer",
                achievements: [
                    "Developed and maintained applications using Laravel (PHP) and Vue.js.",
                    "Built and optimized RESTful APIs for data-driven features and reporting.",
                    "Collaborated cross-functionally to deliver scalable, client-focused solutions.",
                    "Maintained database solutions using MySQL and PostgreSQL.",
                    "Improved performance and UX via efficient backend logic and clean frontend.",
                    "Participated in agile rituals using Jira/Asana/Slack.",
                ],
                images: [],
            },
            {
                company: "Le Wagon",
                timeframe: "2020 - 2022",
                role: "Teaching Assistant",
                achievements: [
                    "Assisted students with Ruby on Rails and JavaScript concepts and projects.",
                    "Provided guidance to improve coding and problem-solving skills.",
                ],
                images: [],
            },
        ] as Experience[],
    },
    studies: {
        display: true,
        title: "Studies",
        institutions: [
            { name: "Le Wagon Coding Bootcamp (London)", description: "Full Stack Web Development – Computer Software" },
            {
                name: "Agentic AI Engineering Course (Udemy)",
                description:
                    "Agentic AI with Python & LLMs (OpenAI, Anthropic, Google, Grok). Built agents via OpenAI Agents SDK, CrewAI, LangGraph, AutoGen, MCP.",
            },
        ] as Institution[],
    },
    technical: {
        display: true,
        title: "Technical skills",
        skills: [
            {
                title: "Laravel/PHP",
                description:
                    "4+ years building production apps/APIs with Laravel (PHP): RESTful services, authentication, queues, mail, testing, and DB design.",
                tags: [{ name: "Laravel", icon: "simple-icons:laravel" }, { name: "PHP", icon: "simple-icons:php" }],
            },
            {
                title: "Python & Agentic AI",
                description:
                    "Agentic AI in Python: multi-agent systems, tool use, planning, orchestration with OpenAI Agents SDK, CrewAI, LangGraph. Building personal agents and prototypes.",
                tags: [{ name: "Python", icon: "simple-icons:python" }, { name: "OpenAI", icon: "simple-icons:openai" }, { name: "CrewAI", icon: "mdi:robot-outline" }, { name: "LangGraph", icon: "ph:graph" }],
            },
            {
                title: "Vue.js/Vuetify/Tailwind CSS",
                description: "Building modern apps with Vue.js + Vuetify + Tailwind CSS.",
                tags: [{ name: "Vue.js", icon: "simple-icons:vuedotjs" }, { name: "Vuetify", icon: "simple-icons:vuetify" }, { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" }],
            },
{
                    title: "Docker",
                    description:
                        "Beginner-level Docker: containerize apps with simple Dockerfiles and run them using Docker; basic compose, volumes, and networking.",
                    tags: [{ name: "Docker", icon: "simple-icons:docker" }],
                },
        ] as Skill[],
    },
};


