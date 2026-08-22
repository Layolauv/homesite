<script lang="ts">
	import { onMount } from 'svelte';
	import { animate } from '$lib/components/Backdraw';

	onMount(() => {
		animate({
			selector: '#backdraw',
			backgroundColor: '#151515',
			gridSize: 80,
			gridColor: '#111111',
			particleColors: ['#526A7F', '#151515', '#0D0D0D', '#E6E6E6']
		});

	});

</script>

<canvas id="backdraw"></canvas>
<style lang="scss">
  #backdraw {
    @apply w-full h-[inherit];
    @apply dark:bg-grey-700;
  }
</style>
