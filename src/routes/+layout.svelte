<script lang="ts">
	import './layout.scss';
	import favicon from '$assets/images/favico.ico';
	import dropdown from '$assets/images/dropdown.svg';
	import dropdownLight from '$assets/images/dropdownLight.svg';
	import sunlight from '$assets/images/sunlight.svg';
	import sunlightLight from '$assets/images/sunlightLight.svg';
	import logoPry from '$assets/images/logoPry.png';
	import logoMobilePry from '$assets/images/logoMobilePry.png';
	import letsTalk from '$assets/images/lets-talk.png';
	import letsTalkLight from '$assets/images/lets-talkLight.png';
	import { afterNavigate, goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { theme } from '$lib/theme.svelte';

	let { children } = $props();
	let pathName = $state('');
	let expanded = $state(false);

	const isActiveUrl = (url: string) => pathName === url;
	const toggleExpansion = () => expanded = !expanded;

	afterNavigate(() => {
		pathName = window.location.pathname;
		theme.init();
		expanded = false;
	});

	const currentYear = (new Date()).getFullYear();
	let links = {
		'home': `${base}/`,
		'About Me': `${base}/about`,
		'Projects': `${base}/projects`,
		'Musings': `${base}/musings`
	};
	let mobileLinks = {
		'About Me': `${base}/about`,
		'Projects': `${base}/projects`,
		'Musings': `${base}/musings`,
		'Contact Me': `${base}/contact`
	};

	let contactUrl = `${base}/contact`;

	let footerLinks = {
		'Email': 'mailto:iam@layolauv.me',
		'LinkedIn': 'https://www.linkedin.com/in/layo-folaranmi/',
		'Github': 'https://github.com/Layolauv'
	};

	let content = {
		footerTextA: 'Let\'s build something',
		footerTextB: 'impactful together.',
		rightsReserved: `${currentYear} © All Rights Reserved`
	};

</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={favicon} />
</svelte:head>

<section class="navigation__wrapper">
	<div class="navigation__block navigation__block--desktop">
		<img src={logoPry} alt="site logo" class="navigation__logo" onclick={() => goto(`${base}/`)} />
		<nav class="navigation__links">
			{#each Object.entries(links) as [ title, url ]}
				<a href={url} class="navigation__link" class:active={isActiveUrl(url)}>{title}</a>
			{/each}
		</nav>
		<a class="navigation__link navigation__link--contact btn" href="{base}/contact">Contact Me</a>
		<button class="navigation__mode" aria-label="mode" onclick={() => theme.toggle()}>
			<img src={sunlight} alt="toggle light or dark mode" class="hidden! dark:block!" />
			<img src={sunlightLight} alt="toggle light or dark mode" class="block! dark:hidden!" />
		</button>
	</div>

	<div class="navigation__block navigation__block--mobile">
		<div class="navigation__block-bar">
			<img src={logoMobilePry} alt="site logo" class="navigation__logo" onclick={() => goto(`${base}/`)} />

			<button class="navigation__action navigation__action--dropdown" onclick={toggleExpansion}>
				<img src={dropdown} alt="show mobile dropdown" class="hidden! dark:block!" />
				<img src={dropdownLight} alt="show mobile dropdown" class="block! dark:hidden!" />
			</button>
			<button class="navigation__action navigation__action--mode" onclick={() => theme.toggle()}>
				<img src={sunlight} alt="toggle light or dark mode" class="hidden! dark:block!" />
				<img src={sunlightLight} alt="toggle light or dark mode" class="block! dark:hidden!" />
			</button>
		</div>

		<nav class="navigation__links" class:show={expanded}>
			{#each Object.entries(mobileLinks) as [ title, url ]}
				<a href={url} class="navigation__link" class:active={isActiveUrl(url)}>{title}</a>
			{/each}
		</nav>
	</div>

</section>

<section class="page">
	{@render children()}
</section>

<section class="footer__wrapper">
	<p class="footer__text">{content.footerTextA} <br /> {content.footerTextB}</p>
	<a class="footer__cta" href={contactUrl}>
		<img src={letsTalk} alt="call to action" class="hidden! dark:block!">
		<img src={letsTalkLight} alt="call to action" class="block! dark:hidden!">
	</a>
	<div class="footer__block">
		<p class="footer__rights">{content.rightsReserved} </p>
		<div class="footer__links">
			{#each Object.entries(footerLinks) as [ title, url ]}
				<a href={url} class="footer__link" class:active={isActiveUrl(url)}>{title}</a>
			{/each}
		</div>

	</div>
</section>


<style lang="scss">
  /* svelte-ignore css_unused_selector */

  .btn {

  }

  * {
    @apply font-worksans;
  }

  section {
    @apply bg-white-550;
    @apply dark:bg-dark-600;
  }

  .navigation {
    &__wrapper {
      @apply flex max-w-[100vw] border-r-0 overflow-hidden border-solid border-0 border-b-1;
      @apply bg-white-450 border-grey-300;
      @apply dark:border-dark-400 dark:bg-dark-600;

      * {
        @apply font-worksans;
      }
    }

    &__action {
      @apply bg-transparent border-none cursor-pointer px-3;
    }

    &__block {
      @apply grow-3 hidden border-x-1 border-r-0 border-grey-300;
      @apply dark:border-dark-400;

      &--desktop {
        @apply md:flex lg:ml-[5%];
      }

      &--mobile {
        @apply flex flex-col md:hidden m-auto;

        .navigation {
          &__logo {
            @apply ml-[0] ;
          }

          &__link {
            @apply py-[8%]  border-0 text-[12px];

            &:not(:first-child):not(:last-child) {
              @apply border-x-1;
            }
          }

          &__links {
            @apply hidden flex z-[2] divide-dashed w-full max-w-[100%] top-[10%] m-auto justify-center border-solid border-0 border-t-1;
            @apply border-grey-300;
            @apply dark:bg-dark-600 dark:border-dark-400;
            &.show {
              @apply grid;
            }
          }

          &__action {
            @apply border-solid border-1 border-b-0 p-3;
            @apply border-grey-300;
            @apply dark:border-dark-400;

            &:last-child {
              @apply border-x-0 ml-0;
            }

            &:first-of-type {
              @apply rounded-tl-md;
            }

            svg, img {
              @apply min-w-[2rem] h-auto;
            }

            &--mode {
              @apply min-w-[fit-content];
              img {
                @apply m-0 animate-spin [animation-duration:10s];
              }
            }
          }

          &__block {
            &-bar {
              @apply pb-0 pr-0;
            }
          }
        }
      }

      &-bar {
        @apply flex justify-start p-[5%];
      }
    }

    &__logo {
      @apply w-[11%] min-w-[100px] md:h-[fit-content]  m-auto cursor-pointer;
      @apply border-grey-300;
      @apply dark:border-dark-400;
    }

    &__links {
      @apply grid grid-cols-4 mt-5 border-none mx-auto grow-3 justify-start;
      @apply max-w-[60%] md:max-w-[50%] lg:max-w-[45%] xl:max-w-[40%];
    }

    &__link {
      @apply capitalize py-[15%] font-normal text-center whitespace-nowrap no-underline  text-[1rem] border-solid border-x-1 border-y-0 border-t-1;
      @apply border-grey-300 border-x-grey-100 text-grey-300;
      @apply dark:border-dark-400 dark:text-light-400;

      &.active {
        @apply text-grey-500 bg-white-600;
        @apply dark:bg-grey-600 dark:text-white-400 ;
      }

      &:first-child {
        @apply rounded-tl-lg border-l-grey-300;
        @apply dark:border-l-dark-400;
      }

      &:not(:last-child) {
        @apply border-r-0;
      }

      &:last-child {
        @apply rounded-tr-lg border-r-grey-300;
        @apply dark:border-r-dark-400;
      }

      &--contact {
        @apply max-w-sm p-[.8%] m-auto rounded-md border-solid shadow-[-1px_-1px_4px];
        @apply text-grey-500 border-foundation-blue-400 bg-foundation-blue-400 shadow-foundation-blue-400;
        @apply dark:text-white-400 dark:border-blue-900 dark:bg-blue-900 dark:shadow-secondary-600;
      }
    }

    &__mode {
      @apply flex items-center justify-center border-solid border-x-1 border-y-0 bg-transparent cursor-pointer w-[5%] min-w-[100px];
      @apply border-grey-300;
      @apply dark:border-dark-400;

      img {
        @apply block m-auto w-[fit-content];
        @apply animate-spin [animation-duration:10s];
      }
    }

  }

  .footer {
    &__wrapper {
      @apply py-[5%] md:pt-[5%] md:pb-[3%];
      @apply dark:bg-grey-800 dark:text-light-550;

      * {
        @apply font-jakarta;
      }
    }

    &__text {
      @apply text-center font-medium text-[33px] md:text-5xl lg:text-8xl mx-auto my-[2%];
    }

    &__rights {
      @apply text-sm font-normal mt-0 tracking-wider;
    }

    &__cta {
      @apply max-md:my-[7%] mx-auto max-w-[25vw] md:max-w-[20vw] block w-[fit-content] h-[fit-content];

      img {
        @apply w-full h-full;
        @apply animate-spin [animation-duration:1m];
      }
    }

    &__link {
      @apply mx-[10px] font-light text-dark-200 underline;
      @apply dark:text-light-550;

      &:hover {
        @apply no-underline;
      }

      &:last-child {
        @apply mr-[0];
      }
    }

    &__block {
      @apply flex justify-between max-md:mt-[5%] mx-[5%];
    }
  }
</style>
