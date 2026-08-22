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
			<p class="hero__tc-title">Hello, I'm <span class="pop">Emmanuel.</span> <br /> <span class="pop">A full-stack engineer</span>
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
			<div class="hero__action-callout-summary">{content.hero.callout.summary}</div>
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
    @apply h-[80vh] relative p-0;
    &__wrapper {
      @apply m-[5%] absolute top-[15%] px-[5%];
    }

    &__tc {
      @apply flex;
      &-title {
        @apply text-[54px] font-normal;
        @apply dark:text-white-800;
        .pop {
          @apply dark:text-white-400;
        }
      }

      &-ctas {
        @apply flex flex-col ml-[10%];
        .cta {
          @apply border-1 py-2 px-4 mb-4 rounded-xl w-[max-content] text-[20px];
          @apply dark:text-foundation-blue-500;
        }
      }
    }

    &__action {
      @apply flex mt-10 justify-between;
      * {
        @apply text-white-400 text-[20px];
      }

      &-callout {
        &-text {
          @apply font-medium text-[24px];
        }

        &-summary {
          @apply w-[50%];
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
    @apply px-0 py-10 w-[100vw] border-y-4 border-grey-600 overflow-hidden relative flex;
    &__track {
      @apply flex w-[max-content];
      animation: scroll-left 15s linear infinite;
    }

    &__list {
      @apply flex w-full justify-evenly ;
      &-item {
        @apply text-foundation-blue-500 uppercase text-[18px] mx-2 flex w-[max-content];
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