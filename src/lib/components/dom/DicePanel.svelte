<script lang="ts">
	import type { DieState } from '$lib/models/DiceState';
	import { updateDie } from '$lib/state/DiceState.svelte';
	import { clampValue, generateRandomInt } from '$lib/utility/numbers';

	let {
		dieValue,
		dieState
	}: {
		dieValue: number;
		dieState: DieState;
	} = $props();

	const rollTotal = $derived(dieState.rollList.reduce((a, b) => a + b, 0));

	const decrementMultiplier = () => {
		updateDie(dieValue, { multiplier: clampValue(dieState.multiplier - 1, 1, 100) });
	};

	const incrementMultiplier = () => {
		updateDie(dieValue, { multiplier: clampValue(dieState.multiplier + 1, 1, 100) });
	};

	const rollDice = () => {
		updateDie(dieValue, {
			rollList: Array.from({ length: dieState.multiplier }, () => generateRandomInt(1, dieValue))
		});
	};
</script>

<div class="roller-container">
	<div class="title-container">
		<h1>D{dieValue}</h1>
		{#if dieState.multiplier > 1}
			<p>{dieState.multiplier}x</p>
		{/if}
	</div>
	<div class="dice-container">
		<button onclick={decrementMultiplier} class="accounting-button">-</button>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button class="dice-button" onclick={rollDice}>
			<div class="target" bind:this={dieState.target}></div>
		</button>

		<button onclick={incrementMultiplier} class="accounting-button">+</button>
	</div>

	<h1>
		{rollTotal == 0 ? '\u00A0' : rollTotal}
	</h1>
	<p>
		{#if dieState.rollList.length > 1}
			[{dieState.rollList.join(' + ')}]
		{:else}
			{'\u00A0'}
		{/if}
	</p>
</div>

<style>
	h1 {
		margin: 0;
	}

	p {
		margin: 0;
	}

	.dice-button {
		border: none;
		background-color: transparent;
	}

	.accounting-button {
		width: 5em;
		border: none;
		background-color: transparent;
		color: white;
	}

	.title-container {
		display: flex;
	}

	.dice-container {
		display: flex;
	}

	.roller-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid white;
		padding: 1em 0em;
	}

	.target {
		width: 10em;
		height: 10em;
		border: 1px solid orange;
	}
</style>
