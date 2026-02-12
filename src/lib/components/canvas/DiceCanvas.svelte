<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import DiceView from './DiceView.svelte';
	import { DICE_VALUES } from '$lib/models/DiceState';
	import { DiceState } from '$lib/state/DiceState.svelte';
	import { BoxGeometry, DodecahedronGeometry, IcosahedronGeometry, OctahedronGeometry, TetrahedronGeometry } from 'three';
</script>

<div class="canvas">
	<Canvas>
		{#if DiceState[20].target}
			<DiceView dieState={DiceState[20]} geometry={new IcosahedronGeometry()}></DiceView>
		{/if}
		{#if DiceState[6].target}
			<DiceView dieState={DiceState[6]} geometry={new BoxGeometry()}></DiceView>
		{/if}
		{#if DiceState[4].target}
			<DiceView dieState={DiceState[4]} geometry={new TetrahedronGeometry()}></DiceView>
		{/if}
		{#if DiceState[8].target}
			<DiceView dieState={DiceState[8]} geometry={new OctahedronGeometry()}></DiceView>
		{/if}
		{#if DiceState[10].target}
			<DiceView dieState={DiceState[10]} geometry={new BoxGeometry()}></DiceView>
		{/if}
		{#if DiceState[12].target}
			<DiceView dieState={DiceState[12]} geometry={new DodecahedronGeometry()}></DiceView>
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
