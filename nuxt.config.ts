import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()]
	},
	modules: ['@nuxt/icon', '@nuxtjs/color-mode', '@nuxt/eslint', '@vueuse/nuxt', 'motion-v/nuxt'],
	colorMode: {
		classSuffix: '',
		preference: 'dark',
		fallback: 'dark'
	}
})
