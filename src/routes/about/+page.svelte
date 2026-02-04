<script lang="ts">
	import content from './content';
</script>

<svelte:head>
	<title>About Me!</title>
</svelte:head>

<section class="hero">
	<p class="hero__subtitle">{content.hero.subtitle}</p>
	<h1 class="hero__title">{content.hero.title}</h1>
	<p class="hero__excerpt">{content.hero.excerpt}</p>
	<div class="hero__cards">
		{#each content.hero.cards as { value, title }}
			<div class="hero__card">
				<p class="hero__card-value">{value}</p>
				<p class="hero__card-title">{title}</p>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
  .hero {
		@apply bg-light-600;
		@apply dark:bg-dark-500;

    * {
      @apply font-jakarta;
    }

    &__card {
      @apply border-solid border-1 border-white-400 bg-white-400 rounded-lg p-8 mr-4 mt-8 shadow-[inset_-2px_-2px_5px_0px_shadow-200];
			@apply dark:border-dark-350 dark:bg-dark-450 dark:shadow-[inset_-2px_-2px_5px_0px_shadow-300];

      &-value {
        @apply text-dark-200 text-large font-semibold;
        @apply dark:text-white-400;
      }

			&-title {
        @apply text-dark-200 text-xsmall font-normal;
        @apply dark:text-light-400;
      }
    }

    &__cards {
      @apply flex;
    }

    &__subtitle, &__excerpt {
      @apply text-small font-semibold text-grey-300 uppercase;
      @apply dark:text-light-400;
    }

    &__title {
      @apply text-larger text-dark-200 uppercase font-semibold;
      @apply dark:text-light-550;
    }

    &__excerpt {
      @apply normal-case font-normal text-small;
    }
  }
</style>