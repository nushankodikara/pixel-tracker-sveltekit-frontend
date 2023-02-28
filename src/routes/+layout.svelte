<script>
	import '../app.postcss';
	import '../app.scss';

	export let data;
</script>

<nav
	class="w-full py-4 px-8 flex flex-col gap-4 md:flex-row justify-between font-mono items-center"
>
	<a href="/" class="text-3xl font-bold flex flex-row items-center justify-center gap-2"
		><lord-icon
			src="https://cdn.lordicon.com/kfyekbgm.json"
			trigger="loop"
			state="loop"
			colors="primary:#121331,secondary:#9ce5f4"
			style="width:50px;height:50px"
		/> Pixel Tracker.</a
	>
	<ul class="flex flex-row gap-8 font-light hidden md:visible">
		<li><a class="hover:text-gray-500" href="/about">About Project</a></li>
		<li><a class="hover:text-gray-500" href="#">Github</a></li>
	</ul>
	{#if data.props.firstname == ''}
		<div class="flex flex-row gap-4 items-center">
			<a class="py-2 px-4 bg-red-300 text-white hover:bg-red-200 hover:text-black" href="/register"
				>Register</a
			>
			<a class="py-2 px-4 bg-green-300 text-white hover:bg-green-200 hover:text-black" href="/login"
				>Login</a
			>
		</div>
	{:else}
		<div class="flex flex-row gap-4 items-center">
			<a
				class="py-2 px-4 bg-green-300 text-white hover:bg-green-200 hover:text-black"
				href="/dashboard">Dashboard</a
			>
			<form action="/logout" method="post">
				<button
					type="submit"
					class="py-2 px-4 bg-red-300 text-white hover:bg-red-200 hover:text-black">Logout</button
				>
			</form>
		</div>
	{/if}
</nav>
<slot />

<footer class="pt-32 pb-16 text-center font-mono font-light">
	<p class="text-gray-500">
		Made with ❤️ by <a href="https://nushankodikara.com" class="hover:text-gray-400"
			>Nushan Kodikara</a
		>
	</p>
</footer>
