<script lang="ts">
	import ContactForm from '../components/ContactForm.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import ExperienceSection from '../components/ExperienceSection.svelte';
	import HeroSection from '../components/HeroSection.svelte';
	import ProjectsSection from '../components/ProjectsSection.svelte';
	import StatusSection from '../components/StatusSection.svelte';
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<title>Brady Bridges | Portfolio</title>
</svelte:head>

<HeroSection />
<StatusSection />
<ExperienceSection />
<ProjectsSection />
<!-- <ContactForm /> -->
