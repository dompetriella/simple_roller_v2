<script lang="ts">
	import DiceCanvas from '$lib/components/canvas/DiceCanvas.svelte';
	import DicePanel from '$lib/components/dom/DicePanel.svelte';
	import { DICE_VALUES } from '$lib/models/DiceState';
	import { DiceState } from '$lib/state/DiceState.svelte';
</script>

<div class="container">
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

<DiceCanvas />

<style>
	.container {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
		justify-content: space-evenly;
		padding-bottom: 1em;
	}
</style>
