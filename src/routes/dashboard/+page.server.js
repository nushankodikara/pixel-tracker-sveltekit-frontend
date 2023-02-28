import { verify } from 'jsonwebtoken';
import { JWT_SECRET, SERVER_ADDRESS } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	if (cookies.get('token')) {
		const decode = verify(cookies.get('token'), JWT_SECRET);
		if (!decode) {
			throw redirect(302, '/failed?message=Invalid token. Please login again.');
		} else {
			const token = cookies.get('token');
			const firstname = decode.firstname;
			const lastname = decode.lastname;
			const email = decode.email;

			let req = await fetch(`${SERVER_ADDRESS}/getTrackers/?token=${token}&email=${email}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});

			let data = await req.json();

			if (data.status != 400) {
				let totalTrackers = 0;
				let totalHits = 0;
				for (let i in data.trackers) {
					totalTrackers += 1;
					totalHits += data.trackers[i].frequency;
				}
				const trackers = data.trackers;
				return {
					props: { firstname, lastname, email, token, totalTrackers, totalHits, SERVER_ADDRESS },
					trackers
				};
			} else {
				throw redirect(302, `/failed?message=${data.msg}`);
			}
		}
	} else {
		throw redirect(302, '/failed?message=Please login to access this page.');
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const token = data.get('token');
		const tracker_name = data.get('tracker_name');

		let req = await fetch(`${SERVER_ADDRESS}/addTracker/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				token,
				tracker_name
			})
		});

		await req.json().then((data) => {
			if (data.status != 400) {
				throw redirect(302, `/success?message=${data.msg}`);
			} else {
				throw redirect(302, `/failed?message=${data.msg}`);
			}
		});

		throw redirect(302, '/failed?message=Adding Tracker Failed. Please try again.');
	}
};
