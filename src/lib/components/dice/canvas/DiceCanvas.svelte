<script lang="ts">
	import { Canvas, T } from '@threlte/core';
	import DiceView from './components/DiceView.svelte';
	import {
		BoxGeometry,
		DodecahedronGeometry,
		IcosahedronGeometry,
		OctahedronGeometry,
		TetrahedronGeometry
	} from 'three';
	import { createD10Geometry } from '$lib/utility/D10Geometry';
	import { diceState } from '$lib/state/DiceState.svelte';

	const d10Geometry = createD10Geometry();
</script>

<div class="canvas">
	<Canvas>
		{#if diceState.data[20].target}
			<DiceView dieState={diceState.data[20]} geometry={new IcosahedronGeometry()}></DiceView>
		{/if}
		{#if diceState.data[6].target}
			<DiceView dieState={diceState.data[6]} geometry={new BoxGeometry()}></DiceView>
		{/if}
		{#if diceState.data[4].target}
			<DiceView dieState={diceState.data[4]} geometry={new TetrahedronGeometry()}></DiceView>
		{/if}
		{#if diceState.data[8].target}
			<DiceView dieState={diceState.data[8]} geometry={new OctahedronGeometry()}></DiceView>
		{/if}
		{#if diceState.data[10].target}
			<DiceView dieState={diceState.data[10]} geometry={createD10Geometry()}></DiceView>
		{/if}
		{#if diceState.data[12].target}
			<DiceView dieState={diceState.data[12]} geometry={new DodecahedronGeometry()}></DiceView>
		{/if}
	</Canvas>
</div>

<style>
	.canvas {
		position: absolute;
		inset: 0;
		z-index: 2;
		pointer-events: none;
	}
</style>
