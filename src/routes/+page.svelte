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
					<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_325_31)">
							<mask id="mask0_325_31" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
								<path d="M40 0H0V40H40V0Z" fill="white"/>
							</mask>
							<g mask="url(#mask0_325_31)">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M37.7882 20C38.5538 20 39.2954 19.8972 40 19.7047C39.4398 19.5865 38.859 19.5244 38.2638 19.5244H28.371C26.737 19.5244 25.2122 19.0562 23.9238 18.2467C24.2054 16.5979 24.9826 15.0173 26.2554 13.7446L32.5782 7.42188C33.1196 6.88048 33.5712 6.28338 33.9334 5.64904C33.4536 5.96158 32.999 6.32832 32.5782 6.74926L25.5828 13.7446C24.4274 14.9 23.0182 15.647 21.5348 15.9857C20.568 14.6207 20 12.9534 20 11.1535V2.21186C20 1.44621 19.8972 0.70458 19.7047 0C19.5865 0.560142 19.5244 1.14093 19.5244 1.73624V11.6291C19.5244 13.2631 19.0562 14.7878 18.2467 16.0762C16.5979 15.7945 15.0173 15.0173 13.7446 13.7446L7.42188 7.42188C6.88048 6.88048 6.28338 6.42874 5.64904 6.06668C5.96158 6.5463 6.32832 7.00094 6.74926 7.42188L13.7446 14.4172C14.9 15.5726 15.647 16.9818 15.9857 18.4653C14.6207 19.4319 12.9534 20 11.1535 20H2.21186C1.44621 20 0.704578 20.1028 0 20.2954C0.560146 20.4134 1.14094 20.4756 1.73624 20.4756H11.6291C13.2631 20.4756 14.7878 20.9438 16.0762 21.7534C15.7945 23.402 15.0173 24.9826 13.7446 26.2554L7.42188 32.5782C6.8805 33.1196 6.42876 33.7166 6.0667 34.351C6.54632 34.0384 7.00094 33.6716 7.42188 33.2508L14.4172 26.2554C15.5726 25.1 16.9818 24.353 18.4653 24.0142C19.4319 25.3794 20 27.0466 20 28.8466V37.7882C20 38.5538 20.1028 39.2954 20.2954 40C20.4134 39.4398 20.4756 38.859 20.4756 38.2638V28.3708C20.4756 26.7368 20.9438 25.2122 21.7534 23.9238C23.402 24.2054 24.9826 24.9826 26.2554 26.2554L32.5782 32.5782C33.1196 33.1196 33.7166 33.5712 34.351 33.9334C34.0384 33.4536 33.6716 32.999 33.2508 32.5782L26.2554 25.5828C25.1 24.4274 24.353 23.0182 24.0144 21.5348C25.3794 20.568 27.0466 20 28.8466 20H37.7882Z" fill="#C1CAD2"/>
							</g>
						</g>
						<defs>
							<clipPath id="clip0_325_31">
								<rect width="40" height="40" fill="white"/>
							</clipPath>
						</defs>
					</svg>
					<span>{point}</span>
				</li>
			{/each}
		</ul>
		<ul class="marquee__list" aria-hidden="true">
			{#each content.marquee as point}
				<li class="marquee__list-item">
					<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_325_31)">
							<mask id="mask0_325_31" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
								<path d="M40 0H0V40H40V0Z" fill="white"/>
							</mask>
							<g mask="url(#mask0_325_31)">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M37.7882 20C38.5538 20 39.2954 19.8972 40 19.7047C39.4398 19.5865 38.859 19.5244 38.2638 19.5244H28.371C26.737 19.5244 25.2122 19.0562 23.9238 18.2467C24.2054 16.5979 24.9826 15.0173 26.2554 13.7446L32.5782 7.42188C33.1196 6.88048 33.5712 6.28338 33.9334 5.64904C33.4536 5.96158 32.999 6.32832 32.5782 6.74926L25.5828 13.7446C24.4274 14.9 23.0182 15.647 21.5348 15.9857C20.568 14.6207 20 12.9534 20 11.1535V2.21186C20 1.44621 19.8972 0.70458 19.7047 0C19.5865 0.560142 19.5244 1.14093 19.5244 1.73624V11.6291C19.5244 13.2631 19.0562 14.7878 18.2467 16.0762C16.5979 15.7945 15.0173 15.0173 13.7446 13.7446L7.42188 7.42188C6.88048 6.88048 6.28338 6.42874 5.64904 6.06668C5.96158 6.5463 6.32832 7.00094 6.74926 7.42188L13.7446 14.4172C14.9 15.5726 15.647 16.9818 15.9857 18.4653C14.6207 19.4319 12.9534 20 11.1535 20H2.21186C1.44621 20 0.704578 20.1028 0 20.2954C0.560146 20.4134 1.14094 20.4756 1.73624 20.4756H11.6291C13.2631 20.4756 14.7878 20.9438 16.0762 21.7534C15.7945 23.402 15.0173 24.9826 13.7446 26.2554L7.42188 32.5782C6.8805 33.1196 6.42876 33.7166 6.0667 34.351C6.54632 34.0384 7.00094 33.6716 7.42188 33.2508L14.4172 26.2554C15.5726 25.1 16.9818 24.353 18.4653 24.0142C19.4319 25.3794 20 27.0466 20 28.8466V37.7882C20 38.5538 20.1028 39.2954 20.2954 40C20.4134 39.4398 20.4756 38.859 20.4756 38.2638V28.3708C20.4756 26.7368 20.9438 25.2122 21.7534 23.9238C23.402 24.2054 24.9826 24.9826 26.2554 26.2554L32.5782 32.5782C33.1196 33.1196 33.7166 33.5712 34.351 33.9334C34.0384 33.4536 33.6716 32.999 33.2508 32.5782L26.2554 25.5828C25.1 24.4274 24.353 23.0182 24.0144 21.5348C25.3794 20.568 27.0466 20 28.8466 20H37.7882Z" fill="#C1CAD2"/>
							</g>
						</g>
						<defs>
							<clipPath id="clip0_325_31">
								<rect width="40" height="40" fill="white"/>
							</clipPath>
						</defs>
					</svg>
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
			@apply text-foundation-blue-600;
    }

    &__tc {
      @apply flex flex-col md:flex-row;
      &-title {
        @apply text-[28px] md:text-[54px] font-normal max-md:text-center;
				@apply text-grey-300;
        @apply dark:text-white-800;
        .pop {
					@apply text-grey-700;
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
        @apply text-[14px] md:text-[20px];
				@apply text-grey-400;
				@apply dark:text-white-400;
      }

      &-ctas {
				@apply flex md:hidden mt-10 justify-between;
      }

      &-callout {
        @apply max-md:hidden;
        &-text {
          @apply font-medium text-[24px] text-grey-600;
					@apply dark:text-white-600;
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
    @apply px-0 py-4 md:py-10 w-[100vw] border-y-1  overflow-hidden relative flex;
		@apply bg-white-600 border-grey-400;
		@apply dark:bg-grey-900 dark:border-grey-600;
    &__track {
      @apply flex w-[max-content];
      animation: scroll-left 15s linear infinite;
    }

    &__list {
      @apply flex w-full justify-evenly ;
      &-item {
        @apply text-foundation-blue-600 uppercase text-[12px] md:text-[18px] mx-2 flex w-[max-content];
        span {
          @apply my-auto mx-2;
        }

        svg {
					@apply w-[8%] h-[auto];
					* {
            @apply fill-grey-500;
            @apply dark:fill-blue-200;
					}

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