<script lang="ts">
	const nav = [
		{
			title: 'Home',
			icon: '/icons/homeIcon.svg',
			href: '#'
		},
		{
			title: 'shorts',
			icon: '/icons/shortsIcon.svg',
			href: '#'
		},
		{
			title: 'library',
			icon: '/icons/libraryIcon.svg',
			href: '#'
		},
		{
			title: 'subscriptions',
			icon: '/icons/subIcon.svg',
			href: '#'
		}
	];
</script>

<div class="bg-white py-2 hidden md:flex flex-col px-2 fixed top-[60px]">
	{#each nav as { title, icon, href }}
		<a
			class="flex items-center justify-center flex-col gap-1 py-4 hover:bg-gray-100 rounded-lg"
			{href}
		>
			<img src={icon} alt="" />
			<p>{title}</p>
		</a>
	{/each}
</div>
