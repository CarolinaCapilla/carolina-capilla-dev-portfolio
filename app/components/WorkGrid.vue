<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
		<WorkCard v-for="project in projects" :key="project.id" :project="project" />
	</div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/project'

defineProps<{
	projects: Project[]
}>()
</script>
