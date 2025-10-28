<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
		<Motion
			v-for="(project, index) in projects"
			:key="project.id"
			:initial="{
				scale: 0.9,
				opacity: 0
			}"
			:animate="{
				scale: 1,
				opacity: 1
			}"
			:transition="{
				duration: 0.5,
				delay: index * 0.1
			}"
		>
			<WorkCard :project="project" />
		</Motion>
	</div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/project'

defineProps<{
	projects: Project[]
}>()
</script>
