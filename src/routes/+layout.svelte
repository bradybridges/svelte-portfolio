<script lang="ts">
	import './layout.css';
	import linkedin from '$lib/assets/linkedin.svg';
	import Link from '../components/Link.svelte';
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
</script>

<svelte:window onscroll={onScroll} />

<div class="text-gray-300">
	<header
		class={["sticky top-0 z-10 flex items-center justify-between border-b border-b-cyan-400 bg-gray-950/95 p-4 transition-transform duration-300", hidden && '-translate-y-full']}
		class:header-hidden={hidden}
	>
		<span class="flex flex-col gap-1">
			<a href="/" class="rounded bg-cyan-500 p-1">
				<span class="font-semibold text-white uppercase">Brady Bridges</span>
			</a>

			<span class="rounded border border-cyan-400 text-center text-xs shadow shadow-cyan-400/33">Frontend Engineer</span
			>
		</span>

		<nav class="mr-4 flex gap-3">
			{#if params.slug}
				<Link url="/" label="Go to home page" ariaLabel="Navigate to home page" />
			{:else}
				<Link url="#experience" label="Experience" ariaLabel="Scroll to experience section" />
				<Link url="#projects" label="Projects" ariaLabel="Scroll to projects section" />
				<Link url="#contact" label="Contact" ariaLabel="Scroll to contact form" />
			{/if}
		</nav>
	</header>

	<main class="mx-auto min-h-screen max-w-360">{@render children()}</main>

	<footer class="flex justify-center border-t border-t-cyan-400 p-4">
		<div class="flex items-center justify-center gap-4">
			<a
				href="https://github.com/bradybridges"
				target="_blank"
				aria-label="Visit Brady's Github profile"
				class="hover:animate-pulse"
			>
				<svg
					aria-hidden="true"
					focusable="false"
					class="octicon octicon-mark-github"
					viewBox="0 0 24 24"
					width="32"
					height="32"
					fill="currentColor"
					display="inline-block"
					overflow="visible"
					style="vertical-align:text-bottom"
					><path
						d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"
					></path></svg
				>
			</a>

			<a
				href="https://linkedin.com/in/brady-bridges"
				target="_blank"
				aria-label="Visit Brady's LinkedIn page"
				class="hover:animate-pulse"
			>
				<img src={linkedin} alt="LinkedIn logo" width="32" height="32" />
			</a>
		</div>
	</footer>
</div>
