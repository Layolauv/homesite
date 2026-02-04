<script lang="ts">
	import content from './content';
</script>

<svelte:head>
	<title>About Me!</title>
</svelte:head>

<section class="hero">
	<p class="hero__subtitle">{content.hero.subtitle}</p>
</section>

<style lang="scss">
  .hero {
    &__subtitle {
			@apply text-dark-200;
      @apply dark:text-light-400;
    }
  }
</style>