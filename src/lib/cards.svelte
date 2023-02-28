<script>
	export let title = 'Pixel Tracker';
	export let description = 'A simple pixel tracker for your website.';
	export let card1title = 'Track Every Email Sent';
	export let card1description =
		'Get real-time notifications and detailed analytics for every email you send. Ensure maximum engagement and improve your email marketing strategy with our email tracking tool.';
	export let card1icon = 'https://cdn.lordicon.com/tkgyrmwc.json';
	export let card2title = 'Track Your Web Pages';
	export let card2description =
		'Understand how your visitors interact with your web pages. Our web page tracking technology provides valuable insights to help you optimize for better conversion rates and user experience.';
	export let card2icon = 'https://cdn.lordicon.com/wrprwmwt.json';
</script>

<div class="flex w-full p-8 flex-col items-center gap-8 font-light font-sans">
	<h2 class="text-mono text-3xl">{title}</h2>
	<p>{description}</p>
	<div class="flex flex-col gap-8 md:flex-row justify-between items-stretch">
		<div class="py-8 px-8 bg-blue-100 flex flex-col items-center max-w-xs gap-2 text-center">
			<lord-icon
				src={card1icon}
				trigger="loop"
				delay="2000"
				colors="primary:#000,secondary:#000"
				style="width:100px;height:100px"
			/>
			<h2 class="text-mono text-2xl">{card1title}</h2>
			<p>{card1description}</p>
		</div>
		<div class="py-8 px-8 bg-yellow-100 flex flex-col items-center max-w-xs gap-2 text-center">
			<lord-icon
				src={card2icon}
				trigger="loop"
				state="loop"
				colors="primary:#000,secondary:#000"
				style="width:100px;height:100px"
			/>
			<h2 class="text-mono text-2xl">{card2title}</h2>
			<p>{card2description}</p>
		</div>
	</div>
</div>
