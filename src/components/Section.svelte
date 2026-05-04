<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	let { children, ...attributes }: SvelteHTMLElements['section'] = $props();
</script>

<section class={['mt-6 mb-12 md:mb-24 px-4 md:px-12 lg:px-24 py-4', attributes.class]}>
	{@render children?.()}
</section>
