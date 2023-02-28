<script>
	export let data;
	export let message = data.message || 'Operation Completed Successfully.';
</script>

<div class="w-full h-full px-4 py-20 flex flex-col items-center justify-center">
	<div
		class=" bg-red-300 p-8 font-mono flex flex-col gap-4 items-center text-center justify-center max-w-sm"
	>
		<lord-icon
			src="https://cdn.lordicon.com/tdrtiskw.json"
			trigger="loop"
			delay="2000"
			colors="primary:#121331,secondary:#e83a30"
			style="width:100px;height:100px"
		/>
		<h2 class="text-2xl font-bold">Something Went Wrong.</h2>
		<p>{message}</p>
	</div>
</div>
