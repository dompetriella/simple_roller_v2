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

	const shouldAllowMultiplier = $state(false);

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
		<h1 class="dice-value-text">D{dieValue}</h1>
		{#if dieState.multiplier > 1}
			<sup class="multiplier-superscript">x{dieState.multiplier}</sup>
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

	{#if shouldAllowMultiplier}
		<p class="dice-roll-list-text">
			{#if dieState.rollList.length > 1}
				[{dieState.rollList.join(' + ')}]
			{:else}
				{'\u00A0'}
			{/if}
		</p>
	{/if}
	<h1 class="dice-roll-text">
		{rollTotal == 0 ? '--' : rollTotal}
	</h1>
</div>

<style>
	h1 {
		margin: 0;
	}

	p {
		margin: 0;
	}

	.dice-value-text {
		font-size: 5svw;
	}

	.dice-roll-text {
		padding-top: 1svw;
		font-size: 8svw;
	}

	.dice-button {
		border: none;
		background-color: transparent;
	}

	.accounting-button {
		border: none;
		background-color: transparent;
		color: white;
		width: 100%;
	}

	.title-container {
		display: flex;
		padding-top: 2svw;
		gap: 0.5svw;
	}

	.dice-container {
		display: flex;
		justify-content: stretch;
		width: 100%;
	}

	.roller-container {
		height: 38svw;
		width: 38svw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 1em;
		z-index: 1;
		background-color: #1e1e1e;
	}

	.target {
		width: 18svw;
		height: 18svw;
	}
</style>
