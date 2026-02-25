<script>
	import { DiceState } from '$lib/state/DiceState.svelte';
	import DicePanel from './DicePanel.svelte';
</script>

<div class="dice-container">
	<div>
		<div class="row">
			<DicePanel dieValue={20} dieState={DiceState[20]} />
			<DicePanel dieValue={6} dieState={DiceState[6]} />
		</div>
		<div class="row">
			<DicePanel dieValue={4} dieState={DiceState[4]} />
			<DicePanel dieValue={8} dieState={DiceState[8]} />
		</div>
		<div class="row">
			<DicePanel dieValue={10} dieState={DiceState[10]} />
			<DicePanel dieValue={12} dieState={DiceState[12]} />
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
