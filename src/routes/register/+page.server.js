import { redirect } from '@sveltejs/kit';
import { SERVER_ADDRESS } from '$env/static/private';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const first_name = data.get('first_name');
		const last_name = data.get('last_name');
		const email = data.get('email');
		const password = data.get('password');

		let req = await fetch(`${SERVER_ADDRESS}/registerUser/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				first_name,
				last_name,
				email,
				password
			})
		});

		await req.json().then((data) => {
			if (data.status === 201) {
				throw redirect(302, `/success?message=${data.msg}`);
			} else {
				throw redirect(302, `/failed?message=${data.msg}`);
			}
		});
	}
};
