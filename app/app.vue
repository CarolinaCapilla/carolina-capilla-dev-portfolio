<template>
	<div class="min-h-screen app-root text-neutral-900 dark:text-neutral-100 flex flex-col">
		<ColorScheme />
		<Navbar />
		<main class="flex-1">
			<NuxtPage />
		</main>
		<Footer />
	</div>
</template>

<script setup lang="ts"></script>
