<template>
	<section class="max-w-5xl mx-auto px-6 py-18">
		<!-- <h2 class="text-3xl font-bold text-neutral-900 dark:text-white mb-6">My Work</h2> -->
		<ProjectFilters
			:tags="tags"
			:selected="selectedTag"
			@update:selected="(t) => (selectedTag = t)"
		/>

		<div class="mt-8">
			<WorkGrid :projects="filteredProjects" />
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects } from '@/data/work'
import WorkGrid from '@/components/WorkGrid.vue'
import ProjectFilters from '@/components/ProjectFilters.vue'

useSeoMeta({
	title: 'Work - Carolina Capilla',
	ogTitle: 'Work - Carolina Capilla',
	description:
		'Welcome to my portfolio website! I am Carolina Capilla, a passionate Full Stack Developer specializing in building modern web applications.',
	ogDescription:
		'Welcome to my portfolio website! I am Carolina Capilla, a passionate Full Stack Developer specializing in building modern web applications.',
	ogImage: '/portfolio.png',
	twitterCard: 'summary_large_image'
})

const selectedTag = ref<string | null>(null)

const tags = Array.from(new Set(projects.flatMap((p) => p.tags?.map((t) => t.name) || [])))

const filteredProjects = computed(() => {
	if (!selectedTag.value) return projects
	return projects.filter((p) => p.tags?.some((t) => t.name === selectedTag.value))
})
</script>
