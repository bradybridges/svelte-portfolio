<script lang="ts">
	interface Props {
		url: string;
		label: string;
		classes?: string;
		ariaLabel?: string;
	}
	let { url, label, ariaLabel, classes = '' }: Props = $props();
</script>

<a
	href={url}
	class={['transition-colors hover:text-cyan-400', classes]}
	aria-label={ariaLabel ? ariaLabel : null}
>
	{label}
</a>
