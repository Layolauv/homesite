<script lang="ts">
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		const el = document.getElementById('backdraw');
	});

</script>

<section id="backdraw">

</section>
<style lang="scss">
  #backdraw {
		@apply w-full h-[inherit] dark:bg-grey-700;
  }
</style>