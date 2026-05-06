import type { PageServerLoad } from "./$types";
import { projects } from "$lib/projects";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = ({ params }) => {
	const slug = params.slug
	const project = projects.find((p) => p.slug === slug)
	 
	if (!project) error(404)
	
	return { project }
}
