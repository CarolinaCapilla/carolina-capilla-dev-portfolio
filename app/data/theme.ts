import { computed } from 'vue'
import { useColorMode } from '#imports'

export function useThemeClasses() {
	const colorMode = useColorMode()
	const isDark = computed(() => colorMode.value === 'dark')

	const textClass = computed(() => (isDark.value ? 'text-white' : 'text-neutral-900'))
	const textMutedClass = computed(() => (isDark.value ? 'text-neutral-300' : 'text-neutral-700'))

	const chipClass = computed(() =>
		isDark.value
			? 'whitespace-nowrap rounded-full border border-neutral-700 bg-neutral-800/60 py-1 text-xs text-neutral-100'
			: 'whitespace-nowrap rounded-full border border-neutral-300 bg-white py-1 text-xs text-neutral-700'
	)

	const cardClass = computed(() =>
		isDark.value
			? 'border border-neutral-800 bg-neutral-900/60'
			: 'border border-neutral-200 bg-white shadow-sm'
	)

	const socialClass = computed(() =>
		isDark.value
			? 'rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-200 hover:bg-neutral-800'
			: 'rounded-full border border-neutral-300 bg-white px-3 py-1 text-sm text-neutral-900 hover:bg-neutral-100'
	)

	// Navbar-specific helpers
	const pillClasses = computed(() =>
		isDark.value
			? 'border-neutral-800 bg-neutral-950/80 shadow-[0_2px_20px_rgba(0,0,0,0.5)]'
			: 'border-neutral-200 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
	)
	const dividerClass = computed(() => (isDark.value ? 'bg-neutral-700/60' : 'bg-neutral-300'))
	const linkBase = computed(() =>
		isDark.value
			? 'text-neutral-200 hover:bg-neutral-800/70'
			: 'text-neutral-900 hover:bg-neutral-100'
	)
	const activeClasses = computed(() =>
		isDark.value
			? 'bg-neutral-800/80 text-white ring-1 ring-neutral-700'
			: 'bg-neutral-200 text-neutral-900 ring-1 ring-neutral-300'
	)

	const activeFilterClasses = computed(() =>
		isDark.value
			? 'bg-blue-950/30 text-blue-400 ring-2 ring-blue-500/60'
			: 'bg-blue-50 text-blue-700 ring-2 ring-blue-500'
	)

	const toggleTheme = () => {
		colorMode.preference = isDark.value ? 'light' : 'dark'
	}

	return {
		colorMode,
		isDark,
		textClass,
		textMutedClass,
		chipClass,
		cardClass,
		socialClass,
		pillClasses,
		dividerClass,
		linkBase,
		activeClasses,
		activeFilterClasses,
		toggleTheme
	}
}
