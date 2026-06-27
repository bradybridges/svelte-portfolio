<script lang="ts">
	import ContactForm from '../components/sections/ContactForm.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import ExperienceSection from '../components/sections/ExperienceSection.svelte';
	import HeroSection from '../components/sections/HeroSection.svelte';
	import ProjectsSection from '../components/sections/ProjectsSection.svelte';
	import StatusSection from '../components/sections/StatusSection.svelte';
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<title>Brady Bridges | Portfolio</title>
</svelte:head>

<HeroSection />
<StatusSection />
<ExperienceSection />
<ProjectsSection />
<ContactForm />
