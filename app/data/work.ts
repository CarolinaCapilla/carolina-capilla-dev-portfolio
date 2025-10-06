export type ProjectTag = { name: string; icon?: string }

export type Project = {
    id: number
    title: string
    description: string
    image: string
    tags?: ProjectTag[]
    link?: string,
    source?: string,
    isPortfolio?: boolean
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'A sleek personal portfolio built with Nuxt and Tailwind, with light and dark themes.',
        image: '/portfolio.png',
        tags: [
            { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' },
            { name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
            { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
            { name: 'Typescript', icon: 'simple-icons:typescript' },
        ],
        isPortfolio: true,
        source: 'https://github.com/sahajjain/magic-portfolio-vue',
    },
    {
        id: 2,
        title: 'Trader Floor AI Simulator',
        description: 'A sandbox trading floor where multiple AI traders research, decide, and trade on a schedule. Real‑time Gradio dashboard, local account database, and pluggable MCP servers for market data, accounts, and notifications — powered by OpenAI.',
        image: '/trader-ai.png',
        tags: [
            { name: 'OpenAI', icon: 'simple-icons:openai' },
            { name: 'Gradio', icon: 'simple-icons:gradio' },
            { name: 'MCP', icon: 'gravity-ui:logo-mcp'}
        ],
        link: 'https://nyask-trader-floor-ai-simulator.hf.space/?__theme=dark',
        source: 'https://github.com/CarolinaCapilla/trader-floor-ai-simulator',
    },
    {
        id: 3,
        title: 'Sidekick AI Personal Co-Worker',
        description:
            'A friendly helper that tackles everyday tasks for you. It strings steps together with LangGraph and shows progress in a simple, clean Gradio app.',
        image: '/placeholder-work.svg',
        tags: [
            { name: 'LangGraph', icon: 'ph:graph' },
            { name: 'Gradio', icon: 'simple-icons:gradio' },
        ],
        source: 'https://github.com/CarolinaCapilla/sidekick-ai-assistant',
    },
    {
        id: 4,
        title: 'Deep Research AI Agent',
        description:
            'Give it a topic and it does the digging: plans with OpenAI, reads sources, and turns findings into easy‑to‑scan summaries or email notes. Comes with a lightweight Gradio UI.',
        image: '/placeholder-work.svg',
        tags: [
            { name: 'OpenAI', icon: 'simple-icons:openai' },
            { name: 'Gradio', icon: 'simple-icons:gradio' },
            { name: 'Docker', icon: 'simple-icons:docker' },
        ],
        source: 'https://github.com/CarolinaCapilla/deep-research',
    },
    {
        id: 5,
        title: 'Financial Researcher Crew AI Agent',
        description:
            'A small team of agents (powered by crewAI) that reviews companies and markets together, then hands you tidy Markdown briefs you can share.',
        image: '/placeholder-work.svg',
        tags: [{ name: 'crewAI', icon: 'mdi:robot-outline' }],
        source: 'https://github.com/CarolinaCapilla/financial_researcher',
    },
    // {
    //     id: 6,
    //     title: 'Stock Picker Crew AI Agent',
    //     description:
    //         'A smart stock‑picking buddy (powered by crewAI) that scouts a sector for trending companies, does the homework, and recommends the best investment pick. Shares tidy results as Markdown and JSON.',
    //     image: '/placeholder-work.svg',
    //     tags: [{ name: 'crewAI', icon: 'mdi:robot-outline' }],
    //     source: 'https://github.com/CarolinaCapilla/stock-picker',
    // },
]


