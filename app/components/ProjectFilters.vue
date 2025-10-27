<template>
	<div class="flex flex-wrap items-center gap-2">
		<button
			type="button"
			:class="buttonClass(null)"
			:aria-pressed="selected === null"
			@click="select(null)"
		>
			All
		</button>
		<button
			v-for="(tag, idx) in tags"
			:key="idx"
			type="button"
			:class="buttonClass(tag)"
			:aria-pressed="selected === tag"
			@click="select(tag)"
		>
			{{ tag }}
		</button>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useThemeClasses } from '@/data/theme'
const { chipClass, activeFilterClasses } = useThemeClasses()

const props = defineProps<{ tags: string[]; selected: string | null }>()
const emit = defineEmits(['update:selected'])

const tags = computed(() => props.tags || [])
const selected = computed(() => props.selected ?? null)

function select(tag: string | null) {
	emit('update:selected', tag)
}

function buttonClass(tag: string | null) {
	const base = chipClass.value
	const active = tag === selected.value ? ` ${activeFilterClasses.value} font-semibold` : ''
	return `${base} cursor-pointer px-3 py-1 text-sm${active}`
}
</script>
