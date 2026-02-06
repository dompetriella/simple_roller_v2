<script lang="ts">
	import { clampValue, generateRandomInt } from '$lib/utility/numbers';

	let {
		diceValue,
		onTarget
	}: {
		diceValue: number;
		onTarget: (el: HTMLDivElement | null) => void;
	} = $props();

	let targetModel = $state<HTMLDivElement | null>(null);

	$effect(() => {
		onTarget(targetModel);
	});

	let diceMultiplier: number = $state(1);

	let rollValueList = $state<number[]>([]);
	const rollTotal = $derived(rollValueList.reduce((a, b) => a + b, 0));

	const decrementMultiplier = () => {
		diceMultiplier = clampValue(diceMultiplier - 1, 1, 100);
	};

	const incrementMultiplier = () => {
		diceMultiplier = clampValue(diceMultiplier + 1, 1, 100);
	};

	const rollDice = () => {
		rollValueList = Array.from({ length: diceMultiplier }, () => generateRandomInt(1, diceValue));
	};
</script>

<div class="grid">
	<div class="roller-container">
		<div class="title-container">
			<h1>D{diceValue}</h1>
			{#if diceMultiplier > 1}
				<p>{diceMultiplier}x</p>
			{/if}
		</div>
		<div class="dice-container">
			<button onclick={decrementMultiplier} class="accounting-button">-</button>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="dice-button" onclick={rollDice}>
				<div class="target" bind:this={targetModel}></div>
			</button>

			<button onclick={incrementMultiplier} class="accounting-button">+</button>
		</div>

		<h1>
			{rollTotal == 0 ? '\u00A0' : rollTotal}
		</h1>
		<p>
			{#if rollValueList.length > 1}
				[{rollValueList.join(' + ')}]
			{:else}
				{'\u00A0'}
			{/if}
		</p>
	</div>
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
