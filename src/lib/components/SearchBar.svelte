<script>
	import { enhance } from '$app/forms';
</script>

<form action="/?/search" use:enhance method="POST" class="flex h-[40px] basis-[600px]">
	<input
		class="flex-1 outline-none border border-gray-200 focus:bg-gray-200 px-2 rounded-s-3xl"
		type="text"
		name="search"
		id="search"
		placeholder="Search..."
	/>
	<button
		class="flex items-center justify-center cursor-pointer w-16 bg-slate-50 border rounded-e-3xl"
		type="submit"
	>
		<img src="/icons/searchIcon.svg" alt="" />
	</button>
</form>
