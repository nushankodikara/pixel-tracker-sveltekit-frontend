export async function load({ url }) {
	let message = url.searchParams.get('message');
	return { message };
}
