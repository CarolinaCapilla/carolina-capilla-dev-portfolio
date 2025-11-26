export type ProjectTag = { name: string; icon?: string }

export type Project = {
	id: number
	title: string
	description: string
	image: string
	tags?: ProjectTag[]
	link?: string
	source?: string
	isPortfolio?: boolean
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Portfolio Website',
		description:
			'A modern personal portfolio built with Nuxt, Typescript, and Tailwind CSS, featuring light and dark themes.',
		image: '/portfolio.png',
		tags: [
			{ name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' },
			{ name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
			{ name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
			{ name: 'TypeScript', icon: 'simple-icons:typescript' }
		],
		isPortfolio: true,
		source: 'https://github.com/CarolinaCapilla/carolina-capilla-dev-portfolio'
	},
	{
		id: 2,
		title: 'Valorant Skill Collector',
		description:
			'A Nuxt-based web platform utilizing the Riot API to fetch weapon skin data, allowing users to browse, discover, create collections, and maintain a wishlist.',
		image: '/valorant_skin_collector_main.png',
		tags: [
			{ name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' },
			{ name: 'Laravel', icon: 'simple-icons:laravel' },
			{ name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
			{ name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
			{ name: 'Pinia', icon: 'simple-icons:pinia' },
			{ name: 'Riot API', icon: 'mdi:api' },
			{ name: 'TypeScript', icon: 'simple-icons:typescript' },
			{ name: 'MySQL', icon: 'simple-icons:mysql' },
			{ name: 'Docker', icon: 'simple-icons:docker' }
		],
		link: 'https://valorant-skin-collector.vercel.app',
		source: 'https://github.com/CarolinaCapilla/valorant-skin-collector'
	},
	{
		id: 3,
		title: 'Trader Floor AI Simulator',
		description:
			'A sandbox trading floor where multiple AI traders research, decide, and trade on a schedule. Real‑time Gradio dashboard, local account database, and pluggable MCP servers for market data, accounts, and notifications — powered by OpenAI.',
		image: '/trader-ai.png',
		tags: [
			{ name: 'OpenAI', icon: 'simple-icons:openai' },
			{ name: 'Gradio', icon: 'simple-icons:gradio' },
			{ name: 'MCP', icon: 'gravity-ui:logo-mcp' }
		],
		link: 'https://trader-floor-ai-simulator-production.up.railway.app/',
		source: 'https://github.com/CarolinaCapilla/trader-floor-ai-simulator'
	},
	// {
	//   id: 4,
	//   title: "Sidekick AI Personal Co-Worker",
	//   description:
	//     "A friendly helper that tackles everyday tasks for you. It strings steps together with LangGraph and shows progress in a simple, clean Gradio app.",
	//   image: "/placeholder-work.svg",
	//   tags: [
	//     { name: "LangGraph", icon: "ph:graph" },
	//     { name: "Gradio", icon: "simple-icons:gradio" },
	//   ],
	//   source: "https://github.com/CarolinaCapilla/sidekick-ai-assistant",
	// },
	{
		id: 4,
		title: 'Deep Research AI Agent',
		description:
			'An AI agent that conducts in-depth research on a given topic, leveraging OpenAI to read sources and generate concise summaries or email notes, accessible through a lightweight Gradio UI.',
		image: '/placeholder-work.svg',
		tags: [
			{ name: 'OpenAI', icon: 'simple-icons:openai' },
			{ name: 'Gradio', icon: 'simple-icons:gradio' },
			{ name: 'Docker', icon: 'simple-icons:docker' }
		],
		source: 'https://github.com/CarolinaCapilla/deep-research'
	}
	// {
	//   id: 5,
	//   title: "Financial Researcher Crew AI Agent",
	//   description:
	//     "A small team of agents (powered by crewAI) that reviews companies and markets together, then hands you tidy Markdown briefs you can share.",
	//   image: "/placeholder-work.svg",
	//   tags: [{ name: "crewAI", icon: "mdi:robot-outline" }],
	//   source: "https://github.com/CarolinaCapilla/financial_researcher",
	// },
]
