import { redirect } from '@sveltejs/kit';

export async function POST({ cookies }) {
	if (cookies.get('token', { path: '/' })) {
		cookies.set('token', '', { maxAge: 0, path: '/' });
		cookies.set('firstname', '', { maxAge: 0, path: '/' });
		cookies.set('lastname', '', { maxAge: 0, path: '/' });
		cookies.set('email', '', { maxAge: 0, path: '/' });
	}

	throw redirect(302, '/');
}
