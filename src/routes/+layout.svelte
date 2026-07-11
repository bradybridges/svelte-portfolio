<script lang="ts">
	import './layout.css';

	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import favicon from '../lib/assets/favicon.svg';

	import Link from '../components/Link.svelte';
	import Icon from '@iconify/svelte';
	import Heading from '../components/Heading.svelte';

	let { children } = $props();

	afterNavigate(() => {
		window.scrollTo({ top: 0, behavior: 'instant' });
	});

	let lastScrollY = $state(0);
	let hidden = $state(false);

	function onScroll() {
		const currentY = window.scrollY;
		hidden = currentY > 80 && currentY > lastScrollY;
		lastScrollY = currentY;
	}

	let showModeNotification = $state(false);
	let mode: 'dark' | 'light' = $state('dark');

	$effect(() => {
		const body = document.body;

		if (mode === 'light' && body.classList.contains('dark')) {
			body.classList.remove('dark');
		} else if (mode === 'dark' && !body.classList.contains('dark')) {
			body.classList.add('dark');
		}
	});
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

<svelte:window onscroll={onScroll} />

<div class="text-gray-950 dark:text-gray-300">
	<header
		class={[
			'sticky top-0 z-20 flex flex-col items-center justify-between gap-6 border-b border-b-gray-950 bg-emerald-400/95 p-4 transition-transform duration-300 md:flex-row md:gap-0 dark:border-b-cyan-400 dark:bg-gray-950/95',
			hidden && '-translate-y-full'
		]}
		class:header-hidden={hidden}
	>
		<a
			href="/"
			aria-label="Brady Bridges - home"
			class="flex flex-col gap-0.5 pl-3 text-center transition-opacity hover:opacity-75 lg:border-l-2 lg:text-left lg:dark:border-cyan-400"
		>
			<span class="text-sm font-bold tracking-wider uppercase dark:text-white"
				>Brady Bridges</span
			>
			<span class="text-xs tracking-[0.2em] text-gray-800 uppercase dark:text-cyan-400"
				>Frontend Engineer</span
			>
		</a>

		<div class="flex flex-nowrap items-center gap-4">
			<nav class="flex gap-3 md:mr-4">
				{#if page.url.pathname !== '/'}
					<Link url="/" label="Go to home page" ariaLabel="Navigate to home page" />
				{:else}
					<Link
						url="#experience"
						label="Experience"
						ariaLabel="Scroll to experience section"
					/>
					<Link url="#projects" label="Projects" ariaLabel="Scroll to projects section" />
					<Link url="#contact" label="Contact" ariaLabel="Scroll to contact form" />
				{/if}
			</nav>

			{#if mode === 'dark'}
				<button
					class="absolute top-4 right-4 cursor-pointer transition-colors md:static dark:hover:text-cyan-400"
					onclick={() => (showModeNotification = true)}
					aria-label="Toggle light mode"
				>
					<Icon icon="circum:light" height="32" />
				</button>
			{:else}
				<button
					class="absolute top-4 right-4 cursor-pointer md:static"
					onclick={() => (mode = 'dark')}
					aria-label="Toggle dark mode"
				>
					<Icon icon="circum:dark" height="24" />
				</button>
			{/if}
		</div>
	</header>

	<main class="mx-auto min-h-screen max-w-360">
		{#if showModeNotification}
			<div
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
			>
				<div
					class="mx-4 flex max-w-md flex-col items-center gap-8 rounded border border-cyan-400 bg-gray-950 p-6 text-center shadow-lg shadow-cyan-400/20"
				>
					<Heading
						level={2}
						classes="text-rose-400 flex flex-nowrap justify-center items-center gap-4"
					>
						<Icon icon="circum:light" height="24" />
						Warning
						<Icon icon="circum:light" height="24" />
					</Heading>

					<p class="text-gray-300">Usage of light mode is known to sear retinas. Please consult a physician before using light mode.</p>

					<button
						class="cursor-pointer rounded border border-rose-400 px-4 py-1.5 text-sm text-rose-400 transition-colors hover:bg-rose-400/10"
						onclick={() => {
							showModeNotification = false;
							mode = 'light';
						}}
						aria-label="Enable light mode"
					>
						Enable Light Mode
					</button>
				</div>
			</div>
		{/if}

		{@render children()}
	</main>

	<footer class="flex justify-center border-t border-t-gray-200 p-4 dark:border-t-cyan-400">
		<div class="flex items-center justify-center gap-4">
			<a
				href="https://github.com/bradybridges"
				target="_blank"
				aria-label="Visit Brady's GitHub profile"
				class="hover:animate-pulse"
			>
				<Icon icon="mdi:github" height="32" />
			</a>

			<a
				href="https://linkedin.com/in/brady-bridges"
				target="_blank"
				aria-label="Visit Brady's LinkedIn profile"
				class="hover:animate-pulse"
			>
				<Icon icon="mdi:linkedin" height="32" />
			</a>
		</div>
	</footer>
</div>
