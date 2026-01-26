<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import logoPry from '$lib/assets/logoPrimary.png';
	import sunDark from '$lib/assets/sun-dark.png';
	import letsTalk from '$lib/assets/lets-talk.png';
	import sunLight from '$lib/assets/sun-light.png';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();
	let pathName = $state('');
	let darkMode = $state(true);
	let isActiveUrl = (url: string) => pathName === url;
	afterNavigate(() => {
		pathName = window.location.pathname;
	});

	const currentYear = (new Date()).getFullYear();
	let links = {
		'home': '/',
		'About me': '/about',
		'Musings': '/musings',
		'Projects': '/projects'
	};

	let contactUrl = "/contact"

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
	<link rel="icon" href={favicon} />
</svelte:head>

<section class="navigation__wrapper" class:dark={darkMode}>
	<div class="navigation__block">
		<img src={logoPry} alt="site logo" class="navigation__logo" />
		<nav class="navigation__links">
			{#each Object.entries(links) as [ title, url ]}
				<a href={url} class="navigation__link" class:active={isActiveUrl(url)}>{title}</a>
			{/each}
		</nav>
		<button class="navigation__link navigation__link--contact">Contact Me</button>
	</div>
	<a class="navigation__mode" aria-label="mode" href={contactUrl}>
		<img src={darkMode ? sunDark : sunLight} alt="toggle light or dark mode" />
	</a>
</section>

<section class="body" class:dark={darkMode}>
	{@render children()}
</section>

<section class="footer__wrapper" class:dark={darkMode}>
	<p class="footer__text">{content.footerTextA} <br /> {content.footerTextB}</p>
	<a class="footer__cta" href={contactUrl}>
		<img src={letsTalk} alt="call to action">
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
  @reference "./layout.scss";
  section {
    @apply bg-light-500;
    @apply dark:bg-dark-600;
  }

  .navigation {
    &__wrapper {
      @apply flex max-w-[100vw] overflow-hidden;
    }

    &__block {
      @apply border-solid border-x-1 grow-3 border-y-0 flex ml-[10%];
      @apply dark:border-dark-200;
    }
    &__logo {
      @apply w-[15%] min-w-[100px] h-[fit-content]  m-auto;
    }

    &__links {
      @apply flex mt-5 border-none mx-auto grow-3 max-w-[40%] justify-start;
    }

    &__link {
      @apply capitalize px-[5%] py-[8%] min-w-[15%] font-light tracking-wider text-center whitespace-nowrap no-underline text-light-400  text-[1rem] border-solid border-x-1 border-y-0 border-t-1;;
      @apply dark:border-dark-350;

      &.active {
        @apply text-light-500;
        @apply dark:bg-dark-350;
      }

      &:first-child{
				@apply rounded-tl-lg;
			}

			&:last-child {
        @apply rounded-tr-lg;
      }

      &--contact {
        @apply max-w-sm p-[1rem] w-[fit-content] m-auto rounded-md border-solid ;
        @apply dark:text-light-500 dark:bg-secondary-500;
      }
    }
    &__mode {
      @apply flex items-center justify-center bg-transparent border-none cursor-pointer w-[10%] min-w-[100px];
      img {
				@apply block m-auto w-[fit-content];
        @apply animate-spin [animation-duration:10s];
      }
    }

  }

  .footer {
		&__wrapper {
			@apply pt-[5%] pb-[3%] ;
			@apply dark:bg-dark-500 dark:text-light-550;

			* {
        font-family: 'Plus Jakarta Sans', SansSerif, sans-serif;
      }
		}

		&__text {
			@apply text-center font-medium text-[5.5rem] mx-auto my-[2%];
		}
		&__rights {
			@apply text-sm font-normal mt-0 tracking-wider;
    }

		&__cta {
			@apply mx-auto max-w-[20vw] block w-[fit-content] h-[fit-content];
			@apply animate-spin [animation-duration:10s];
		}

		&__link {
			@apply dark:text-light-550 mx-[10px] font-light;

			&:hover {
				@apply no-underline;
			}

			&:last-child{
				@apply mr-[0];
			}
		}
		&__block{
			@apply flex justify-between mx-[5%];
		}
  }
</style>
