<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		level: 1 | 2 | 3 | 4 | 5 | 6;
		classes?: string;
		children?: Snippet;
	}

	let { level, classes, children }: Props = $props();

	const tag = $derived(`h${level}`);

	const sizeClasses: Record<number, string> = {
		1: 'text-4xl',
		2: 'text-3xl',
		3: 'text-2xl',
		4: 'text-xl',
		5: 'text-lg'
	};
</script>

<svelte:element this={tag} class={[sizeClasses[level], classes]}>
	{@render children?.()}
</svelte:element>
