<script lang="ts">
	import Heading from '../../../components/Heading.svelte';
	import Link from '../../../components/Link.svelte';
	import Section from '../../../components/Section.svelte';
	let { data } = $props();
	let hasLinks = $derived(data.project.githubUrl || data.project.url ? true : false);
</script>

<svelte:head>
	<title>Brady Bridges | {data.project.name}</title>
</svelte:head>

{#snippet details(classes: string)}
	<div class={['lg:basis-1/4', classes]}>
		<div class="mb-4 rounded border border-gray-700 bg-gray-900 p-4">
			<Heading level={3} classes="mb-4 text-xl">Links</Heading>

			{#if hasLinks}
				<div class="flex flex-col gap-2">
					{#if data.project.url && data.project.url !== data.project.githubUrl}
						<Link
							url={data.project.url}
							ariaLabel={`View ${data.project.name} live application`}
							label="Live Application"
							target="_blank"
							showIcon={true}
						/>
					{/if}

					{#if data.project.githubUrl}
						<Link
							url={data.project.githubUrl}
							ariaLabel="Visit Github repository page"
							label="Github Repository"
							target="_blank"
							showIcon={true}
						/>
					{/if}

					{#if data.project.customLink}
						<Link
							url={data.project.customLink.url}
							ariaLabel={data.project.customLink.label}
							label={data.project.customLink.label}
							target="_blank"
							showIcon={true}
						/>
					{/if}
				</div>
			{/if}
		</div>

		<div class="rounded border border-gray-700 bg-gray-900 p-4">
			<Heading level={3} classes="mb-4 text-xl">Built With</Heading>

			<div class="flex flex-wrap gap-2">
				{#each data.project.badges as badge}
					<span class="text-s rounded-full border border-cyan-400/50 bg-gray-800 px-3"
						>{badge}</span
					>
				{/each}
			</div>
		</div>
	</div>
{/snippet}

<Section>
	<div>
		<Heading level={1} classes="mb-8 text-emerald-400">{data.project.name}</Heading>

		<div class="flex flex-col gap-4 lg:flex-row">
			<div class="lg:basis-3/4">
				<div class="mb-4 overflow-hidden rounded border border-gray-700 lg:mb-16">
					<img
						class="none h-100 w-full object-cover object-center"
						src={data.project.image}
						alt={`${data.project.name} thumbnail`}
					/>
				</div>

				<!-- Mobile details -->
				{@render details('lg:hidden')}

				<div class="my-12">
					<Heading level={2} classes="mb-4 text-cyan-400">Description</Heading>
					<p class="py-4 text-lg">{data.project.description}</p>
				</div>

				{#if data.project.motivation}
					<div class="my-12">
						<Heading level={2} classes="mb-4 text-cyan-400">Motivation</Heading>
						<p class="py-4 text-lg">{data.project.motivation}</p>
					</div>
				{/if}

				{#if data.project.technical}
					<div class="my-12">
						<Heading level={2} classes="mb-4 text-cyan-400">Technical Challenge</Heading>
						<p class="py-4 text-lg">{data.project.technical}</p>
					</div>
				{/if}
			</div>

			<!-- Desktop details -->
			{@render details('hidden lg:block')}
		</div>
	</div>
</Section>
