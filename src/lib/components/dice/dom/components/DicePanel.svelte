<script lang="ts">
	import type { DiceType, DieData } from '$lib/models/DieData';
	import { SettingsKeys } from '$lib/models/Settings';
	import { diceState } from '$lib/state/DiceState.svelte';
	import { historyState } from '$lib/state/HistoryState.svelte';
	import { settingsState } from '$lib/state/SettingsState.svelte';
	import { themeState } from '$lib/state/ThemeState.svelte';
	import { LayerIndex } from '$lib/utility/LayerIndex';
	import { clampValue, generateRandomInt } from '$lib/utility/Numbers';

	let {
		diceType
	}: {
		diceType: DiceType;
	} = $props();

	let dieState = $derived(diceState.data[diceType]);

	// Value logic
	let shouldAllowMultiplier = $derived(settingsState.data[SettingsKeys.AllowMultipleDice]);
	const rollTotal = $derived(dieState.rollList.reduce((a, b) => a + b, 0));

	const stopPropagation = (e: PointerEvent) => e.stopPropagation();

	const decrementMultiplier = (e: PointerEvent) => {
		e.stopPropagation();
		diceState.updateDie(diceType, { multiplier: clampValue(dieState.multiplier - 1, 1, 100) });
	};

	const incrementMultiplier = (e: PointerEvent) => {
		e.stopPropagation();
		diceState.updateDie(diceType, { multiplier: clampValue(dieState.multiplier + 1, 1, 100) });
	};

	const prepareDiceRoll = () => {
		diceState.setRollingStatus(diceType, true);
	};

	const commitDiceRoll = () => {
		let rolls = Array.from({ length: dieState.multiplier }, () => generateRandomInt(1, diceType));

		diceState.updateDie(diceType, {
			rollList: rolls
		});

		historyState.addRollToHistory({ diceType: diceType, rollList: rolls });

		setTimeout(() => {
			diceState.setRollingStatus(diceType, false);
		}, rollingAnimationDuration);
	};

	// Visual logic
	const rollingAnimationDuration = 100;
	const backgroundFlashPercent = `${parseFloat(themeState.fullTheme.rollContainerType!) / 10}%`;
</script>

<div
	onpointerdown={prepareDiceRoll}
	onpointerup={commitDiceRoll}
	onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && commitDiceRoll()}
	role="button"
	tabindex="0"
	aria-label="Roll D{diceType}"
	class="roller-container"
	class:active-roll={dieState.isRolling}
	style:--flash-percent={backgroundFlashPercent}
	style:z-index={LayerIndex.diceView}
>
	<div class="title-container">
		<h1 class="dice-value-text">D{diceType}</h1>
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
	<h1
		class="dice-roll-text no-user-select"
		aria-live="polite"
		aria-atomic="true"
		class:rolling-text={dieState.isRolling}
	>
		{rollTotal == 0 ? '--' : rollTotal}
	</h1>
	{#if shouldAllowMultiplier}
		<p
			class="dice-roll-list-text no-user-select"
			aria-live="polite"
			aria-atomic="true"
			class:rolling-text={dieState.isRolling}
		>
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
		height: 40svw;
		width: 40svw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 1em;
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

	.no-user-select {
		user-select: none;
		-webkit-user-select: none;
	}
</style>
