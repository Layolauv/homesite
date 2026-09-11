<script lang="ts">
	import './page.scss';
	import { base } from '$app/paths';

	let { data } = $props();
	let post = data.post;
</script>

<svelte:head>
	<title>{post?.title}</title>
</svelte:head>

<section class="hero">
	<a class="hero__link" href="{base}/musings">&lt; Back to Musings</a>
</section>

<h1 class="musing__title">{post?.title}</h1>

<section class="musing">
	<svelte:component this={post.content} />
</section>
<style lang="scss">

  * {
    @apply font-jakarta;
  }

  .hero {
    @apply dark:bg-dark-500 py-[10%] md:py-[2%];
    &__link {
      @apply text-[18px] md:text-[20px] text-light-400 font-jakarta underline font-normal;
    }
  }

  .musing {
    @apply pt-5;
    &__title {
      @apply text-[1.5rem] px-[5%] py-[3%] md:text-[3.425rem] border-y-1;
      @apply dark:bg-dark-500 dark:text-white-500 dark:border-dark-250;
    }
  }
</style>