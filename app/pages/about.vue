<template>
	<main class="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-24">
		<div class="grid grid-cols-12 gap-8">
			<aside class="col-span-12 md:col-span-4 lg:col-span-3">
				<div class="hidden md:block fixed left-5 top-1/2 -translate-y-1/2">
					<nav>
						<ul class="space-y-8 text-base font-semibold">
							<li>
								<a
									href="#"
									class="flex items-center gap-2 rounded-full px-3 py-1 transition-colors hover:text-neutral-500 dark:hover:text-neutral-400"
									:class="textClass"
									@click.prevent="scrollToTop"
								>
									<Icon name="ic:sharp-horizontal-rule" size="14" class="text-neutral-500" />
									<span>Introduction</span>
								</a>
							</li>
							<li v-if="aboutContent.work.display">
								<a
									href="#work"
									class="flex items-center gap-2 rounded-full px-3 py-1 transition-colors hover:text-neutral-500 dark:hover:text-neutral-400"
									:class="textClass"
								>
									<Icon name="ic:sharp-horizontal-rule" size="14" class="text-neutral-500" />
									<span>Work Experience</span>
								</a>
							</li>
							<li v-if="aboutContent.studies.display">
								<a
									href="#studies"
									class="flex items-center gap-2 rounded-full px-3 py-1 transition-colors hover:text-neutral-500 dark:hover:text-neutral-400"
									:class="textClass"
								>
									<Icon name="ic:sharp-horizontal-rule" size="14" class="text-neutral-500" />
									<span>Studies</span>
								</a>
							</li>
							<li v-if="aboutContent.technical.display">
								<a
									href="#technical"
									class="flex items-center gap-2 rounded-full px-3 py-1 transition-colors hover:text-neutral-500 dark:hover:text-neutral-400"
									:class="textClass"
								>
									<Icon name="ic:sharp-horizontal-rule" size="14" class="text-neutral-500" />
									<span>Technical skills</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</aside>

			<section class="col-span-12 md:col-span-8 lg:col-span-9">
				<header class="mb-10">
					<div class="flex flex-col md:flex-row items-start gap-6 md:gap-10">
						<div
							class="flex w-full md:w-42 shrink-0 flex-col items-center md:items-start gap-3 md:-ml-8"
						>
							<img
								:src="person.avatar"
								alt="Avatar"
								class="h-32 w-32 md:h-42 md:w-42 rounded-full object-cover"
							>
							<div
								class="flex w-full items-center justify-center gap-2 text-sm md:text-m text-cyan-500 text-center"
							>
								<Icon
									v-if="person.locationIcon"
									:name="person.locationIcon"
									size="16"
									class="inline-block align-[-0.125em]"
								/>
								<span>{{ person.location }}</span>
							</div>
							<div class="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
								<span
									v-for="(lang, li) in person.languages"
									:key="li"
									:class="[chipClass, 'px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm']"
								>
									{{ lang }}
								</span>
							</div>
						</div>

						<div class="min-w-0 w-full text-center md:text-left">
							<h1
								class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
								:class="textClass"
							>
								{{ person.name }}
							</h1>
							<p class="mt-2 text-lg md:text-xl text-neutral-300">{{ person.role }}</p>

							<div class="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
								<a
									v-for="s in social"
									:key="s.name"
									:href="s.link"
									:class="socialClass"
									target="_blank"
									rel="noopener"
								>
									<Icon
										v-if="s.icon"
										:name="s.icon"
										class="mr-1 inline-block align-[-0.125em]"
										size="16"
									/>
									{{ s.name }}
								</a>
							</div>

							<div class="mt-4">
								<a
									href="/Carolina-Capilla-Resume.pdf"
									download
									class="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold transition-colors"
									:class="
										isDark
											? 'bg-white text-black hover:bg-neutral-100'
											: 'bg-black text-white hover:bg-neutral-800'
									"
								>
									<Icon name="mdi:download" size="18" />
									Download CV
								</a>
							</div>

							<div v-if="aboutContent.intro.display" :class="['mt-8 space-y-3', textClass]">
								<p v-for="(p, i) in aboutContent.intro.description" :key="i">
									{{ p }}
								</p>
							</div>
						</div>
					</div>
				</header>

				<section v-if="aboutContent.work.display" id="work" class="mt-14">
					<h2 class="mb-6 text-3xl font-semibold" :class="textClass">
						{{ aboutContent.work.title }}
					</h2>
					<div class="space-y-8">
						<div
							v-for="(exp, idx) in aboutContent.work.experiences"
							:key="idx"
							:class="[cardClass, 'p-4']"
						>
							<div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-0">
								<div class="text-base sm:text-lg font-medium" :class="textClass">
									{{ exp.company }}
								</div>
								<div class="text-neutral-400 text-xs sm:text-sm">{{ exp.timeframe }}</div>
							</div>
							<div class="mt-1 text-cyan-500 text-xs sm:text-sm">{{ exp.role }}</div>

							<ul class="mt-3 list-disc space-y-1 pl-5 text-sm sm:text-base" :class="textClass">
								<li v-for="(a, ai) in exp.achievements" :key="ai">{{ a }}</li>
							</ul>

							<div v-if="exp.tags?.length" class="mt-3 flex flex-wrap gap-2">
								<span
									v-for="(tag, ti) in exp.tags"
									:key="ti"
									:class="[chipClass, 'px-3 text-sm']"
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
						</div>
					</div>
				</section>

				<section v-if="aboutContent.studies.display" id="studies" class="mt-14">
					<h2 class="mb-6 text-3xl font-semibold" :class="textClass">
						{{ aboutContent.studies.title }}
					</h2>
					<div class="space-y-4">
						<div
							v-for="(ins, si) in aboutContent.studies.institutions"
							:key="si"
							:class="[cardClass, 'p-4']"
						>
							<div class="font-medium" :class="textClass">{{ ins.name }}</div>
							<div class="text-neutral-700 dark:text-neutral-300">
								{{ ins.description }}
							</div>
						</div>
					</div>
				</section>

				<section v-if="aboutContent.technical.display" id="technical" class="mt-14">
					<h2 class="mb-6 text-3xl font-semibold" :class="textClass">
						{{ aboutContent.technical.title }}
					</h2>
					<div class="space-y-8">
						<div
							v-for="(skill, ki) in aboutContent.technical.skills"
							:key="ki"
							:class="[cardClass, 'p-4']"
						>
							<div class="font-medium text-lg" :class="textClass">
								{{ skill.title }}
							</div>
							<p v-if="skill.description" class="mt-1 text-neutral-700 dark:text-neutral-300">
								{{ skill.description }}
							</p>

							<div v-if="skill.tags?.length" class="mt-3 flex flex-wrap gap-2">
								<span
									v-for="(tag, ti) in skill.tags"
									:key="ti"
									:class="[chipClass, 'px-3 text-sm']"
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
						</div>
					</div>
				</section>
			</section>
		</div>
	</main>
</template>

<script setup lang="ts">
import { person, social, aboutContent } from '@/data/about'
import { useThemeClasses } from '@/data/theme'

useSeoMeta({
	title: 'About - Carolina Capilla',
	ogTitle: 'About - Carolina Capilla',
	description:
		'Welcome to my portfolio website! I am Carolina Capilla, a passionate Full Stack Developer specializing in building modern web applications.',
	ogDescription:
		'Welcome to my portfolio website! I am Carolina Capilla, a passionate Full Stack Developer specializing in building modern web applications.',
	ogImage: '/portfolio.png',
	twitterCard: 'summary_large_image'
})
const { textClass, chipClass, cardClass, socialClass } = useThemeClasses()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const scrollToTop = () => {
	if (typeof window !== 'undefined') {
		const { pathname, search } = window.location
		// Update URL to include #introduction without reloading
		window.history.replaceState(null, '', `${pathname}${search}#introduction`)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
}
</script>
