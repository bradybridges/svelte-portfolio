<script lang="ts">
	import headshot from '$lib/assets/Brady Bridges.jpg';
</script>

<section class="my-6 px-12 py-4">
	<div class="hero-container gap-4">
		<div class="overflow-hidden rounded-xl">
			<img src={headshot} alt="headshot" />
		</div>

		<div class="flex w-full flex-col items-center justify-center gap-2">
			<h2 class="text-3xl">Hero Section</h2>
			<p class="p-4">adfasd sf asdf dfa sdf sdfasd f</p>
		</div>
	</div>
</section>

<style>
	.hero-container {
		display: grid;
		grid-template-columns: 1fr 2fr;
	}
</style>
