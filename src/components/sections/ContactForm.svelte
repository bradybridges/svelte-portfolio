<script lang="ts">
	import { PUBLIC_WEB3FORMS_ACCESS_KEY } from '$env/static/public';
	import Heading from '../Heading.svelte';
	import Section from '../Section.svelte';

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
				body: JSON.stringify({
					access_key: PUBLIC_WEB3FORMS_ACCESS_KEY,
					name,
					email,
					message
				})
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

<Section id="contact">
	<div
		class="flex flex-col items-center rounded-xl border border-cyan-200 dark:border-cyan-400/50 bg-white dark:bg-gray-900 p-8 shadow-md shadow-gray-200 dark:shadow-lg dark:shadow-cyan-400/33"
	>
		<Heading level={2} classes="mb-8 text-3xl text-cyan-600 dark:text-cyan-400">Get In Touch</Heading>

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
					class="min-w-full rounded border border-gray-300 dark:border-white bg-white p-4 text-xs text-gray-900 md:min-w-80"
					bind:value={name}
					required
				/>
			</label>

			<label class="flex w-full flex-col items-start justify-center gap-2">
				Email
				<input
					type="email"
					name="email"
					class="min-w-full rounded border border-gray-300 dark:border-white bg-white p-4 text-xs text-gray-900 md:min-w-80"
					bind:value={email}
					required
				/>
			</label>

			<label class="flex w-full flex-col items-start justify-center gap-2">
				Message
				<textarea
					class="m:min-w-xl min-h-80 min-w-full rounded border border-gray-300 dark:border-white bg-white p-4 text-xs text-gray-900"
					name="message"
					bind:value={message}
					required
				></textarea>
			</label>

			<div class="flex w-full items-center justify-center md:justify-end">
				<button
					class="text-s min-w-32 cursor-pointer rounded border border-cyan-600 dark:border-cyan-400 bg-cyan-600 dark:bg-transparent p-2 font-semibold text-white dark:text-cyan-400 hover:bg-cyan-700 dark:hover:bg-transparent dark:hover:animate-pulse disabled:opacity-50"
					type="submit"
					disabled={success || !inputsHaveData}
					aria-label="Submit contact form">Submit</button
				>
			</div>
		</form>
	</div>
</Section>
