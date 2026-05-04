<script lang="ts">
	import ProjectCards from './ProjectCards.svelte';
	import Section from './Section.svelte';
</script>

<Section class="my-6 flex flex-col items-start gap-4">
	<h2 class="text-3xl mb-2">Projects</h2>
	<div class="w-full">
		<div class="flex flex-wrap gap-8">
			<ProjectCards />
		</div>
	</div>
</Section>
