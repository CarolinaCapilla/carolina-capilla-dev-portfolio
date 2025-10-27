<template>
	<div>
		<HomeHero />

		<FeaturedProject :project="featuredProject" />
	</div>
</template>

<script setup lang="ts">
import HomeHero from '@/components/HomeHero.vue'
import FeaturedProject from '@/components/FeaturedProject.vue'
import { projects } from '@/data/work'
import type { Project } from '@/types/project'

useSeoMeta({
	title: 'Carolina Capilla - Full Stack Developer',
	ogTitle: 'Carolina Capilla - Full Stack Developer',
	description:
		'Welcome to my portfolio website! I am Carolina Capilla, a passionate Full Stack Developer specializing in building modern web applications.',
	ogDescription:
		'Welcome to my portfolio website! I am Carolina Capilla, a passionate Full Stack Developer specializing in building modern web applications.',
	ogImage: '/portfolio.png',
	twitterCard: 'summary_large_image'
})

const featuredProject: Project = (projects.find((p) => p.title.includes('Valorant')) || projects[0])!
</script>
