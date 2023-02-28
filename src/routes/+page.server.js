import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	if (cookies.get('token')) {
		const decode = verify(cookies.get('token'), JWT_SECRET);
		if (!decode) {
			return {
				status: 302,
				redirect: '/failed?message=Invalid token. Please login again.'
			};
		} else {
			const firstname = decode.firstname;
			const lastname = decode.lastname;
			const email = decode.email;
			return { props: { firstname, lastname, email } };
		}
	}
}
