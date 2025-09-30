<template>
    <section class="max-w-5xl mx-auto px-6 py-12">
        <h2 class="text-3xl font-bold mb-8" :class="textClass">My Work</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <WorkCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
    </section>
</template>

<script setup>
import { useThemeClasses } from '@/data/theme'
const { textClass } = useThemeClasses()

const props = defineProps({
    projects: Array
})
</script>