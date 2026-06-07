<script lang="ts">
	import Callout from './Callout.svelte';
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

	<Callout
		descriptionText="My entire development environment version-controlled and deployable to any machine with a single command. Neovim, Tmux, Zsh, and two full Linux desktop stacks included."
		linkText="Read More"
		url="/projects/dotfiles"
		classes="w-full mt-10"
	/>
</Section>
