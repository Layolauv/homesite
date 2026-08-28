<script lang="ts">
	import { getPosts } from './Post';
	import { onMount } from 'svelte';

	let posts = $state([]);

	onMount(async () => {
		posts = await getPosts();
	});
</script>

<svelte:head>
	<title>What I think of :]</title>
</svelte:head>


<section>
	<ul>
		{#each posts as post}
			<a class="text-white" href="/musings/{post.slug}">
				{post.title}
			</a>
			<br />

		{/each}
	</ul>
</section>
<style lang="scss">

</style>