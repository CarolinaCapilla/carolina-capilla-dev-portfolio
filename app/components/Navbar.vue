<template>
	<header class="pointer-events-none fixed inset-x-0 top-4 z-50">
		<div class="relative w-full h-12">
			<div
				class="pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 pl-5"
			>
				<span class="hidden text-sm font-semibold sm:inline" :class="textClass">{{
					person.location
				}}</span>
			</div>
			<div
				class="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 items-center gap-1 rounded-full border px-2"
				:class="pillClasses"
			>
				<template v-if="routesVisible['/']">
					<NuxtLink
						to="/"
						class="inline-flex h-9 w-9 items-center justify-center rounded-full"
						:class="[linkBase, navItems[0] && isActive(navItems[0]) ? activeClasses : '']"
					>
						<Icon name="ph:house" size="18" />
					</NuxtLink>
					<div class="mx-0 h-6 w-px" :class="dividerClass" />
				</template>

				<nav class="flex items-center gap-2">
					<template v-for="item in navItems" :key="item.to">
						<template v-if="item.to !== '/'">
							<NuxtLink
								:to="item.to"
								class="flex items-center gap-2 rounded-full px-4 py-2 text-xs"
								:class="[linkBase, isActive(item) ? activeClasses : '']"
							>
								<Icon v-if="item.icon" :name="item.icon" size="14" class="-mt-0.5" />
								<span v-if="item.label">{{ item.label }}</span>
							</NuxtLink>
						</template>
					</template>
				</nav>

				<div class="mx-0 h-6 w-px" :class="dividerClass" />
				<button
					type="button"
					class="inline-flex h-9 w-9 items-center justify-center rounded-full leading-[0]"
					:class="linkBase"
					aria-label="Toggle theme"
					@click="toggleTheme"
				>
					<Icon :name="isDark ? 'ph:sun-dim' : 'ph:moon'" size="16" class="block" />
				</button>
			</div>

			<div
				class="pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 pr-5"
			>
				<span class="hidden text-sm font-semibold sm:inline" :class="textClass">{{
					currentTime
				}}</span>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { person } from '@/data/about'
import { useColorMode } from '#imports'

const route = useRoute()
const currentPath = computed(() => route.path || '/')

// Live time display (24h) for a given IANA time zone
const timeZone = 'Europe/Madrid'
const currentTime = ref('')
let timer: number | null = null
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
const toggleTheme = () => {
	colorMode.preference = isDark.value ? 'light' : 'dark'
}

// Class helpers to avoid relying on Tailwind dark: variant behavior
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
// Shared text class for simple text elements
const textClass = computed(() => (isDark.value ? 'text-neutral-300' : 'text-neutral-900'))

const updateTime = () => {
	const now = new Date()
	const fmt = new Intl.DateTimeFormat('en-GB', {
		timeZone,
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: false
	})
	currentTime.value = fmt.format(now)
}

onMounted(() => {
	updateTime()
	timer = window.setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
	if (timer !== null) window.clearInterval(timer)
})

// Toggle which routes are visible
const routesVisible: Record<string, boolean> = {
	'/': true,
	'/about': true,
	'/work': true,
	'/blog': false,
	'/gallery': false
}

interface NavItem {
	to: string
	label?: string
	icon?: string
	active: (p: string) => boolean
}

const navItems = computed(() =>
	[
		{ to: '/', icon: 'ph:house', active: (p: string) => p === '/' },
		{
			to: '/about',
			label: 'About',
			icon: 'ph:user',
			active: (p: string) => p === '/about'
		},
		{
			to: '/work',
			label: 'Work',
			icon: 'ph:squares-four',
			active: (p: string) => p.startsWith('/work')
		},
		{
			to: '/blog',
			label: 'Blog',
			icon: 'ph:book-open-text',
			active: (p: string) => p.startsWith('/blog')
		},
		{
			to: '/gallery',
			label: 'Gallery',
			icon: 'ph:image-square',
			active: (p: string) => p.startsWith('/gallery')
		}
	].filter((i) => routesVisible[i.to])
)

const isActive = (item: NavItem) => (item.active ? item.active(currentPath.value) : false)
</script>
