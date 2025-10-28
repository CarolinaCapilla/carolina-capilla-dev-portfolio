<template>
	<div
		class="group relative overflow-hidden rounded-lg cursor-pointer transition-transform active:scale-95"
		:class="cardClass"
		@click="handleCardClick"
	>
		<img
			:src="project.image"
			:alt="project.title"
			class="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
		>
		<div
			class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
			:class="{ 'opacity-100': showOverlay }"
		>
			<template v-if="project.isPortfolio">
				<div class="flex flex-col items-center gap-2 text-white">
					<span class="text-lg font-semibold">You're already here ✨</span>
					<template v-if="project.source">
						<a
							:href="project.source"
							target="_blank"
							rel="noopener"
							class="mt-2 flex items-center gap-2 text-sm font-semibold"
							@click.stop
						>
							<Icon name="simple-icons:github" size="18" />
							<span>View Source Code</span>
						</a>
					</template>
				</div>
			</template>
			<template v-else>
				<div class="flex flex-col items-center gap-2 text-white">
					<div v-if="project.link" class="flex flex-col items-center gap-2 text-white">
						<a
							:href="project.link"
							target="_blank"
							rel="noopener"
							class="flex items-center gap-2 text-sm font-semibold"
							@click.stop
						>
							<Icon name="pajamas:live-preview" size="18" />
							<span>Live Demo</span>
						</a>
					</div>
					<div v-if="project.source">
						<a
							:href="project.source"
							target="_blank"
							rel="noopener"
							class="mt-2 flex items-center gap-2 text-sm font-semibold"
							@click.stop
						>
							<Icon name="simple-icons:github" size="18" />
							<span>View Source Code</span>
						</a>
					</div>
				</div>
			</template>
		</div>
		<div class="p-4">
			<h3 class="text-xl font-semibold" :class="textClass">
				{{ project.title }}
			</h3>
			<p class="text-neutral-700 dark:text-neutral-300 text-sm">
				{{ project.description }}
			</p>
			<div v-if="project.tags?.length" class="mt-3 flex flex-wrap gap-2">
				<span v-for="(tag, i) in project.tags" :key="i" :class="[chipClass, 'px-3 text-sm']">
					<Icon
						v-if="tag.icon"
						:name="tag.icon"
						class="mr-1 inline-block align-[-0.125em] transition-opacity duration-200 group-hover:opacity-0"
						size="16"
					/>
					{{ tag.name }}
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useThemeClasses } from '@/data/theme'
import type { Project } from '@/types/project'

const { textClass, chipClass, cardClass } = useThemeClasses()

defineProps<{
	project: Project
}>()

const showOverlay = ref(false)

function handleCardClick() {
	// Toggle overlay on mobile tap
	showOverlay.value = !showOverlay.value
}
</script>
