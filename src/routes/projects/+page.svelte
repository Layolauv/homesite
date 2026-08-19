<script lang="ts">
import content from './content';
import leftArrow from '$assets/images/leftArrow.svg';
import rightArrow from '$assets/images/rightArrow.svg';

</script>

<svelte:head>
	<title>What I've done...</title>
</svelte:head>

<section class="projects">
	<h2 class="projects__title">{content.title}</h2>
	<div class="projects__controls">
		<h3 class="projects__controls--subtitle">{content.subtitle}</h3>
		<div class="projects__controls--actions">
			<button class="projects__controls--actions-left">
				<img src={leftArrow} alt="left slider arrow"/>
			</button>
			<button class="projects__controls--actions-right">
				<img src={rightArrow} alt="right slider arrow"/>
			</button>
		</div>
	</div>

	<div class="projects__list">
		{#each content.projects as { title, url, img, tags }}
			<div class="projects__list-item">
				<img src={img} />
			</div>
			<a class="publications__list-item" href={url} target="_blank">
			</a>
		{/each}
	</div>
</section>

<style lang="scss">
  .projects {
    * {
      @apply font-jakarta;
    }
    @apply dark:bg-grey-900;

    //@apply dark:bg-dark-500;

    &__title {
      @apply text-[12px] md:text-small font-semibold text-grey-300 uppercase;
      @apply dark:text-light-400;
    }

    &__controls {
			@apply flex justify-between pb-5 border-b-1 border-b-grey-500;

			&--actions{
        @apply dark:bg-grey-700 p-2 my-auto h-[fit-content] flex justify-between border-1 border-grey-500 rounded-full;
				&-left, &-right {
					@apply border-1 border-grey-400 py-[15px] px-[16px] mx-[4%] rounded-full cursor-pointer;
          @apply dark:bg-grey-900;
        }
      }
      &--subtitle {
        @apply text-[20px] md:text-larger text-dark-200 uppercase font-semibold;
        @apply dark:text-white-500;
      }
    }


  }

</style>