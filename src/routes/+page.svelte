<script lang="ts">
	import DiceCanvas from '$lib/components/canvas/DiceCanvas.svelte';
	import DicePanel from '$lib/components/dom/DicePanel.svelte';
	import { DICE_VALUES } from '$lib/models/DiceState';
	import { DiceState } from '$lib/state/DiceState.svelte';

	let d20Target: HTMLDivElement | null = $state(null);
</script>

<div class="grid">
	{#each DICE_VALUES as value (value)}
		<DicePanel dieValue={value} dieState={DiceState[value]} />
	{/each}
</div>

<DiceCanvas />

<style>
	.grid {
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
	}
</style>
