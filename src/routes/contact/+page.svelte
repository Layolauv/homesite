<script lang="ts">
	import content from './content';
	import arrowUp from '$assets/images/arrowUp.svg';

</script>

<svelte:head>
	<title>Contact Me?</title>
</svelte:head>

<section class="info">
	<h2 class="info__title">{content.info.title}</h2>
	<div class="info__row">
		<div class="info__enquiries">
			<h3 class="info__enquiries-title">{content.info.inquiries.text}</h3>
			<p class="info__enquiries-email">
				<span>{content.info.inquiries.email}</span>
				<img src={arrowUp} alt="arrow-up" />
			</p>
		</div>
		<div class="info__connect">
			<h3>{content.info.inquiries.email}</h3>
			<ul>
				{#each content.info.connect.socials as socials}
					<li><a href={socials.url}><img src={socials.img} /></a></li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
  /* svelte-ignore css_unused_selector */
  * {
    @apply font-jakarta;
  }

  section {
    @apply bg-white-400;
    @apply dark:bg-dark-500;
  }

  .info {
    &__title {
      @apply text-[16px] md:text-[58px] uppercase text-dark-200 font-semibold tracking-wide w-[30%];
      @apply dark:text-white-500;

    }
  }


</style>
