import { PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/public';

export function cloudinaryUrl(publicId: string, transforms = 'f_auto,q_auto'): string {
	return `https://res.cloudinary.com/${PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

export function cloudinarySrcset(
	publicId: string,
	widths: number[],
	transforms = 'f_auto,q_auto'
): string {
	return widths
		.map((w) => `${cloudinaryUrl(publicId, `${transforms},w_${w}`)} ${w}w`)
		.join(', ');
}
