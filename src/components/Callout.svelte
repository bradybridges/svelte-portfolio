<script lang="ts">
	import Link from './Link.svelte';

	type Props = {
		descriptionText: string;
		url: string;
		linkText: string;
		linkAriaLabel: string;
		classes?: string;
	};

	let { descriptionText, url, linkText, linkAriaLabel, classes = '' }: Props = $props();
</script>

<div
	class={[
		'flex flex-col flex-nowrap items-center justify-between gap-8 rounded-xl border border-emerald-200 dark:border-emerald-400/30 bg-emerald-50 dark:bg-gray-900 p-4 text-center md:flex-row lg:text-left',
		classes
	]}
>
	<p class="font-medium lg:pl-4">{descriptionText}</p>

	<Link
		label={linkText}
		{url}
		ariaLabel={linkAriaLabel}
		linkButton={true}
		secondaryStyles={true}
	/>
</div>
