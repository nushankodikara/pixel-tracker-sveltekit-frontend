import { redirect } from '@sveltejs/kit';
import { JWT_SECRET, SERVER_ADDRESS } from '$env/static/private';
import { verify } from 'jsonwebtoken';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		let req = await fetch(`${SERVER_ADDRESS}/checkUser/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});

		await req.json().then((data) => {
			if (data.status != 400) {
				const decode = verify(data.token, JWT_SECRET);
				if (!decode) throw redirect(302, '/failed?message=Login failed. Please try again.');
				const token = data.token;
				const firstname = decode.firstname;
				const lastname = decode.lastname;
				const email = decode.email;

				cookies.set('token', token, {
					path: '/',
					maxAge: 60 * 60 // 1 hour
				});
				cookies.set('firstname', firstname, {
					path: '/',
					maxAge: 60 * 60 // 1 hour
				});
				cookies.set('lastname', lastname, {
					path: '/',
					maxAge: 60 * 60 // 1 hour
				});
				cookies.set('email', email, {
					path: '/',
					maxAge: 60 * 60 // 1 hour
				});

				throw redirect(302, `/success?message=${data.msg}`);
			} else {
				throw redirect(302, `/failed?message=${data.msg}`);
			}
		});

		throw redirect(302, '/failed?message=Login failed. Please try again.');
	}
};
