<script lang="ts">
	import type { DieState } from '$lib/models/DieState';
	import { diceState } from '$lib/state/DiceState.svelte';
	import { themeState } from '$lib/state/ThemeState.svelte';
	import { clampValue, generateRandomInt } from '$lib/utility/Numbers';

	let {
		dieValue,
		dieState
	}: {
		dieValue: number;
		dieState: DieState;
	} = $props();

	// Value logic
	let shouldAllowMultiplier = $state(false);
	const rollTotal = $derived(dieState.rollList.reduce((a, b) => a + b, 0));

	const stopPropagation = (e: PointerEvent) => e.stopPropagation();

	const decrementMultiplier = (e: PointerEvent) => {
		e.stopPropagation();
		diceState.updateDie(dieValue, { multiplier: clampValue(dieState.multiplier - 1, 1, 100) });
	};

	const incrementMultiplier = (e: PointerEvent) => {
		e.stopPropagation();
		diceState.updateDie(dieValue, { multiplier: clampValue(dieState.multiplier + 1, 1, 100) });
	};

	const prepareDiceRoll = () => {
		diceState.setRollingStatus(dieValue, true);
	};

	const commitDiceRoll = () => {
		diceState.updateDie(dieValue, {
			rollList: Array.from({ length: dieState.multiplier }, () => generateRandomInt(1, dieValue))
		});

		setTimeout(() => {
			diceState.setRollingStatus(dieValue, false);
		}, rollingAnimationDuration);
	};

	// Visual logic
	const rollingAnimationDuration = 100;
	const backgroundFlashPercent = `${parseFloat(themeState.fullTheme.rollContainerType!) / 10}%`;
</script>

<div
	onpointerdown={prepareDiceRoll}
	onpointerup={commitDiceRoll}
	role="button"
	tabindex="0"
	class="roller-container"
	class:active-roll={dieState.isRolling}
	style:--flash-percent={backgroundFlashPercent}
>
	<div class="title-container">
		<h1 class="dice-value-text">D{dieValue}</h1>
		{#if dieState.multiplier > 1}
			<sup class="multiplier-superscript">x{dieState.multiplier}</sup>
		{/if}
	</div>
	<div class="dice-container">
		{#if shouldAllowMultiplier}
			<button
				onpointerdown={decrementMultiplier}
				onpointerup={stopPropagation}
				class="accounting-button">-</button
			>
		{/if}
		<div class="dice-button">
			<div class="target" bind:this={dieState.target}></div>
		</div>

		{#if shouldAllowMultiplier}
			<button
				onpointerdown={incrementMultiplier}
				onpointerup={stopPropagation}
				class="accounting-button">+</button
			>
		{/if}
	</div>
	<h1 class="dice-roll-text" class:rolling-text={dieState.isRolling}>
		{rollTotal == 0 ? '--' : rollTotal}
	</h1>
	{#if shouldAllowMultiplier}
		<p class="dice-roll-list-text" class:rolling-text={dieState.isRolling}>
			{#if dieState.rollList.length > 1}
				[{dieState.rollList.join(' + ')}]
			{:else}
				{'\u00A0'}
			{/if}
		</p>
	{/if}
</div>

<style>
	h1 {
		margin: 0;
		color: var(--onSecondarySurface);
	}

	p {
		margin: 0;
	}

	.dice-value-text {
		font-size: 5svw;
		color: var(--onSecondarySurface);
	}

	.rolling-text {
		color: transparent;
		transform: scale(2.5);
	}

	.dice-roll-text {
		padding-top: 1svw;
		font-size: 8svw;
		transition: transform 0.2s ease-out;
		transform-origin: center;
	}

	.dice-roll-list-text {
		font-size: 0.75em;
		text-align: center;
		width: 38svw;
	}

	.dice-button {
		border: none;
		background-color: transparent;
	}

	.accounting-button {
		border: none;
		background-color: transparent;
		color: var(--onSecondarySurface);
		width: 100%;
	}

	.title-container {
		display: flex;
		padding-top: 2svw;
		gap: 0.5svw;
	}

	.dice-container {
		display: flex;
		justify-content: space-evenly;
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
		color: var(--onSecondarySurface);
		background: radial-gradient(
			circle,
			var(--secondarySurface) var(--rollContainerType),
			transparent 65%
		);
		border: 1px solid transparent;
	}

	.active-roll {
		opacity: 0.25;
		background: radial-gradient(
			circle,
			var(--diceHighlightColor),
			var(--flash-percent),
			transparent 65%
		);
		transition: all 500ms ease-in-out;
	}

	.target {
		width: 18svw;
		height: 18svw;
	}
</style>
