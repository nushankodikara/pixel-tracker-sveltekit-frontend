<script>
	/** @type {import('./$types').PageData} */
	export let data;
	// console.log(data);
</script>

<div class="flex flex-col gap-8 items-center">
	<div class="flex flex-col gap-16 items-center w-full md:flex-row p-16 md:py-32 font-mono">
		<div class="w-full md:w-1/2 text-center flex flex-col gap-4">
			<h2 class="text-xl md:text-3xl font-bold">Active Trackers</h2>
			<p class="text-5xl">{data.props.totalTrackers}</p>
		</div>
		<div class="w-full md:w-1/2 text-center flex flex-col gap-4">
			<h2 class="text-xl md:text-3xl font-bold">Total Hits</h2>
			<p class="text-5xl">{data.props.totalHits}</p>
		</div>
	</div>

	<form
		method="post"
		class="flex flex-col md:flex-row w-full gap-8 md:gap-4 bg-green-200 p-16 shadow-md hover:shadow-lg justify-center items-center"
	>
		<h2 class="text-5xl max-w-sm text-white text-center md:text-left">Create a New Tracker</h2>
		<input
			class="py-2 px-4 w-72 h-12  text-black rounded-lg"
			type="text"
			name="tracker_name"
			placeholder="Enter Tracker Name"
			autocomplete="off"
		/>
		<input type="hidden" name="token" value={data.props.token} />
		<input type="hidden" name="email" value={data.props.email} />
		<input
			class="py-2 px-4 w-44 h-12 bg-blue-300 text-white hover:bg-blue-200 hover:text-black rounded-lg"
			type="submit"
			value="Create Tracker"
		/>
	</form>

	<div class="p-8 mt-8 border-1 rounded-lg shadow-md hover:shadow-lg font-mono font-light">
		<table class="table-fixed max-w-4xl text-left w-full">
			<thead>
				<tr class="text-2xl">
					<th class="p-4">Tracker Name</th>
					<th class="p-4">Tracker ID</th>
					<th class="p-4 text-center">Hits</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each data.trackers as tracker}
					<tr>
						<td class="px-4 py-2">{tracker.name}</td>
						<td class="px-4 py-2 text-blue-400 hover:text-blue-300"
							><a href={data.props.SERVER_ADDRESS + '/track?id=' + tracker.id}>{tracker.id}</a></td
						>
						<td class="px-4 py-2 text-center">{tracker.frequency}</td>
						<td>
							<form method="post" action="/deleteTracker">
								<input type="hidden" name="token" value={data.props.token} />
								<input type="hidden" name="email" value={data.props.email} />
								<input type="hidden" name="tracker_id" value={tracker.id} />
								<input
									class="py-2 px-4 w-44 h-12 bg-red-300 text-white hover:bg-red-200 hover:text-black rounded-lg"
									type="submit"
									value="Delete Tracker"
								/>
							</form></td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
