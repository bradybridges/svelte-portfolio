<script lang="ts">
	import { cloudinaryUrl, cloudinarySrcset } from '$lib/cloudinary';

	interface Props {
		publicId: string;
		alt: string;
		class?: string;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
		sizes?: string;
		widths?: number[];
		width?: number;
		height?: number;
	}

	let {
		publicId,
		alt,
		class: className,
		loading = 'lazy',
		fetchpriority,
		sizes = '100vw',
		widths = [320, 640, 960, 1280, 1600],
		width,
		height
	}: Props = $props();

	const src = $derived(cloudinaryUrl(publicId));
	const srcset = $derived(cloudinarySrcset(publicId, widths));
</script>

<img
	{src}
	{srcset}
	{sizes}
	{alt}
	class={className}
	{loading}
	decoding="async"
	{fetchpriority}
	{width}
	{height}
/>
