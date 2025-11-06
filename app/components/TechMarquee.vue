<template>
	<div class="relative overflow-hidden py-8 mt-18">
		<h2 class="text-center text-lg font-semibold mb-6" :class="textClass">My Tech Stack</h2>
		<div class="marquee-container">
			<div class="marquee-content">
				<div v-for="i in 2" :key="i" class="marquee-group">
					<div
						v-for="tech in techStack"
						:key="`${i}-${tech.name}`"
						class="tech-item inline-flex items-center gap-3 px-6 py-3 rounded-full border mx-2"
						:class="chipClass"
					>
						<Icon :name="tech.icon" size="24" />
						<span class="text-sm font-medium">{{ tech.name }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useThemeClasses } from '@/data/theme'

const { chipClass, textClass } = useThemeClasses()

const techStack = [
	{ name: 'Laravel', icon: 'simple-icons:laravel' },
	{ name: 'PHP', icon: 'simple-icons:php' },
	{ name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
	{ name: 'Pinia', icon: 'simple-icons:pinia' },
	{ name: 'JavaScript', icon: 'simple-icons:javascript' },
	{ name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' },
	{ name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
	{ name: 'Python', icon: 'simple-icons:python' },
	{ name: 'TypeScript', icon: 'simple-icons:typescript' },
	{ name: 'Docker', icon: 'simple-icons:docker' },
	{ name: 'MySQL', icon: 'simple-icons:mysql' },
	{ name: 'Git', icon: 'simple-icons:git' },
	{ name: 'GitHub', icon: 'simple-icons:github' }
]
</script>

<style scoped>
.marquee-container {
	display: flex;
	width: 100%;
}

.marquee-content {
	display: flex;
	animation: scroll 40s linear infinite;
	white-space: nowrap;
}

.marquee-group {
	display: inline-flex;
	align-items: center;
}

@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}

/* Pause animation on hover */
.marquee-content:hover {
	animation-play-state: paused;
}
</style>
