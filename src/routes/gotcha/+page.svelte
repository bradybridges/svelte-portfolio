<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Heading from '../../components/Heading.svelte';
	import Link from '../../components/Link.svelte';
	import Section from '../../components/Section.svelte';
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<title>Brady Bridges | Joke Master</title>
</svelte:head>

<Section>
	<div class="flex w-full flex-col flex-nowrap gap-8">
		<div class="flex flex-col gap-4 rounded-xl border border-rose-400 p-4">
			<Heading level={1} classes="text-rose-400">
				WARNING: You have been the subject of a cruel joke!
			</Heading>

			<p class="text-xs">
				This is due to you already being on this website when clicking the view live
				application link for this website.
			</p>
		</div>

		<p>
			At BB Dev&trade; we strive to provide our users with the best application possible. We
			apologize for any inconvenience this may have caused you. Our engineering team is
			investigating the issue and expects to have a resolution soon. Some may consider this a
			joke, others may not. We would like to assure you that we take this distinction in
			comedic preferences very seriously. We sympathize with those who think this is too
			nerdy, or downright dumb, to be funny. Check our <Link
				url="/status"
				showIcon={false}
				target={false}
				label=" Status Page "
				classes="text-cyan-400 border-b border-b-cyan-400"
			/>for the latest information regarding the issue.
		</p>
	</div>
</Section>
