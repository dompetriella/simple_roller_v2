<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import DiceView from './DiceView.svelte';
	import { DICE_VALUES } from '$lib/models/DiceState';
	import { DiceState } from '$lib/state/DiceState.svelte';
</script>

<div class="canvas">
	<Canvas>
		{#if DiceState[20].target}
			<DiceView dieState={DiceState[20]}></DiceView>
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
