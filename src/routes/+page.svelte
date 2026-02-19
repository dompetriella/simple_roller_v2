<script lang="ts">
	import DiceCanvas from '$lib/components/canvas/DiceCanvas.svelte';
	import DicePanel from '$lib/components/dom/DicePanel.svelte';
	import { DICE_VALUES } from '$lib/models/DiceState';
	import { DiceState } from '$lib/state/DiceState.svelte';
</script>

<div class="container">
	<div class="backdrop-container">
		<div class="backdrop"></div>
		<div class="backdrop alt"></div>
	</div>
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

<DiceCanvas />

<style>
	.container {
		width: 100svw;
		height: 100svh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: var(--surface);
	}

	.row {
		display: flex;
		justify-content: space-evenly;
		padding-bottom: 5svw;
	}

	.backdrop-container {
		height: 100%;
		width: 100%;
		position: absolute;
	}

	.backdrop {
		position: absolute;
		top: 20%;
		left: 5%;
		height: 85svw;
		width: 85svw;
		border-radius: 50%;
		z-index: 0;
		background-color: var(--primary);
		filter: blur(20svw);
		opacity: 0.5;
	}

	.alt {
		top: 50%;
		left: 40%;
		height: 55svw;
		width: 55svw;
		background-color: var(--secondary);
	}
</style>
