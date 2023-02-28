import { verify } from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

/** @type {import('./$types').LayoutLoad} */
export async function load({ cookies }) {
	if (cookies.get('token')) {
		try {
			const { firstname, lastname, email } = verify(cookies.get('token'), JWT_SECRET);
			return { props: { firstname, lastname, email } };
		} catch (error) {
			// invalid token
		}
		const firstname = cookies.get('firstname');
		const lastname = cookies.get('lastname');
		const email = cookies.get('email');
		return { props: { firstname, lastname, email } };
	}

	return { props: { firstname: '', lastname: '', email: '' } };
}
