import { PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/public';

export function cloudinaryUrl(publicId: string, transforms = 'f_auto,q_auto'): string {
	return `https://res.cloudinary.com/${PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}
