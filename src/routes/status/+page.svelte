<script lang="ts">
	import Heading from '../../components/Heading.svelte';
	import Section from '../../components/Section.svelte';

	const currentDate = new Date().toLocaleString();
</script>

<svelte:head>
	<title>Brady Bridges | Status</title>
	<meta
		name="description"
		content="Status page for Brady Bridges' portfolio site — tracking all critical incidents with the appropriate level of engineering rigor."
	/>
	<meta name="robots" content="noindex" />
</svelte:head>

<Section>
	<div class="flex w-full flex-col flex-nowrap gap-8">
		<Heading level={1} classes="text-rose-400 border border-rose-400 p-4 rounded-xl">
			Operational Status (degraded performance)
		</Heading>

		<div class="flex flex-col gap-8">
			<Heading level={2}>
				<span class="text-emerald-400">{currentDate}:</span> AWS outage impacting job prospects
			</Heading>

			<ul class="flex list-disc flex-col gap-4 px-4">
				<li>
					On {currentDate} our engineering team uncovered an influx of distasteful jokes impacting
					the US-East-1 cluster. Our team is monitoring the situation closely and is working
					as quickly as possible to resolve the issue.
				</li>
				<li>
					We anticipate degraded probabilities of securing a new software engineering role
					until the issue is resolved and our systems stabalize.
				</li>
				<li>
					Customers have brought to our attention that this issue is "completely unrelated to AWS", bringing the veracity of our public statements into question.
				</li>
			</ul>
		</div>
	</div>
</Section>
