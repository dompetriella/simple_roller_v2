<script>
	import { diceState } from '$lib/state/DiceState.svelte';
	import DicePanel from './components/DicePanel.svelte';
</script>

<div class="dice-container">
	<div>
		<div class="row">
			<DicePanel dieValue={20} dieState={diceState.data[20]} />
			<DicePanel dieValue={6} dieState={diceState.data[6]} />
		</div>
		<div class="row">
			<DicePanel dieValue={4} dieState={diceState.data[4]} />
			<DicePanel dieValue={8} dieState={diceState.data[8]} />
		</div>
		<div class="row">
			<DicePanel dieValue={10} dieState={diceState.data[10]} />
			<DicePanel dieValue={12} dieState={diceState.data[12]} />
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
