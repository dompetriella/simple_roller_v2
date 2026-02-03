<script lang="ts">
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
	let rollValue: number = $state(0);

	const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
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
			<button
				onclick={() => {
					if (diceMultiplier > 1) {
						diceMultiplier = diceMultiplier - 1;
					}
				}}
				class="accounting-button">-</button
			>
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="dice-button" onclick={() => {}}>
				<div class="target" bind:this={targetModel}></div>
			</button>

			<button
				onclick={() => {
					if (diceMultiplier < 100) {
						diceMultiplier = diceMultiplier + 1;
					}
				}}
				class="accounting-button">+</button
			>
		</div>

		<h1>{rollValue == 0 ? 'x' : rollValue}</h1>
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
