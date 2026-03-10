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
	import { DiceType } from '$lib/models/DieData';
	import { LayerIndex } from '$lib/utility/LayerIndex';
	let d20Data = $derived(diceState.data[DiceType.D20]);
	let d6Data = $derived(diceState.data[DiceType.D6]);
	let d4Data = $derived(diceState.data[DiceType.D4]);
	let d8Data = $derived(diceState.data[DiceType.D8]);
	let d10Data = $derived(diceState.data[DiceType.D10]);
	let d12Data = $derived(diceState.data[DiceType.D12]);
</script>

<div class="canvas" style:z-index={LayerIndex.diceCanvas}>
	<Canvas>
		{#if d20Data.target}
			<DiceView dieState={d20Data} geometry={new IcosahedronGeometry()}></DiceView>
		{/if}
		{#if d6Data.target}
			<DiceView dieState={d6Data} geometry={new BoxGeometry()}></DiceView>
		{/if}
		{#if d4Data.target}
			<DiceView dieState={d4Data} geometry={new TetrahedronGeometry()}></DiceView>
		{/if}
		{#if d8Data.target}
			<DiceView dieState={d8Data} geometry={new OctahedronGeometry()}></DiceView>
		{/if}
		{#if d10Data.target}
			<DiceView dieState={d10Data} geometry={createD10Geometry()}></DiceView>
		{/if}
		{#if d12Data.target}
			<DiceView dieState={d12Data} geometry={new DodecahedronGeometry()}></DiceView>
		{/if}
	</Canvas>
</div>

<style>
	.canvas {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}
</style>
