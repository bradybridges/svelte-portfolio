<script lang="ts">
	import Heading from '../../../components/Heading.svelte';
	import Link from '../../../components/Link.svelte';
	import Section from '../../../components/Section.svelte';
	let { data } = $props();
	let hasLinks = $derived(data.project.githubUrl || data.project.url ? true : false);
</script>

<Section>
	<div>
		<Heading level={1} classes="mb-8">{data.project.name}</Heading>

		<div class="flex gap-4">
			<div class="basis-3/4">
				<div class="mb-16 overflow-hidden rounded border border-gray-700">
					<img
						class="h-100 w-full object-cover object-center"
						src={data.project.image}
						alt={`${data.project.name} thumbnail`}
					/>
				</div>

				<div class="my-12">
					<Heading level={2} classes="mb-4">Description</Heading>
					<p class="py-4 text-lg">{data.project.description}</p>
				</div>

				{#if data.project.motivation}
					<div class="my-12">
						<Heading level={2} classes="mb-4">Motivation</Heading>
						<p class="py-4 text-lg">{data.project.description}</p>
					</div>
				{/if}
			</div>

			<div class="basis-1/4">
				<div class="mb-4 rounded border border-gray-700 bg-gray-900 p-4">
					<Heading level={3} classes="mb-4 text-xl">Links</Heading>

					{#if hasLinks}
						<div class="flex flex-col gap-2">
							{#if data.project.url && data.project.url !== data.project.githubUrl}
								<Link
									url={data.project.url}
									ariaLabel={`View ${data.project.name} live application`}
									label="Live Application"
								/>
							{/if}

							{#if data.project.githubUrl}
								<Link
									url={data.project.githubUrl}
									ariaLabel="Visit Github repository page"
									label="Github Repository"
								/>
							{/if}
						</div>
					{/if}
				</div>

				<div class="rounded border border-gray-700 bg-gray-900 p-4">
					<Heading level={3} classes="mb-4 text-xl">Built With</Heading>

					<div class="flex flex-wrap gap-2">
						{#each data.project.badges as badge}
							<span
								class="rounded-full border border-cyan-400/50 bg-gray-800 px-3 text-xs"
								>{badge}</span
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</Section>
