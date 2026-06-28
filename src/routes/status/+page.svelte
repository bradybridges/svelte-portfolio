<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Heading from '../../components/Heading.svelte';
	import Section from '../../components/Section.svelte';

	const currentDate = new Date().toLocaleString();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<title>Brady Bridges | Operational Status</title>
</svelte:head>

<Section>
	<div class="flex w-full flex-col flex-nowrap gap-8">
		<Heading level={1} classes="text-rose-400 border border-rose-400 p-4 rounded-xl">
			Operational Status (degraded performance)
		</Heading>

		<div class="flex flex-col gap-8">
			<Heading level={2}>
				<span class="text-emerald-400">{currentDate}:</span> AWS outage impacting performance
			</Heading>

			<ul class="flex list-disc flex-col gap-4 px-4">
				<li>
					On {currentDate} our engineering team uncovered an influx of distasteful jokes impacting
					the US-East-1 cluster. Our team is monitoring the situation closely and is working as
					quickly as possible to resolve the issue.
				</li>
				<li>
					We anticipate degraded probabilities of securing a new software engineering role until the issue is
					resolved and our systems stabalize.
				</li>
				<li>
					Customers have brought to our attention that this website does not rely on
					AWS infrastructure at all, questioning the veracify of our public statement.
				</li>
			</ul>
		</div>
	</div>
</Section>
