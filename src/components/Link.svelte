<script lang="ts">
	import Icon from '@iconify/svelte';

	interface Props {
		url: string;
		label: string;
		ariaLabel: string;
		classes?: string;
		target?: '_blank' | false;
		showIcon?: boolean;
		linkButton?: boolean;
		secondaryStyles?: boolean;
	}
	let {
		url,
		label,
		ariaLabel,
		classes = '',
		target = false,
		showIcon = false,
		linkButton = false,
		secondaryStyles = false
	}: Props = $props();
</script>

{#if !linkButton}
	{@const designClasses = secondaryStyles ? 'hover:text-emerald-400' : 'hover:text-cyan-400'}

	<a
		href={url}
		class={['transition-colors', showIcon && 'flex items-center gap-2', classes, designClasses]}
		aria-label={ariaLabel}
		target={target ? target : null}
	>
		{label}

		{#if showIcon}
			<Icon icon="line-md:link" height="16" />
		{/if}
	</a>
{:else}
	{@const designClasses = secondaryStyles
		? 'border-emerald-400 text-emerald-400 hover:bg-emerald-400/10'
		: 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'}

	<a
		href={url}
		aria-label={ariaLabel}
		class={[
			'text-s min-w-32 cursor-pointer rounded border px-4 py-1.5 text-center text-sm transition-colors',
			classes,
			designClasses
		]}
	>
		{label}
	</a>
{/if}
