<script lang="ts">
	import './page.scss'
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { getPostBySlug } from '../Post';
	import { error } from '@sveltejs/kit';

	let post = $state({});
	onMount(async () => {
		post = await getPostBySlug(page.params.slug);
		if (!post) {
			error(404, 'Page Nonexistent');
		}
	});
</script>

<svelte:head>
	<title>{post?.title}</title>
</svelte:head>


<section class="musing__page">
	<svelte:component this={post.content} />
</section>
<style lang="scss">

</style>