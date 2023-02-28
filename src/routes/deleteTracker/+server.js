import { redirect } from '@sveltejs/kit';
import { SERVER_ADDRESS } from '$env/static/private';

export async function POST({ request }) {
	const rawdata = await request.formData();
	const email = rawdata.get('email');
	const token = rawdata.get('token');
	const tracker_id = rawdata.get('tracker_id');

	console.log(email, token, tracker_id);

	let req = await fetch(`${SERVER_ADDRESS}/deleteTracker/`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			token,
			tracker_id
		})
	});

	let data = await req.json();

	if (data.status != 400) {
		throw redirect(302, `/success?message=${data.msg}`);
	} else {
		throw redirect(302, `/failed?message=${data.msg}`);
	}
}
