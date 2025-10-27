<template>
	<article class="max-w-5xl mx-auto px-6 py-8">
		<p class="mb-4 text-lg text-neutral-600 dark:text-neutral-400">
			Featured: <strong>{{ project.title }}</strong> — {{ project.description }}
		</p>
		<div :class="cardClass" class="overflow-hidden rounded-lg">
			<div class="relative">
				<img
					:src="images[currentIndex]"
					:alt="project.title + ' screenshot ' + (currentIndex + 1)"
					class="w-full h-96 object-cover"
				>

				<button
					class="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-neutral-800/80 p-2 shadow"
					aria-label="Previous image"
					@click="prev"
				>
					<Icon name="ph:caret-left" size="18" />
				</button>
				<button
					class="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 dark:bg-neutral-800/80 p-2 shadow"
					aria-label="Next image"
					@click="next"
				>
					<Icon name="ph:caret-right" size="18" />
				</button>

				<div class="absolute left-1/2 bottom-3 -translate-x-1/2 flex gap-2">
					<button
						v-for="(img, i) in images"
						:key="i"
						:class="indicatorClass(i)"
						class="w-2 h-2 rounded-full"
						:aria-label="`Go to image ${i + 1}`"
						@click="() => (currentIndex = i)"
					/>
				</div>
			</div>

			<div class="p-6">
				<h3 class="text-2xl font-semibold" :class="textClass">
					{{ project.title }}
				</h3>
				<p class="mt-3 text-neutral-700 dark:text-neutral-300">
					{{ project.description }}
				</p>

				<div v-if="project.tags?.length" class="mt-4 flex flex-wrap gap-2">
					<span
						v-for="(tag, i) in project.tags"
						:key="i"
						class="px-3 py-1 rounded-full border text-sm"
						:class="chipClass"
					>
						<Icon
							v-if="tag.icon"
							:name="tag.icon"
							class="mr-1 inline-block align-[-0.125em]"
							size="16"
						/>
						{{ tag.name }}
					</span>
				</div>

				<div class="mt-6 flex gap-3">
					<a
						v-if="project.link && project.link !== '#'"
						:href="project.link"
						target="_blank"
						rel="noopener"
						class="px-4 py-2 rounded-md font-semibold"
						:class="isDark ? 'bg-white text-black' : 'bg-black text-white'"
						>Live Demo</a
					>
					<a
						v-if="project.source && project.source !== '#'"
						:href="project.source"
						target="_blank"
						rel="noopener"
						class="px-4 py-2 rounded-md border cursor-pointer"
						:class="
							isDark
								? 'border-neutral-700 bg-neutral-800/60 text-white hover:bg-neutral-800'
								: 'border-black bg-white text-black hover:bg-neutral-50'
						"
						>Source</a
					>
				</div>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
import { useThemeClasses } from '@/data/theme'
import { ref, computed } from 'vue'
import type { Project } from '@/types/project'

const { textClass, chipClass, cardClass } = useThemeClasses()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const props = defineProps<{ project: Project }>()
const currentIndex = ref(0)

const images = computed(() => {
	// Check if this is the Valorant project
	if (props.project?.title?.includes('Valorant')) {
		return [
			'/valorant_skin_collector_main.png',
			'/valorant_2.png',
			'/valorant_3.png',
			'/valorant_4.png',
			'/valorant_5.png'
		]
	}
	// For other projects, use the single image
	const img = props.project?.image || '/placeholder-work.svg'
	return [img]
})

function prev() {
	currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
}

function next() {
	currentIndex.value = (currentIndex.value + 1) % images.value.length
}

function indicatorClass(i: number) {
	return i === currentIndex.value
		? 'bg-neutral-900 dark:bg-white w-3 h-3'
		: 'bg-white/60 dark:bg-neutral-600 w-2 h-2'
}
</script>
