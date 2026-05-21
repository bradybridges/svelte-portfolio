<script lang="ts">
	import Icon from "@iconify/svelte";

	interface Props {
		url: string;
		label: string;
		classes?: string;
		ariaLabel?: string;
		target?: '_blank' | false;
		showIcon?: boolean;
	}
	let { url, label, ariaLabel, classes = '', target = false, showIcon = false }: Props = $props();
</script>

<a
	href={url}
	class={['transition-colors hover:text-cyan-400', showIcon && 'flex gap-2 items-center', classes]}
	aria-label={ariaLabel ? ariaLabel : null}
	target={target ? target : null}
>
	{label}

	{#if showIcon}
		<Icon icon="line-md:link" height="16" />
	{/if}
</a>
