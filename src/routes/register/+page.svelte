<div class="w-full h-full px-4 py-20 flex flex-col items-center justify-center">
	<div
		class=" bg-blue-100 p-8 font-mono flex flex-col gap-4 items-center text-center justify-center"
	>
		<lord-icon
			src="https://cdn.lordicon.com/jqnthkou.json"
			trigger="loop"
			state="loop"
			colors="primary:#121331,secondary:#9ce5f4"
			style="width:100px;height:100px"
		/>
		<h2 class="text-2xl font-bold">Register</h2>
		<p>Enter your details below.</p>
		<form method="post" action="" class="flex flex-col gap-4">
			<input class="py-2 px-4 " type="text" name="first_name" placeholder="first name" required />
			<input class="py-2 px-4 " type="text" name="last_name" placeholder="last name" required />
			<input class="py-2 px-4 " type="email" name="email" placeholder="user@example.com" required />
			<input class="py-2 px-4 " type="password" name="password" placeholder="password" required />
			<input
				class="py-2 px-4 bg-blue-200 text-white hover:bg-blue-100 hover:text-black"
				type="submit"
				value="Register"
			/>
		</form>
	</div>
</div>
