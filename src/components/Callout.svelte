<script lang="ts">
	let {
		descriptionText,
		url,
		linkText,
		classes = ''
	}: { descriptionText: string; url: string; linkText: string; classes?: string } = $props();
</script>

<div
	class={[
		'flex flex-col md:flex-row flex-nowrap items-center justify-between gap-8 rounded-xl border border-emerald-400/30 bg-gray-900 p-4 text-center lg:text-left',
		classes
	]}
>
	<p class="lg:pl-4 font-medium">{descriptionText}</p>

	<!-- eslint-disable svelte/no-navigation-without-resolve -- external URL -->
	<a
		href={url}
		class="text-s min-w-32 cursor-pointer rounded border border-emerald-400 px-4 py-1.5 text-center text-sm text-emerald-400 transition-colors hover:bg-cyan-400/10"
	>
		{linkText}
	</a>
	<!-- eslint-enable svelte/no-navigation-without-resolve -- external URL -->
</div>
