<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import logo from '$lib/assets/logo.png';
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
		'Linkedin': 'https://www.linkedin.com/in/layo-folaranmi/',
		'Github': 'https://github.com/Layolauv'
	};

	let content = {
		footerText: 'Let\'s build something impactful together.',
		rightsReserved: `${currentYear} &copy; All Rights Reserved`
	};

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<section class="navigation__wrapper" class:dark={darkMode}>
	<div class="navigation__block">
		<img src={logo} alt="site logo" class="navigation__logo" />
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
	<p class="footer__text">{content.footerText}</p>
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
      @apply flex px-[10vw] max-lg:px-[6vw];
    }

    &__block {
      @apply border-solid w-full border-x-1 border-y-0 px-[5%] flex;
      @apply dark:border-dark-200;
    }

    &__links {
      @apply flex ml-[6vw] border-solid mt-5 border-1 rounded-t-lg;
      @apply dark:border-dark-200;
    }

    &__link {
      @apply py-[5vh] px-[3vw] capitalize w-[max-content] no-underline text-light-400 font-light text-[18px];

      &.active {
        @apply text-light-500;
        @apply dark:bg-dark-350;
      }

      &:not(:first-child):not(:last-child) {
        @apply border-solid border-x-1 border-y-0;
        @apply dark:border-dark-350;
      }

      &--contact {
        @apply max-w-md p-[1rem] ml-[5vw] h-[fit-content] my-auto rounded-md border-solid ;
        @apply dark:text-light-500 dark:bg-secondary-500;
      }
    }


    &__logo {
      @apply max-w-[10vw] w-[fit-content] h-[fit-content] my-auto;
    }

    &__mode {
      @apply m-8 bg-transparent border-none cursor-pointer;
    }

  }

  .footer {
		&__wrapper {
			@apply dark:bg-dark-500;
		}
  }
</style>
