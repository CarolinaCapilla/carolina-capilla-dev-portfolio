export type Achievement = string

export type ExperienceImage = {
	src: string
	alt: string
	width: number
	height: number
}

export type Experience = {
	company: string
	timeframe: string
	role: string
	achievements: Achievement[]
	images?: ExperienceImage[]
	tags?: SkillTag[]
}

export type Institution = {
	name: string
	description: string
}

export type SkillTag = {
	name: string
	icon?: string
}

export type SkillImage = ExperienceImage

export type Skill = {
	title: string
	description?: string
	tags?: SkillTag[]
	images?: SkillImage[]
}

export type Person = {
	firstName: string
	lastName: string
	name: string
	role: string
	avatar: string
	email: string
	location: string
	locationIcon?: string
	languages?: string[]
}

export type SocialLink = {
	name: string
	icon?: string
	link: string
}

export const person: Person = {
	firstName: 'Carolina',
	lastName: 'Capilla',
	name: 'Carolina Capilla',
	role: 'Full Stack Developer & Agentic AI Developer',
	avatar: '/avatar.jpeg',
	email: 'carolina.capilla@gmail.com',
	location: 'Europe/Madrid',
	locationIcon: 'pepicons-pop:earth-europe',
	languages: ['English / Bilingual', 'Spanish / Native']
}

export const social: SocialLink[] = [
	{
		name: 'GitHub',
		icon: 'uil:github',
		link: 'https://github.com/CarolinaCapilla'
	},
	{
		name: 'LinkedIn',
		icon: 'simple-icons:linkedin',
		link: 'https://www.linkedin.com/in/carolina-capilla'
	},
	{
		name: 'Email',
		icon: 'mdi:email',
		link: 'mailto:carolina.capilla@gmail.com'
	}
]

export const aboutContent = {
	title: `About – ${person.name}`,
	description: `Meet ${person.name}, ${person.role} from ${person.location}`,
	intro: {
		display: true,
		title: 'Introduction',
		description: [
			'Highly skilled Full-Stack Developer with 4+ years of experience in designing, developing, and deploying scalable web applications. Expertise in Laravel, Vue.js (including Nuxt and Pinia), RESTful API development, and MySQL database optimization. Proven ability to collaborate effectively within agile development environments to deliver client-focused solutions.',
			'Passionate about leveraging AI and large language models (LLMs) to build innovative applications.',
			'Open to full-time roles—remote, hybrid, or on-site in Madrid.'
		]
	},
	work: {
		display: true,
		title: 'Work Experience',
		experiences: [
			{
				company: 'Lenox Park Solutions, Inc.',
				timeframe: '2021 - 2025',
				role: 'Intermediate Full Stack Developer',
				achievements: [
					'Developed and maintained multiple production-level web applications utilizing Laravel 10 and Vue 3 Composition API, ensuring scalable solutions for diverse client needs.',
					'Led the migration of a legacy Vue 2 application to Vue 3, resulting in a 40% improvement in application performance.',
					'Designed, built, and optimized RESTful APIs for data-driven features and reporting dashboards, incorporating caching strategies and query optimization techniques to enhance performance.',
					'Collaborated with cross-functional teams including product managers, designers, and quality assurance engineers to deliver client-focused solutions from initial requirements gathering through successful deployment.',
					'Designed and maintained MySQL databases, ensuring data integrity, security, and optimal query performance for business-critical applications.',
					'Enhanced web application performance by implementing lazy loading, code splitting, and tree-shaking in Vue, substantially reducing initial bundle size and improving time-to-interactive for end users.',
					'Actively participated in agile development processes, utilizing Jira and Asana for task management and Slack for team communication, consistently meeting project milestones.'
				],
				images: [],
				tags: [
					{ name: 'PHP', icon: 'simple-icons:php' },
					{ name: 'Laravel', icon: 'simple-icons:laravel' },
					{ name: 'Javascript', icon: 'simple-icons:javascript' },
					{ name: 'Vue', icon: 'simple-icons:vuedotjs' },
					{ name: 'Vuetify', icon: 'simple-icons:vuetify' },
					{ name: 'Pinia', icon: 'simple-icons:pinia' },
					{ name: 'MySQL', icon: 'simple-icons:mysql' }
				]
			},
			{
				company: 'Le Wagon',
				timeframe: '2020 - 2022',
				role: 'Teaching Assistant',
				achievements: [
					'Assisted instructors in delivering full-stack web development curriculum (Ruby on Rails, JavaScript), providing support, conducting code reviews, and facilitating group exercises to foster a collaborative learning environment.',
					'Provided constructive feedback to students, improving their understanding of software development best practices.'
				],
				images: [],
				tags: [
					{ name: 'Ruby', icon: 'simple-icons:ruby' },
					{ name: 'Ruby on Rails', icon: 'simple-icons:rubyonrails' },
					{ name: 'Javascript', icon: 'simple-icons:javascript' },
					{ name: 'CSS', icon: 'simple-icons:css3' },
					{ name: 'SCSS', icon: 'simple-icons:sass' },
					{ name: 'HTML', icon: 'simple-icons:html5' }
				]
			}
		] as Experience[]
	},
	studies: {
		display: true,
		title: 'Studies',
		institutions: [
			{
				name: 'Le Wagon Coding Bootcamp (London)',
				description: 'Full Stack Web Development – Computer Software'
			},
			{
				name: 'Agentic AI Engineering Course (Udemy)',
				description:
					'Agentic AI with Python & LLMs (OpenAI, Anthropic, Google, Grok). Built agents via OpenAI Agents SDK, CrewAI, LangGraph, AutoGen, MCP.'
			}
		] as Institution[]
	},
	technical: {
		display: true,
		title: 'Technical skills',
		skills: [
			{
				title: 'Laravel/PHP',
				description:
					'4+ years building production apps/APIs with Laravel (PHP): RESTful services, authentication, queues, mail, testing, and DB design.',
				tags: [
					{ name: 'Laravel', icon: 'simple-icons:laravel' },
					{ name: 'PHP', icon: 'simple-icons:php' }
				]
			},
			{
				title: 'Vue.js/Vuetify/Tailwind CSS/Nuxt',
				description: 'Building modern apps with Vue.js + Vuetify + Tailwind CSS + Nuxt.',
				tags: [
					{ name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
					{ name: 'Vuetify', icon: 'simple-icons:vuetify' },
					{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
					{ name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' }
				]
			},
			{
				title: 'Python & Agentic AI',
				description:
					'Agentic AI in Python: multi-agent systems, tool use, planning, orchestration with OpenAI Agents SDK, CrewAI, LangGraph. Building personal agents and prototypes.',
				tags: [
					{ name: 'Python', icon: 'simple-icons:python' },
					{ name: 'OpenAI', icon: 'simple-icons:openai' },
					{ name: 'CrewAI', icon: 'mdi:robot-outline' },
					{ name: 'LangGraph', icon: 'ph:graph' }
				]
			},
			{
				title: 'Docker',
				description:
					'Beginner-level Docker: containerize apps with simple Dockerfiles and run them using Docker; basic compose, volumes, and networking.',
				tags: [{ name: 'Docker', icon: 'simple-icons:docker' }]
			}
		] as Skill[]
	}
}
