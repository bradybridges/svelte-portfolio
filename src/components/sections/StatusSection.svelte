<script>
	import Heading from '../Heading.svelte';
	import Section from '../Section.svelte';
</script>

<Section>
	<div
		class="flex flex-col gap-8 rounded-xl border border-emerald-200 dark:border-emerald-400/50 bg-emerald-50 dark:bg-gray-900 p-8 shadow-md shadow-gray-200 dark:shadow-lg dark:shadow-emerald-400/33"
	>
		<div class="flex flex-col items-start justify-center gap-6">
			<Heading level={2} classes="text-emerald-600 dark:text-emerald-400">Status</Heading>

			<div class="flex flex-col gap-4">
				<div class="text-xl">
					Recruitment Status:
					<span
						class="ml-2 inline-block text-xl font-bold text-emerald-600 dark:text-emerald-400 underline underline-offset-4"
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
