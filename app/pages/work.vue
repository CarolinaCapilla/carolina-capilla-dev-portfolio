<template>
    <section class="max-w-5xl mx-auto px-6 py-12">
        <WorkGrid :projects="projects" />
    </section>
</template>

<script setup>
import { projects } from '@/data/work'
import WorkGrid from '@/components/WorkGrid.vue'
</script>