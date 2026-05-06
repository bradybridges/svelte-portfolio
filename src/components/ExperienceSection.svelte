<script lang="ts">
	import { roles } from '$lib/roles';
	import Heading from './Heading.svelte';
	import Section from './Section.svelte';
</script>

<Section id="experience">
	<div class="flex flex-col gap-8">
		<Heading level={3}>
			Professional Experience
		</Heading>

		{#each roles as role}
			<div class="rounded bg-gray-900 p-4 border border-cyan-400/50">
				<div class="role-card relative flex flex-col items-start justify-center gap-2 pl-8">
					<span class="absolute top-0 left-0 h-3 w-3 rounded-full bg-cyan-400"></span>
					<span class="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-cyan-400"></span>

					<div class="mb-8 w-full">
						<div
							class="flex w-full flex-col items-start justify-between md:flex-row md:items-center"
						>
							<div class="text-xl font-bold text-cyan-500">{role.title}</div>
							<div>
								<div class="mb-1 text-left font-semibold md:text-right">
									{#if role.companyUrl}
										<a
											href={role.companyUrl}
											target="_blank"
											aria-label={`Visit ${role.company} page`}
											>{role.company}</a
										>
									{:else}
										{role.company}
									{/if}
								</div>
								<div class="w-full text-left text-xs md:text-right">
									{role.start} - {role.end}
								</div>
							</div>
						</div>
					</div>

					{#if role.bullets}
						<ul class="list-disc pl-4">
							{#each role.bullets as bullet}
								<li class="py-1">{bullet}</li>
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</Section>

<style>
	.role-card::before {
		content: '';
		width: 2px;
		height: 100%;
		background: var(--color-cyan-400);
		position: absolute;
		left: 5px;
	}
</style>
