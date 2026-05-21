<script lang="ts">
	import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$env/static/public';
	import Heading from './Heading.svelte';
	import Section from './Section.svelte';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let success = $state(false);
	let error = $state(false);
	let inputsHaveData = $derived(name && email && message);

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		error = false;
		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ access_key: PUBLIC_WEB3FORMS_ACCESS_KEY, name, email, message })
			});
			const result = await response.json();
			if (result.success) {
				success = true;
				name = '';
				email = '';
				message = '';
			} else {
				error = true;
			}
		} catch {
			error = true;
		}
	}
</script>

<Section id="contact" class="flex flex-col items-center justify-center">
	<Heading level={2} classes="mb-8 text-3xl text-cyan-500">Get In Touch</Heading>

	{#if success}
		<p class="text-cyan-400">Thanks for reaching out!</p>
	{/if}

	{#if error}
		<p class="text-red-400">Something went wrong. Please try again.</p>
	{/if}

	<form class="flex w-full flex-col items-start justify-center gap-4" onsubmit={handleSubmit}>
		<label class="flex w-full flex-col items-start justify-center gap-2">
			Name
			<input
				type="text"
				name="name"
				class="min-w-full rounded bg-gray-300 p-4 text-xs text-black md:min-w-80"
				bind:value={name}
				required
			/>
		</label>

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
				disabled={success || !inputsHaveData}>Submit</button
			>
		</div>
	</form>
</Section>
