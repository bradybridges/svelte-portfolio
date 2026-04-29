<script lang="ts">
	import { projects } from './projects';
</script>

{#each projects as project}
	<div class="project-card flex flex-col overflow-hidden rounded-xl bg-gray-900">
		<a href={project.url} class="mb-2 border-b border-b-cyan-400 pb-4" target="_blank">
			<img class="h-48 w-full object-cover object-bottom" src={project.image} alt="EasyRef" />
		</a>
		<div class="flex flex-col items-start gap-3 px-2 py-3">
			<div>
				<h3 class="mb-1 text-lg">{project.name}</h3>
				<p class="text-xs">{project.description}</p>
			</div>
			<div>
				<p class="mb-2 text-xs">Built With</p>
				<div class="flex flex-wrap gap-2">
					{#each project.badges as badge}
						<span class="rounded-full border border-gray-500 bg-gray-800 px-3 text-xs"
							>{badge}</span
						>
					{/each}
				</div>
			</div>
		</div>
	</div>
{/each}

<style>
	.project-card {
		flex-basis: calc(25% - 12px);
	}
</style>
