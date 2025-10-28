export interface ProjectTag {
	name: string
	icon?: string
}

export interface Project {
	id: number
	title: string
	description: string
	image: string
	tags?: ProjectTag[]
	link?: string
	source?: string
	isPortfolio?: boolean
}
