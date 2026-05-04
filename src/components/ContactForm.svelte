<script lang="ts">
	import { enhance } from "$app/forms";
	import Section from './Section.svelte';

	let email = $state('');
	let message = $state('');
	let success = $state(false);
</script>

<Section class="flex flex-col items-center justify-center">
	<h2 class="mb-8 text-3xl text-cyan-500">Get In Touch</h2>

	{#if success}
		<p class="text-cyan-400">Thanks for reaching out!</p>
	{/if}

	<form
		class="flex w-full flex-col items-start justify-center gap-4"
		method="POST"
		use:enhance={() => async ({ result }) => {
			if (result.type === 'success') {
				success = true;
				email = '';
				message = '';
			}
		}}
	>
		<label class="flex w-full flex-col items-start justify-center gap-2">
			Email
			<input
				type="email"
				name="email"
				class="min-w-full rounded bg-gray-300 p-4 text-xs text-black md:min-w-80"
				bind:value={email}
				required
			/>
		</label>

		<label class="flex w-full flex-col items-start justify-center gap-2">
			Message
			<textarea
				class="m:min-w-xl min-h-80 min-w-full rounded bg-gray-300 p-4 text-xs text-black"
				name="message"
				bind:value={message}
				required
			></textarea>
		</label>

		<div class="flex w-full items-center justify-center md:justify-end">
			<button
				class="text-s min-w-32 cursor-pointer rounded border border-cyan-400 p-2 font-semibold text-gray-300 hover:animate-pulse disabled:opacity-50"
				type="submit"
				disabled={success}
			>Submit</button
			>
		</div>
	</form>
</Section>
