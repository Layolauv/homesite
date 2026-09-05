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

<section class="hero">
	<a class="hero__link" href="/musings">&lt; Back to Musings</a>
</section>

<section class="musing">
	<svelte:component this={post.content} />
</section>
<style lang="scss">

	.hero {
		@apply dark:bg-dark-450 max-md:py-[10%];
		&__link {
			@apply text-[18px] md:text-[24px] text-light-400 font-jakarta underline font-normal;
		}
	}
</style>