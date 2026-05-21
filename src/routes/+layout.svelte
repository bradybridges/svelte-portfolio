<script lang="ts">
	import './layout.css';
	import Link from '../components/Link.svelte';
	import Icon from '@iconify/svelte';
	import { afterNavigate } from '$app/navigation';

	let { children, params } = $props();

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
</script>

<svelte:window onscroll={onScroll} />

<div class="text-gray-300">
	<header
		class={[
			'sticky top-0 z-10 flex flex-col items-center justify-between gap-6 border-b border-b-cyan-400 bg-gray-950/95 p-4 transition-transform duration-300 md:flex-row md:gap-0',
			hidden && '-translate-y-full'
		]}
		class:header-hidden={hidden}
	>
		<span class="flex flex-col gap-1">
			<a href="/" class="rounded bg-cyan-500 p-1">
				<span class="font-semibold text-white uppercase">Brady Bridges</span>
			</a>

			<span
				class="rounded border border-cyan-400 text-center text-xs shadow shadow-cyan-400/33"
				>Frontend Engineer</span
			>
		</span>

		<div class="flex flex-nowrap gap-4">
			<nav class="flex gap-3 md:mr-4">
				{#if params.slug}
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

			<button
				class="absolute top-4 right-4 cursor-pointer md:static"
				onclick={() => (showModeNotification = true)}
			>
				<Icon icon="circum:dark" height="24" />
			</button>
		</div>
	</header>

	<main class="mx-auto min-h-screen max-w-360">
		{#if showModeNotification}
			<div
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
			>
				<div
					class="mx-4 max-w-sm rounded border border-cyan-400 bg-gray-950 p-6 text-center shadow-lg shadow-cyan-400/20"
				>
					<p class="text-gray-300">
						The author of this site insists on using dark mode. Clicking the light-mode
						toggle was likely a mistake on your part.
					</p>
					<button
						class="mt-6 cursor-pointer rounded border border-cyan-400 px-4 py-1.5 text-sm text-cyan-400 transition-colors hover:bg-cyan-400/10"
						onclick={() => (showModeNotification = false)}
					>
						Acknowledge Mistake
					</button>
				</div>
			</div>
		{/if}

		{@render children()}
	</main>

	<footer class="flex justify-center border-t border-t-cyan-400 p-4">
		<div class="flex items-center justify-center gap-4">
			<a
				href="https://github.com/bradybridges"
				target="_blank"
				aria-label="Visit Brady's Github profile"
				class="hover:animate-pulse"
			>
				<Icon icon="mdi:linkedin" height="32" />
			</a>

			<a
				href="https://linkedin.com/in/brady-bridges"
				target="_blank"
				aria-label="Visit Brady's LinkedIn page"
				class="hover:animate-pulse"
			>
				<Icon icon="mdi:github" height="32" />
			</a>
		</div>
	</footer>
</div>
