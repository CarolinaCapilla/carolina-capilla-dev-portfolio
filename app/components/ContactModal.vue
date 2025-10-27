<template>
	<TransitionRoot appear :show="open">
		<Dialog as="div" class="relative z-50" @close="close">
			<div class="fixed inset-0 bg-black/40" aria-hidden="true" />

			<div class="fixed inset-0 flex items-center justify-center p-4">
				<DialogPanel
					class="mx-auto w-full max-w-xl rounded-lg p-6 shadow-lg"
					:class="
						isDark
							? 'bg-neutral-900 border border-neutral-800'
							: 'bg-white border border-neutral-200'
					"
				>
					<DialogTitle class="text-lg font-semibold" :class="textClass">Contact</DialogTitle>
					<DialogDescription class="mt-2 text-sm text-neutral-600 dark:text-neutral-400"
						>Send a quick message — opens your email client on submit.</DialogDescription
					>

					<form class="mt-4 space-y-4" @submit.prevent="onSubmit">
						<div>
							<label class="block text-sm font-medium" :class="textClass">Your name</label>
							<input
								v-model="name"
								class="mt-1 block w-full rounded px-3 py-2 border"
								:class="
									isDark
										? 'bg-neutral-800 border-neutral-700 text-white'
										: 'bg-white border-neutral-300 text-black'
								"
							>
						</div>

						<div>
							<label class="block text-sm font-medium" :class="textClass">Your email</label>
							<input
								v-model="fromEmail"
								type="email"
								class="mt-1 block w-full rounded px-3 py-2 border"
								:class="
									isDark
										? 'bg-neutral-800 border-neutral-700 text-white'
										: 'bg-white border-neutral-300 text-black'
								"
							>
						</div>

						<div>
							<label class="block text-sm font-medium" :class="textClass">Message</label>
							<textarea
								v-model="message"
								rows="4"
								class="mt-1 block w-full rounded px-3 py-2 border"
								:class="
									isDark
										? 'bg-neutral-800 border-neutral-700 text-white'
										: 'bg-white border-neutral-300 text-black'
								"
							/>
						</div>

						<div class="flex justify-end gap-2">
							<button
								type="button"
								class="px-4 py-2 rounded border cursor-pointer"
								:class="
									isDark
										? 'border-neutral-700 bg-neutral-800/60 text-white hover:bg-neutral-800'
										: 'border-black bg-white text-black hover:bg-neutral-50'
								"
								@click="close"
							>
								Cancel
							</button>
							<button
								type="submit"
								class="px-4 py-2 rounded font-semibold"
								:class="isDark ? 'bg-white text-black' : 'bg-black text-white'"
							>
								Send
							</button>
						</div>
					</form>
				</DialogPanel>
			</div>
		</Dialog>
	</TransitionRoot>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	DialogDescription,
	TransitionRoot
} from '@headlessui/vue'
import { person } from '@/data/about'
import { useThemeClasses } from '@/data/theme'

const { textClass } = useThemeClasses()
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const props = defineProps<{ open: boolean }>()
const emit = defineEmits(['update:open'])

const open = ref(Boolean(props.open))

watch(
	() => props.open,
	(v) => {
		open.value = v
	}
)

function close() {
	emit('update:open', false)
}

const name = ref('')
const fromEmail = ref('')
const message = ref('')

function onSubmit() {
	const subject = `Contact from website: ${name.value || 'Anonymous'}`
	const body = `${message.value}\n\nFrom: ${name.value}\nEmail: ${fromEmail.value}`
	const mailto = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
	window.location.href = mailto
	close()
}
</script>
