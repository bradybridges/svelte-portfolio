<script lang="ts">
	import headshot from '$lib/assets/Brady Bridges.jpg';
	import Section from './Section.svelte';
</script>

<Section>
	<div
		class="hero-container gap-4 rounded-2xl border border-cyan-400/10 shadow-lg shadow-cyan-400/33 lg:grid lg:grid-cols-[1fr_2fr] lg:shadow-2xl"
	>
		<div class="overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
			<img src={headshot} alt="headshot" />
		</div>

		<div class="flex w-full flex-col items-center justify-center gap-2 p-8 lg:p-0">
			<h2 class="text-3xl">Hi, I'm Brady!</h2>
			<p class="p-4">
				Senior Frontend Engineer with 6+ years of experience building scalable,
				high-performance web applications using React and TypeScript. Proven track record of
				driving measurable business impact, including significant increases in revenue and
				conversion rates. Skilled in frontend architecture, CI/CD implementation, and test
				automation, with experience mentoring engineers and leading technical initiatives.
			</p>
		</div>
	</div>
</Section>
