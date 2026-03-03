<script lang="ts">
	import DiceIcon from '$lib/components/dice/dom/components/DiceIcon.svelte';
	import { DiceType } from '$lib/models/DieData';
	import type { HistoryData } from '$lib/models/HistoryData';
	import { getArraySum } from '$lib/utility/Numbers';

	let { historyData }: { historyData: HistoryData } = $props();
</script>

<div class="entry-container">
	<div class="icon-container">
		<DiceIcon diceType={historyData.diceType} />
		<h2>D{historyData.diceType}</h2>
	</div>

	<div class="data-container">
		<p>{historyData.dateTime}</p>
		{#if historyData.diceRolls.length > 1}
			<div class="roll-container">
				{#each historyData.diceRolls as rollData}
					<div class="roll">
						<h4>{rollData}</h4>
					</div>
				{/each}
			</div>
		{/if}
		<h3>{getArraySum(historyData.diceRolls)}</h3>
	</div>
</div>

<style>
	.entry-container {
		width: 100%;
		display: flex;
	}

	h2 {
		margin: 0px;
		text-align: center;
		color: var(--onSurface);
		font-weight: 500;
		font-size: 0.75em;
	}

	h3 {
		margin: 0px;
		padding: 0px;
		color: var(--onSurface);
		font-size: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}

	h4 {
		margin: 0px;
		padding: 0px;
		color: var(--onPrimary);
	}

	p {
		margin: -12px;
		text-align: center;
		color: var(--onSurface);
		font-weight: 100;
		font-size: 0.75em;
		position: absolute;
		left: 2.5em;
	}

	.icon-container {
		display: flex;
		flex-direction: column;
		padding-right: 0.5em;
	}

	.data-container {
		display: flex;
		flex-grow: 1;
		border-radius: 1em;
		border: 1px solid var(--onSurface);
		position: relative;
	}

	.roll-container {
		display: flex;
		justify-content: start;
		align-items: center;
		flex-wrap: wrap;
		padding: 0em 1em;
		height: 100%;
		gap: 0.5em;
		min-width: 70%;
	}

	.roll {
		height: 2em;
		width: 2em;
		background: radial-gradient(var(--primary), var(--secondary));
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid var(--onSurface);
		border-radius: 0.25em;
	}
</style>
