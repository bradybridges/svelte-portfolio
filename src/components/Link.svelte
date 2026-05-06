<script lang="ts">
	interface Props {
		url: string;
		label: string;
		classes?: string;
		ariaLabel?: string;
		target?: '_blank' | false;
	}
	let { url, label, ariaLabel, classes = '', target = false }: Props = $props();
</script>

<a
	href={url}
	class={['transition-colors hover:text-cyan-400', classes]}
	aria-label={ariaLabel ? ariaLabel : null}
	target={target ? target : null}
>
	{label}
</a>
