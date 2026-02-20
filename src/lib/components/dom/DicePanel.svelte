<script lang="ts">
	import type { DieState } from '$lib/models/DiceState';
	import { updateDie } from '$lib/state/DiceState.svelte';
	import { themeState } from '$lib/theme/ThemeState.svelte';
	import { clampValue, generateRandomInt } from '$lib/utility/numbers';

	let {
		dieValue,
		dieState
	}: {
		dieValue: number;
		dieState: DieState;
	} = $props();

	// Value logic

	const shouldAllowMultiplier = $state(false);
	const rollTotal = $derived(dieState.rollList.reduce((a, b) => a + b, 0));

	const decrementMultiplier = (e: MouseEvent) => {
		e.stopPropagation();
		updateDie(dieValue, { multiplier: clampValue(dieState.multiplier - 1, 1, 100) });
	};

	const incrementMultiplier = (e: MouseEvent) => {
		e.stopPropagation();
		updateDie(dieValue, { multiplier: clampValue(dieState.multiplier + 1, 1, 100) });
	};

	const rollDice = () => {
		updateDie(dieValue, {
			rollList: Array.from({ length: dieState.multiplier }, () => generateRandomInt(1, dieValue))
		});
		dieState.isRolling = true;
		setTimeout(() => {
			dieState.isRolling = false;
		}, rollingAnimationDuration);
	};

	// Visual logic

	const rollingAnimationDuration = 250;

	const backgroundFlashPercent = `${parseFloat(themeState.fullTheme.rollContainerType!) / 4}%`;
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	onclick={rollDice}
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
		<button onclick={decrementMultiplier} class="accounting-button">-</button>
		<div class="dice-button">
			<div class="target" bind:this={dieState.target}></div>
		</div>

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
	<h1
		class="dice-roll-text"
		class:rolling-text={dieState.isRolling}
		style:font-size={dieState.isRolling ? '2svw' : '8svw'}
	>
		{rollTotal == 0 ? '--' : rollTotal}
	</h1>
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
		transition: font-size 800ms ease-in-out;
	}

	.rolling-text {
		color: transparent;
		font-size: 2svw;
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
		transition: all 1000ms ease-in-out;
	}

	.target {
		width: 18svw;
		height: 18svw;
	}
</style>
