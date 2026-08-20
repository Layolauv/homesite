<script lang="ts">

import BackDraw from '$lib/components/BackDraw.svelte';
</script>

<svelte:head>
	<title>Hi! I'm Layolauv :)</title>
</svelte:head>

<div class="hero">
	<BackDraw />
	<section class="hero__wrapper">
		<div class="hero__tc">
			<p class="hero__tc-title">Hello, I'm <span class="pop">Emmanuel.</span> <br /> <span class="pop">A full-stack engineer</span> building
				<span class="pop">performant</span> systems for <span class="pop">global brands</span>
			</p>
			<div class="hero__tc-ctas">
				<button class="cta"></button>
			</div>
		</div>
	</section>
</div>
<style lang="scss">
	.hero {
		@apply h-[80vh] relative;
		&__wrapper {
			@apply m-[5%] absolute top-0;
		}
	}
</style>