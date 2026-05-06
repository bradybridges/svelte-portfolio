<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	let { children, ...attributes }: SvelteHTMLElements['section'] = $props();
</script>

<section
	id={attributes?.id ? attributes.id : null}
	class={['mt-6 mb-12 px-4 py-4 md:mb-24 md:px-12 lg:px-24', attributes.class]}
>
	{@render children?.()}
</section>
