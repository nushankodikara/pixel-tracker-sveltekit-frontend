<script>
	export let title = 'Pixel Tracker';
	export let description = 'A simple pixel tracker for your website.';
	export let button = 'Start Tracking Today';
	export let buttonLink = '#';
</script>

<div class="w-full py-20 flex flex-col items-center gap-4">
	<h2 class="text-4xl font-mono font-bold">{title}</h2>
	<p class=" max-w-3xl text-center">{description}</p>
	<a
		class="py-2 px-4 bg-red-300 text-white hover:bg-red-200 hover:text-black font-mono"
		href={buttonLink}>{button}</a
	>
</div>
