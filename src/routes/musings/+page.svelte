<script lang="ts">
	import { getPosts, type Post } from './Post';
	import { onMount } from 'svelte';

	let posts: Post[] = $state([]);
	let latest: Post = $state();
	onMount(async () => {
		posts = await getPosts();
		if (posts.length) latest = posts.shift();
	});
</script>

<svelte:head>
	<title>What I think of :]</title>
</svelte:head>

<section class="hero">
	<h1 class="hero__title">Blog</h1>
</section>
{#if latest}
	<section class="latest">
		<img src={latest.img} alt="" class="latest__img">
		<div class="latest__content">
			<div class="latest__content-top">
				<h2 class="latest__title">{latest.title}</h2>
				<p class="latest__description">{latest.description}</p>
			</div>
			<ul class="latest__content-mid">
				<li>
					<h3 class="latest__subtitle">Category</h3>
					<p class="latest__sub-text">{latest.tags.join(', ')}</p>
				</li>
				<li>
					<h3 class="latest__subtitle">Publication Date</h3>
					<p class="latest__sub-text">{latest.date}</p>
				</li>
			</ul>
			<div class="latest__content-bottom">
				<a href={`/musings/${latest.slug}`} class="latest__cta">Read More</a>
			</div>
		</div>
	</section>
{/if}

<section class="posts">
	{#each posts as post}
		<div class="post__item">
			<img src={post.img} alt={post.title} class="post__img">
			<h3 class="post__title">{post.title}</h3>
			<p class="post__description">{post.description.substring(0, 100)}</p>
			<a href={`/musings/${post.slug}`} class="post__cta">Read More
				<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
								d="M4.5 4.91738e-07L15.75 0C15.9489 0 16.1397 0.0790176 16.2803 0.21967C16.421 0.360322 16.5 0.551088 16.5 0.75V12C16.5 12.4142 16.1642 12.75 15.75 12.75C15.3358 12.75 15 12.4142 15 12V2.56066L1.28033 16.2803C0.987437 16.5732 0.512563 16.5732 0.21967 16.2803C-0.0732233 15.9874 -0.0732233 15.5126 0.21967 15.2197L13.9393 1.5L4.5 1.5C4.08579 1.5 3.75 1.16421 3.75 0.75C3.75 0.335787 4.08579 4.91738e-07 4.5 4.91738e-07Z"
								fill="#C1CAD2" />
				</svg>
			</a>
		</div>
	{/each}
</section>

<style lang="scss">

  * {
    @apply font-jakarta;
  }

  section {
    @apply dark:bg-dark-500;
  }

  .hero {
    @apply py-[3%];
    &__title {
      @apply text-[20px] md:text-larger text-dark-200 uppercase font-semibold;
      @apply dark:text-light-550;
    }
  }

  .latest {
    @apply border-y-1 flex gap-[3vw];
    @apply dark:border-dark-250;
    &__img {
      @apply w-[35vw] rounded-lg;
    }

    &__content {
      @apply w-[45vw] flex flex-col justify-between;

      &-mid {
        @apply flex;
        li {
          @apply mr-[5vw] text-[18px];
        }
      }
    }

    &__title {
      @apply text-white-500 font-semibold text-[32px] mb-5;
    }

    &__subtitle {
      @apply text-white-700;
    }

    &__sub-text {
      @apply text-white-500 capitalize;
    }

    &__description {
      @apply text-[20px] text-light-400 font-normal;
    }

    &__cta {
      @apply block w-[fit-content] py-5 px-7 rounded-md border-solid ml-auto;
      @apply dark:text-white-400 dark:bg-blue-900;
    }
  }

  .post {
    &s {
      @apply grid grid-cols-3 gap-[3vw];
    }

    &__item {
      @apply flex flex-col;
    }

    &__img {
      @apply h-[30vh] rounded-lg;
    }

    &__title {
      @apply text-white-500 font-medium text-[20px] my-2 ;
    }

    &__description {
      @apply text-white-700 text-[18px] mb-5;
    }

    &__cta{
			@apply ml-auto mt-auto flex p-4 rounded-lg border-1;
			@apply dark:text-white-600 dark:bg-dark-450 dark:border-grey-500;

			svg {
				@apply block my-auto ml-[5px] h-[12px];
			}
    }

  }
</style>