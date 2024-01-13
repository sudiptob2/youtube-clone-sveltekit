<script lang="ts">
	import SearchBar from './SearchBar.svelte';
</script>

<header
	class="flex px-4 border items-center h-[64px] py-2 bg-white z-10 justify-between sticky top-0 left-0"
>
	<a class="md:hidden mr-5" href="/">
		<img src="/icons/ytLogo.svg" alt="" />
	</a>
	<div class="md:flex hidden gap-4 items-center">
		<img class="rounded-full hover:bg-gray-200 cursor-pointer" src="/icons/bugerIcon.svg" alt="" />
		<a href="/">
			<img class="h-8" src="/icons/ytLogo.svg" alt="" />
		</a>
	</div>
	<SearchBar />
	<div class="md:flex hidden gap-3 items-center">
		<img
			src="/icons/createIcon.svg"
			class="p3 rounded-full hover:bg-gray-200 cursor-pointer"
			alt=""
		/>
		<img src="/icons/notIcon.svg" class="p3 rounded-full hover:bg-gray-200 cursor-pointer" alt="" />
		<img src="/avatar.png" class="bg-gray-200 h-8 w-8 rounded-full" alt="" />
	</div>
</header>
