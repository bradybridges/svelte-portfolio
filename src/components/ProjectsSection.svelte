<script lang="ts">
	import Heading from './Heading.svelte';
	import ProjectCards from './ProjectCards.svelte';
	import Section from './Section.svelte';
</script>

<Section id="projects" class="my-6 flex flex-col items-start gap-4">
	<Heading level={2} classes="mb-2">Projects</Heading>

	<div class="w-full">
		<div class="flex flex-wrap gap-8">
			<ProjectCards />
		</div>
	</div>
</Section>
