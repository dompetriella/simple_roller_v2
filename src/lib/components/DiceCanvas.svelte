<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import { interactivity, View } from '@threlte/extras';
	import DiceView from './DiceView.svelte';

	let {
		d20Target
		// d4Target,
		// d6Target,
		// d8Target,
		// d10Target,
		// d12Target
	}: {
		d20Target: HTMLDivElement | null;
		// d4Target: HTMLDivElement | null;
		// d6Target: HTMLDivElement | null;
		// d8Target: HTMLDivElement | null;
		// d10Target: HTMLDivElement | null;
		// d12Target: HTMLDivElement | null;
	} = $props();
</script>

<div class="canvas">
	<Canvas>
		<T.DirectionalLight position={[3, 5, 3]} intensity={3} color="white" />
		<T.AmbientLight intensity={0.6} color="white" />
		{#if d20Target}
			<DiceView target={d20Target} />
		{/if}
	</Canvas>
</div>

<style>
	.canvas {
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
	}
</style>
