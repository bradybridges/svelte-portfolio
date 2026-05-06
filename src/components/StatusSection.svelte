<script>
	import Heading from './Heading.svelte';
	import Section from './Section.svelte';
</script>

<Section class="mt-12 md:mb-12">
	<div
		class="flex flex-col gap-8 rounded-lg border border-emerald-400/50 bg-gray-900 p-8 shadow shadow-emerald-400/33 lg:shadow-2xl"
	>
		<div class="flex flex-col items-start justify-center gap-6">
			<Heading level={2}>Status</Heading>

			<div class="text-lg">
				Recruitment Status:
				<span class="ml-2 inline-block pb-1 font-bold text-emerald-400">Open To Work</span>
			</div>
		</div>
	</div>
</Section>
