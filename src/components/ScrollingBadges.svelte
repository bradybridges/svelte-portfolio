<script lang="ts">
	let {
		badges,
		duration = 20,
		direction = 'normal',
		pauseOnHover = true,
	}: {
		badges: string[];
		duration?: number;
		direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
		pauseOnHover?: boolean;
	} = $props();
</script>

<div class="my-4 overflow-hidden py-4">
	<div
		class="banner-track"
		class:pause-on-hover={pauseOnHover}
		style="--duration: {duration}s; --anim-direction: {direction}"
	>
		{#each badges as badge (badge + '-a')}
			<span class="badge">{badge}</span>
		{/each}
		{#each badges as badge (badge + '-b')}
			<span class="badge">{badge}</span>
		{/each}
	</div>
</div>

<style>
	.banner-track {
		display: flex;
		flex-wrap: nowrap;
		gap: 0.625rem;
		width: max-content;
		animation: marquee var(--duration, 20s) linear infinite;
		animation-direction: var(--anim-direction, normal);
	}

	.banner-track.pause-on-hover:hover {
		animation-play-state: paused;
	}

	.badge {
		display: inline-block;
		flex-shrink: 0;
		border-radius: 9999px;
		padding: 0.3rem 1.1rem;
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		white-space: nowrap;
		color: rgb(52, 211, 153);
		background: rgba(52, 211, 153, 0.12);
		border: 1px solid rgba(52, 211, 153, 0.8);
	}

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}
</style>
