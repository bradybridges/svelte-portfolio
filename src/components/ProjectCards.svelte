<script lang="ts">
	import { resolve } from '$app/paths';
	import { projects } from '$lib/projects';
	import Icon from '@iconify/svelte';
	import Heading from './Heading.svelte';
	import Image from './Image.svelte';
	import Link from './Link.svelte';

	const positionClass: Record<string, string> = {
		top: 'object-top',
		center: 'object-center',
		bottom: 'object-bottom'
	};
</script>

{#each projects as project (project.name)}
	{@const imageClasses = [
		'h-48',
		'w-full',
		'object-cover',
		project.position ? positionClass[project.position] : 'object-center'
	].join(' ')}

	{@const projectPageUrl = resolve(`/projects/${project.slug}`)}

	{#if !project.hidden}
		<div
			class="flex h-auto basis-full flex-col overflow-hidden rounded-xl border border-cyan-200 bg-white shadow-sm shadow-gray-200 md:basis-[calc(50%-24px)] lg:basis-[calc(33%-24px)] dark:border-cyan-400/50 dark:bg-gray-900 dark:shadow-none"
		>
			<div class="relative">
				<a
					href={projectPageUrl}
					class="mb-2 border-b border-b-emerald-400 pb-4"
					aria-label="Read more about {project.name} project"
				>
					<Image
						publicId={project.image}
						alt="{project.name} project preview"
						class={imageClasses}
						sizes="(min-width: 1024px) calc(33vw - 32px), (min-width: 768px) calc(50vw - 32px), 100vw"
					/>
				</a>

				{#if project.githubUrl}
					<a
						href={project.githubUrl}
						target="_blank"
						aria-label={`Visit ${project.name} GitHub page`}
						class="absolute top-2 right-2 z-10 rounded-full bg-black text-white hover:animate-pulse"
					>
						<Icon icon="mdi:github" height="32" />
					</a>
				{/if}
			</div>

			<div class="flex h-full flex-col items-start gap-4 p-4">
				<a
					class="w-full"
					href={projectPageUrl}
					target="_blank"
					aria-label={`Visit ${project.name} page`}
				>
					<Heading level={3} classes="mb-2 text-emerald-600 dark:text-emerald-400">
						{project.name}
					</Heading>

					<p class="text-s line-clamp-5">{project.description}</p>
				</a>

				<div class="mb-4 w-full">
					<Heading level={4} classes="mb-4">Built With</Heading>

					<div class="flex flex-wrap gap-2">
						{#each project.badges as badge (badge)}
							<span
								class="text-s rounded-full border border-gray-200 bg-gray-100 px-3 dark:border-gray-500 dark:bg-gray-800"
								>{badge}</span
							>
						{/each}
					</div>
				</div>

				<div class="mt-auto flex w-full justify-center">
					<Link
						classes="mt-6"
						url={projectPageUrl}
						label="Read More"
						ariaLabel="Read more about {project.name}"
						linkButton={true}
					/>
				</div>
			</div>
		</div>
	{/if}
{/each}
