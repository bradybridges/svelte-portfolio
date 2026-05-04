import { error, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();
			const email = data.get('email');
			const message = data.get('message');

			if (!email) {
				return fail(400, 'Email is required');
			}

			if (!message) {
				return fail(400, 'Message is required');
			}

			console.log('ready to send message...');
			console.log('email: ', email);
			console.log('message: ', message);

			return { success: true };
		} catch {
			return error(500, 'Internal Server Error');
		}
	}
} satisfies Actions;
