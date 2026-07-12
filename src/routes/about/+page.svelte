<script lang="ts">
	import content from './content';
	import expand from '$assets/images/expand.svg';

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

<section class="experience">
	<h2 class="experience__title">Experience </h2>
	<div class="experience__list">
		{#each content.experience as { role, duration, company, location, points }}
			<div class="experience__list-item">
				<div class="experience__list-item-title">
					<div class="experience__list-item-title-text">
						<h3>{role}</h3>
						<p>{company} ({location}) - {duration}</p>
					</div>
					<img class="experience__list-item-title-icon" src={expand} alt="expand-" />
				</div>
				<ul class="experience__list-item-points">
					{#each points as point}
						<li class="experience__list-item-point">{point}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<section class="publications">
	<h2 class="publications__title">Publications</h2>
	<div class="publications__list">
		{#each content.publications as { title, url, date, publication, }}
			<a class="publications__list-item" href={url} target="_blank">
				<div class="publications__list-item-title">
					<div class="publications__list-item-title-text">
						<h3>{title}</h3>
						<p>{publication} - {date}</p>
					</div>
					<img class="publications__list-item-title-icon" src={expand} alt="expand-" />
				</div>
			</a>
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

    &__subtitle, &__excerpt {
      @apply text-[12px] md:text-small font-semibold text-grey-300 uppercase;
      @apply dark:text-light-400;
    }

    &__title {
      @apply text-[20px] md:text-larger text-dark-200 uppercase font-semibold;
      @apply dark:text-light-550;
    }

    &__excerpt {
      @apply normal-case font-normal;
    }

    &__card {
      @apply border-solid border-1 border-white-400 bg-white-400 rounded-lg p-3 md:p-8 mr-4 mt-8 shadow-[inset_-2px_-2px_5px_0px] dark:shadow-shadow-200;
      @apply dark:border-dark-350 dark:bg-dark-450 dark:shadow-[inset_-2px_-2px_5px_0px] dark:shadow-shadow-300;

      &-value {
        @apply text-dark-200 text-[24px] md:text-large font-semibold;
        @apply dark:text-white-400;
      }

      &-title {
        @apply text-dark-200 text-[12px] md:text-xsmall font-normal;
        @apply dark:text-light-400;
      }
    }

    &__cards {
      @apply flex flex-wrap;
    }


  }

  .experience, .publications {
    @apply flex justify-between flex-col md:flex-row;
    &__title {
      @apply text-[16px] md:text-large text-dark-200 font-semibold tracking-wide w-[30%];
      @apply dark:text-white-500 ;
    }

    &__list {
      @apply flex flex-col max-md:mt-4 md:w-[50%] md:mr-[5%];

      &-item {
        @apply border-solid border-0 md:border-t-2;
        @apply dark:border-dark-250;

        &:hover {
          > .experience__list-item-points {
            @apply flex;
            animation: expand 1s ease-in forwards;
          }
        }

        &:first-child {
          @apply max-md:border-t-1;
        }

        &:last-child {
          @apply border-b-1 md:border-b-2;
        }

        &-title {
          @apply flex justify-between cursor-pointer;

          &-text {
            @apply py-4 px-0;
            p {
              @apply text-[12px] md:text-sm uppercase;
              @apply dark:text-white-700;
            }

            h3 {
              @apply font-bold text-[16px] md:text-[22px];
              @apply dark:text-white-500;
            }

          }

          &-icon {

          }
        }

        &-points {
          @apply hidden flex flex-col ml-3;
        }

        &-point {
          &::marker {
            content: url('$assets/images/marker.svg');
          }

          @apply my-2 text-base font-normal list-item;
          @apply dark:text-white-500;
        }
      }
    }
  }

  .publications {
    @apply dark:bg-grey-700 w-[97%] mx-auto rounded-[40px];

    &__list-item{
			@apply max-md:border-t-1;
      &:first-child {
        @apply max-md:border-t-1;
      }

      &:last-child {
        @apply max-md:border-b-1;
      }
			&-title {
        h3 {
          @apply font-medium;
        }
      }
		}
  }
</style>