<script lang="ts">
	import content from './content';
	import leftArrow from '$assets/images/leftArrow.svg';
	import rightArrow from '$assets/images/rightArrow.svg';
	import arrowUp from '$assets/images/arrowUp.svg';

	function slideOnX(step) {
		const element = document.querySelector('.projects__list');
		if (!(element instanceof HTMLElement) || !element.offsetParent) return;

		const currentLeft = element.offsetLeft;

		if (step > 0) {
			element.style.left = `${Math.min(currentLeft + step, 0)}px`;
			return;
		}

		const right = element.offsetParent.clientWidth - (currentLeft + element.offsetWidth);

		if (right >=0) {
			element.style.right = '0px';
			return;
		}

		element.style.left = `${currentLeft + step}px`;
	}

	const right = () => slideOnX(150);
	const left = () => slideOnX(-150);
</script>

<svelte:head>
	<title>What I've done...</title>
</svelte:head>

<section class="projects">
	<h2 class="projects__title">{content.title}</h2>
	<div class="projects__controls">
		<h3 class="projects__controls--subtitle">{content.subtitle}</h3>
		<div class="projects__controls--actions">
			<button class="projects__controls--actions-left" onclick={left}>
				<img src={leftArrow} alt="left slider arrow" />
			</button>
			<button class="projects__controls--actions-right" onclick={right}>
				<img src={rightArrow} alt="right slider arrow" />
			</button>
		</div>
	</div>

	<div class="projects__list">
		{#each content.projects as { title, url, img, tags }}
			<div class="projects__list-item">
				<img src={img} alt={title} class="projects__list-item-bg" />
				<div class="projects__list-item-content">
					<div class="projects__list-item-content-header">
						<a class="projects__list-item-link" href={url} target="_blank">
							View Project
							<img src={arrowUp} alt="open link" />
						</a>
					</div>

					<p class="projects__list-item-title">{title}</p>
					<ul class="projects__list-item-tags">
						{#each tags as tag}
							<li>{tag}</li>
						{/each}
					</ul>
				</div>

			</div>
		{/each}
	</div>
</section>

<style lang="scss">
  .projects {
    @apply overflow-hidden mb-15;
    * {
      @apply font-jakarta;
    }

    @apply dark:bg-grey-900;


    &__title {
      @apply text-[12px] md:text-small font-semibold text-grey-300 uppercase;
      @apply dark:text-light-400;
    }

    &__controls {
      @apply flex justify-between pb-5 border-b-1 border-b-grey-500;

      &--actions {
        @apply dark:bg-grey-700 p-1 my-auto h-[fit-content] flex justify-between border-1 border-grey-500 rounded-full;
        &-left, &-right {
          @apply border-1 border-grey-450 py-[15px] px-[16px] mx-[4%] rounded-full cursor-pointer;
          @apply dark:bg-grey-900;

          img {
            @apply min-w-[3px];
          }
        }
      }

      &--subtitle {
        @apply text-[20px] md:text-larger text-dark-200 uppercase font-semibold;
        @apply dark:text-white-500;
      }
    }

    &__list {
      @apply flex mt-10 relative w-[fit-content];
      transition: left 0.3s ease;

      &-item {
        @apply min-w-[80vw] md:min-w-[45vw] lg:min-w-[25vw] h-[40vh] overflow-hidden relative rounded-3xl mx-3;
        &-bg {
          @apply absolute w-full h-full object-cover;
        }

        &-content {
          @apply py-[8%] relative w-[inherit] h-[inherit] flex justify-between flex-col;
          @apply dark:bg-light-600/50 backdrop-blur-sm;
          &-header {
            @apply text-right m-4 leading-[105%];
          }
        }

        &-link {
          @apply pb-1 border-b-1 uppercase;
          img {
            @apply inline ml-2;
          }
        }

        &-title {
          @apply text-center font-medium text-[32px];
        }

        &-tags {
          @apply flex mx-3;
          li {
            @apply border-1 px-2 py-1 rounded-3xl mx-1 text-[12px];

          }
        }
      }

    }

  }

</style>