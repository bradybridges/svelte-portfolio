<script lang="ts">
	import ContactForm from '../components/sections/ContactForm.svelte';
	import ExperienceSection from '../components/sections/ExperienceSection.svelte';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import ProjectsSection from '../components/sections/ProjectsSection.svelte';
	import StatusSection from '../components/sections/StatusSection.svelte';
</script>

<svelte:head>
	<title>Brady Bridges | Portfolio</title>
	<meta
		name="description"
		content="Brady Bridges — Senior Frontend Engineer with 6+ years building scalable, high-performance web apps with React and TypeScript. Explore projects, experience, and get in touch."
	/>
</svelte:head>

<HeroSection />
<StatusSection />
<ExperienceSection />
<ProjectsSection />
<ContactForm />
