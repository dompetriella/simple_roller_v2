<script>
	import { DiceType } from '$lib/models/DieData';
	import { diceState } from '$lib/state/DiceState.svelte';
	import DicePanel from './components/DicePanel.svelte';
</script>

<div class="dice-container">
	<div>
		<div class="row">
			<DicePanel diceType={DiceType.D20} />
			<DicePanel diceType={DiceType.D6} />
		</div>
		<div class="row">
			<DicePanel diceType={DiceType.D4} />
			<DicePanel diceType={DiceType.D8} />
		</div>
		<div class="row">
			<DicePanel diceType={DiceType.D10} />
			<DicePanel diceType={DiceType.D12} />
		</div>
	</div>
</div>

<style>
	.dice-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: stretch;
		height: 100%;
		z-index: 1;
	}

	.row {
		display: flex;
		justify-content: space-evenly;
		padding-bottom: 5svw;
	}
</style>
