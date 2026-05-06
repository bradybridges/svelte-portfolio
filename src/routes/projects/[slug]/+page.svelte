<script lang="ts">
	import Heading from '../../../components/Heading.svelte';
	import Link from '../../../components/Link.svelte';
	import Section from '../../../components/Section.svelte';
	let { data } = $props();
</script>

<div class="mt-6 flex justify-end">
	<Link url="/" label="Go to home page" ariaLabel="Navigate to home page" />
</div>

<Section>
	<div>
		<Heading level={1} classes="mb-8">{data.project.name}</Heading>

		<div class="flex gap-4">
			<div class="basis-3/4">
				<div class="mb-6 overflow-hidden rounded border border-gray-700">
					<img
						class="h-100 w-full object-cover object-center"
						src={data.project.image}
						alt={`${data.project.name} thumbnail`}
					/>
				</div>

				<div>
					<p>{data.project.description}</p>
				</div>
			</div>

			<div class="basis-1/4">
				<div class="mb-4 rounded border border-gray-700 bg-gray-900 p-4">
					<Heading level={2} classes="mb-4 text-xl">Links</Heading>

					<div class="flex flex-wrap gap-2">
						{#if data.project.githubUrl}
							<Link
								url={data.project.githubUrl}
								ariaLabel="Visit Github repository page"
								label="Github Repository"
							/>
						{/if}
					</div>
				</div>

				<div class="rounded border border-gray-700 bg-gray-900 p-4">
					<Heading level={2} classes="mb-4 text-xl">Built With</Heading>

					<div class="flex flex-wrap gap-2">
						{#each data.project.badges as badge}
							<span
								class="rounded-full border border-gray-500 bg-gray-800 px-3 text-xs"
								>{badge}</span
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div></Section
>
