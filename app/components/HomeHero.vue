<template>
	<section class="max-w-5xl mx-auto px-6 py-16 lg:py-24">
		<div class="text-center">
			<Motion
				:initial="{
					scale: 1.1,
					opacity: 0,
					filter: 'blur(20px)'
				}"
				:animate="{
					scale: 1,
					opacity: 1,
					filter: 'blur(0px)'
				}"
				:transition="{
					duration: 0.6,
					delay: 0.1
				}"
			>
				<p class="text-sm font-semibold text-primary-600 dark:text-primary-400">Hi, I'm</p>
			</Motion>

			<Motion
				:initial="{
					scale: 1.1,
					opacity: 0,
					filter: 'blur(20px)'
				}"
				:animate="{
					scale: 1,
					opacity: 1,
					filter: 'blur(0px)'
				}"
				:transition="{
					duration: 0.6,
					delay: 0.2
				}"
			>
				<h1 class="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight" :class="textClass">
					Carolina Capilla
				</h1>
			</Motion>

			<Motion
				:initial="{
					scale: 1.1,
					opacity: 0,
					filter: 'blur(20px)'
				}"
				:animate="{
					scale: 1,
					opacity: 1,
					filter: 'blur(0px)'
				}"
				:transition="{
					duration: 0.6,
					delay: 0.3
				}"
			>
				<p class="mt-4 text-lg max-w-xl mx-auto" :class="textMutedClass">
					Full Stack Developer focused on Laravel backends and Nuxt/Vue frontends. I build
					production-ready web apps, APIs and polished user experiences.
				</p>
			</Motion>

			<Motion
				:initial="{
					scale: 1.1,
					opacity: 0,
					filter: 'blur(20px)'
				}"
				:animate="{
					scale: 1,
					opacity: 1,
					filter: 'blur(0px)'
				}"
				:transition="{
					duration: 0.6,
					delay: 0.4
				}"
			>
				<div class="mt-6 flex flex-wrap gap-3 justify-center">
					<NuxtLink
						to="/work"
						class="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold"
						:class="isDark ? 'bg-white text-black' : 'bg-black text-white'"
					>
						View Work
					</NuxtLink>
					<button
						class="inline-flex items-center gap-2 rounded-md px-4 py-2 border cursor-pointer"
						:class="
							isDark
								? 'border-neutral-700 bg-neutral-800/60 text-white hover:bg-neutral-800'
								: 'border-black bg-white text-black hover:bg-neutral-50'
						"
						@click="showContact = true"
					>
						Contact
					</button>
				</div>
			</Motion>
		</div>

		<Motion
			:initial="{
				scale: 1.1,
				opacity: 0,
				filter: 'blur(20px)'
			}"
			:animate="{
				scale: 1,
				opacity: 1,
				filter: 'blur(0px)'
			}"
			:transition="{
				duration: 0.6,
				delay: 0.5
			}"
		>
			<TechMarquee />
		</Motion>
	</section>
	<ContactModal :open="showContact" @update:open="(v: boolean) => (showContact = v)" />
</template>

<script setup lang="ts">
import { useThemeClasses } from '@/data/theme'
import { ref, computed } from 'vue'
import ContactModal from '@/components/ContactModal.vue'
import TechMarquee from '@/components/TechMarquee.vue'

const { textClass, textMutedClass } = useThemeClasses()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const showContact = ref(false)
</script>
