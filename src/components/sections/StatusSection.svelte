<script>
	import Heading from '../Heading.svelte';
	import Section from '../Section.svelte';
</script>

<Section>
	<div
		class="flex flex-col gap-8 rounded-xl border border-emerald-400/50 bg-gray-900 p-8 shadow-lg shadow-emerald-400/33"
	>
		<div class="flex flex-col items-start justify-center gap-6">
			<Heading level={2} classes="text-emerald-400">Status</Heading>

			<div class="flex flex-col gap-4">
				<div class="text-xl">
					Recruitment Status:
					<span
						class="ml-2 inline-block text-xl font-bold text-emerald-400 underline underline-offset-4"
						>Open To Work</span
					>
				</div>
				<div class="text-xl">
					Location:
					<span class="ml-2 inline-block font-bold">Minnesota</span>
				</div>
				<div class="text-xl">
					Current Company:
					<span class="ml-2 inline-block font-bold">Athos Commerce</span>
				</div>
				<div class="text-xl">
					Current Role:
					<span class="ml-2 inline-block font-bold">Front End Engineer III</span>
				</div>
			</div>
		</div>
	</div>
</Section>
