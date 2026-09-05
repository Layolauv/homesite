<script lang="ts">

	import BackDraw from '$lib/components/BackDraw.svelte';
	import content from './content';
</script>

<svelte:head>
	<title>Hi! I'm Layolauv :)</title>
</svelte:head>

<section class="hero">
	<BackDraw />
	<div class="hero__wrapper">
		<div class="hero__tc">
			<p class="hero__tc-title">Hello, I'm <span class="pop">Layo.</span> <br /> A <span class="pop">software engineer</span>
				building
				<span class="pop">performant</span> systems for <span class="pop">global brands.</span>
			</p>
			<div class="hero__tc-ctas">
				{#each content.hero.ctas as cta}
					<a class="cta" href={cta.url}>{cta.title}</a>
				{/each}
			</div>
		</div>
		<div class="hero__action">
			<div class="hero__action-callout">
				<p class="hero__action-callout-text">{content.hero.callout.text}</p>
				<a class="hero__action-callout-email" href="mailto:iam@layolauv.com">{content.hero.callout.email}</a>
			</div>
			<p class="hero__action-callout-summary">{content.hero.callout.summary}</p>
			<div class="hero__action-ctas">
				{#each content.hero.ctas as cta}
					<a class="cta" href={cta.url}>{cta.title}</a>
				{/each}
			</div>
		</div>
	</div>
</section>
<section class="marquee">
	<div class="marquee__track">
		<ul class="marquee__list">
			{#each content.marquee as point}
				<li class="marquee__list-item">
					<img src="/assets/star.svg" alt="star icon" />
					<span>{point}</span>
				</li>
			{/each}
		</ul>
		<ul class="marquee__list" aria-hidden="true">
			{#each content.marquee as point}
				<li class="marquee__list-item">
					<img src="/assets/star.svg" alt="star icon" />
					<span>{point}</span>
				</li>
			{/each}
		</ul>
	</div>

</section>
<style lang="scss">
  * {
    @apply font-jakarta;
  }

  .hero {
    @apply h-[500px] md:h-[80vh] relative p-0;
    &__wrapper {
      @apply m-[5%] absolute top-[10%] md:top-[15%] px-[5%];
    }

    .cta {
      @apply border-1 py-2 px-4 mb-4 rounded-xl w-[max-content] text-[14px] md:text-[20px];
      @apply dark:text-foundation-blue-500;
    }

    &__tc {
      @apply flex flex-col md:flex-row;
      &-title {
        @apply text-[28px] md:text-[54px] font-normal max-md:text-center;
        @apply dark:text-white-800;
        .pop {
          @apply dark:text-white-400;
        }
      }

      &-ctas {
        @apply hidden md:flex flex-col ml-[10%];
      }
    }

    &__action {
      @apply flex flex-col md:flex-row mt-10 justify-between;
      * {
        @apply text-white-400 text-[14px] md:text-[20px];
      }

      &-ctas {
				@apply flex md:hidden mt-10 justify-between;
      }

      &-callout {
        @apply max-md:hidden;
        &-text {
          @apply font-medium text-[24px];
        }

        &-summary {
          @apply max-md:text-center md:w-[50%];
        }

        &-email {
          &:hover {
            @apply cursor-pointer;
            @apply dark:text-white-700;
          }
        }
      }
    }
  }

  .marquee {
    @apply px-0 py-4 md:py-10 w-[100vw] border-y-4 border-grey-600 overflow-hidden relative flex;
    &__track {
      @apply flex w-[max-content];
      animation: scroll-left 15s linear infinite;
    }

    &__list {
      @apply flex w-full justify-evenly ;
      &-item {
        @apply text-foundation-blue-500 uppercase text-[12px] md:text-[18px] mx-2 flex w-[max-content];
        span {
          @apply my-auto mx-2;
        }

        img {
          width: 8%;
          height: auto;
        }
      }
    }
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee__track {
      animation: none;
    }
  }
</style>