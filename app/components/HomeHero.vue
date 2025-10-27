<template>
	<section class="max-w-5xl mx-auto px-6 py-16 lg:py-24">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
			<div>
				<p class="text-sm font-semibold text-primary-600 dark:text-primary-400">Hi, I’m</p>
				<h1 class="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight" :class="textClass">
					Carolina Capilla
				</h1>
				<p class="mt-4 text-lg max-w-xl" :class="textMutedClass">
					Full Stack Developer focused on Laravel backends and Nuxt/Vue frontends. I build
					production-ready web apps, APIs and polished user experiences.
				</p>

				<div class="mt-6 flex flex-wrap gap-3">
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
			</div>

			<div class="order-first lg:order-last flex justify-center lg:justify-end">
				<div :class="cardClass" class="w-64 p-6 rounded-lg">
					<img
						src="/avatar.jpeg"
						alt="Carolina avatar"
						class="w-32 h-32 rounded-full mx-auto object-cover"
					>
					<p class="mt-4 text-center font-semibold" :class="textClass">Carolina Capilla</p>
					<p class="text-center text-sm mt-1 text-neutral-600 dark:text-neutral-400">
						Full Stack Developer
					</p>
				</div>
			</div>
		</div>
	</section>
	<ContactModal :open="showContact" @update:open="(v: boolean) => (showContact = v)" />
</template>

<script setup lang="ts">
import { useThemeClasses } from '@/data/theme'
import { ref, computed } from 'vue'
import ContactModal from '@/components/ContactModal.vue'

const { textClass, textMutedClass, cardClass } = useThemeClasses()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const showContact = ref(false)
</script>
