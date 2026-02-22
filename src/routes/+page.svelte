<script lang="ts">
	import Backdrop from '$lib/components/Backdrop.svelte';
	import DiceCanvas from '$lib/components/dice/canvas/DiceCanvas.svelte';
	import DicePanel from '$lib/components/dice/dom/DicePanel.svelte';
	import { DiceState } from '$lib/state/DiceState.svelte';
</script>

<main>
	<Backdrop />
	<nav></nav>
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
</main>

<DiceCanvas />

<style>
	main {
		width: 100svw;
		height: 100svh;
		background-color: var(--surface);
		display: flex;
		flex-direction: column;
		justify-content: start;
	}

	nav {
		background-color: var(--surface);
		border-bottom: 1px solid var(--onSurface);
		height: 10svw;
		z-index: 1;
	}

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
