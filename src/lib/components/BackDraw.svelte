<script lang="ts">
	import { onMount } from 'svelte';
	import { animate } from '$lib/components/Backdraw';
	import { theme } from '$lib/theme.svelte';
	const toggleAnimate = (val: number) => {
		let bgColor, gridColor;
		switch (val) {
			case 1:
				bgColor = '#151515';
				gridColor = '#111111';
				break;
			case 0:
				bgColor = '#FDFDFD';
				gridColor = '#f5f4f4';
				break;
		}

		animate({
			selector: '#backdraw',
			backgroundColor: bgColor,
			gridSize: 80,
			gridColor,
			particleColors: [ '#526A7F', '#151515', '#0D0D0D', '#E6E6E6' ]
		});
	};

	onMount(() => {
		toggleAnimate(theme.mode);
		document.addEventListener('onModeChange', (event: Event) => {
			toggleAnimate((event as CustomEvent<number>).detail);
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
