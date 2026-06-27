<script lang="ts">
	import { cloudinaryUrl } from '$lib/cloudinary';
	import Heading from '../Heading.svelte';
	import Section from '../Section.svelte';
	import ScrollingBadges from '../ScrollingBadges.svelte';

	const headshot = cloudinaryUrl('headshot2');
	const badges = [
		'JavaScript',
		'TypeScript',
		'React',
		'Preact',
		'Svelte',
		'Node',
		'Express',
		'Python',
		'PHP',
		'GraphQL',
		'PostgreSQL',
		'Redux Toolkit',
		'WebSockets',
		'Auth0',
		'TailwindCSS',
		'D3',
		'Docker',
		'GitHub',
		'GitHub Actions',
		'WordPress',
		'Amazon Web Services',
		'Cypress',
		'Vite',
		'Vitest',
		'Version Control',
		'Continuous Deployment',
		'Continuous Delivery',
		"Brought To You By Carl's Jr"
	];
</script>

<Section>
	<div class="rounded-xl border border-cyan-400/10 bg-gray-900 p-4 shadow-lg shadow-cyan-400/33">
		<div class="hero-container gap-4 lg:grid lg:grid-cols-[1fr_2fr]">
			<div class="overflow-hidden rounded-xl">
				<img src={headshot} alt="headshot" />
			</div>

			<div class="flex w-full flex-col items-center justify-center gap-2 px-2 py-8 lg:py-0">
				<Heading level={2} classes="text-emerald-400">Hi, I'm Brady!</Heading>

				<p class="p-4 text-center lg:text-left text-lg">
					Senior Frontend Engineer with 6+ years of experience building scalable,
					high-performance web applications using React and TypeScript. Proven track
					record of driving measurable business impact, including significant increases in
					revenue and conversion rates. Skilled in frontend architecture, CI/CD
					implementation, and test automation, with experience mentoring engineers and
					leading technical initiatives.
				</p>
			</div>
		</div>

		<div class="mt-8">
			<ScrollingBadges {badges} direction="normal" pauseOnHover={false} duration={40} />
		</div>
	</div>
</Section>
