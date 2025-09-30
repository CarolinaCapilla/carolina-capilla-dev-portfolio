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
        description: 'A sleek personal portfolio built with Nuxt and Tailwind.',
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
        title: 'Sidekick AI Personal Co-Worker',
        description:
            'An intelligent AI assistant that helps you complete tasks through a conversational interface. Built with LangGraph and currently using Gradio for the web interface.',
        image: '/placeholder-work.svg',
        tags: [
            { name: 'LangGraph', icon: 'ph:graph' },
            { name: 'Gradio', icon: 'simple-icons:gradio' },
        ],
        link: 'https://example.com',
        source: 'https://github.com/CarolinaCapilla/sidekick-ai-assistant',
    },
    {
        id: 3,
        title: 'Deep Research AI Agent',
        description:
            'An intelligent research assistant powered by OpenAI agents that performs comprehensive web research, generates reports, and sends email summaries. Built with Gradio for an intuitive web interface.',
        image: '/placeholder-work.svg',
        tags: [
            { name: 'OpenAI', icon: 'simple-icons:openai' },
            { name: 'Gradio', icon: 'simple-icons:gradio' },
        ],
        link: 'https://example.com',
        source: 'https://github.com/CarolinaCapilla/deep-research',
    },
    {
        id: 4,
        title: 'Financial Researcher Crew AI Agent',
        description:
            'An intelligent financial research assistant powered by collaborating AI agents. It performs company research, generates structured market reports, and outputs results as Markdown. Built on crewAI for a clean multi‑agent architecture.',
        image: '/placeholder-work.svg',
        tags: [{ name: 'crewAI', icon: 'mdi:robot-outline' }],
        source: 'https://github.com/CarolinaCapilla/financial_researcher',
    },
    {
        id: 5,
        title: 'Trader Floor AI Simulator',
        description: 'An agentic trading floor simulator where multiple AI traders research, decide, and trade on a schedule. Includes a real-time Gradio dashboard, local account database, and pluggable MCP servers for market data, accounts, and push notifications.',
        image: '/trader-ai.png',
        tags: [
            { name: 'OpenAI', icon: 'simple-icons:openai' },
            { name: 'Gradio', icon: 'simple-icons:gradio' },
            { name: 'MCP', icon: 'gravity-ui:logo-mcp'}
        ],
        link: 'https://example.com',
        source: 'https://github.com/CarolinaCapilla/trader-floor-ai-simulator',
    }
]


