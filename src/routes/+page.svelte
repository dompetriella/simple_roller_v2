<script lang="ts">
	import DiceCanvas from '$lib/components/DiceCanvas.svelte';
	import DicePanel from '$lib/components/DicePanel.svelte';

	let d20Target: HTMLDivElement | null = $state(null);
</script>

<div class="grid">
	<DicePanel diceValue={20} onTarget={(element) => (d20Target = element)} />
</div>

<DiceCanvas {d20Target} />

<style>
	.grid {
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
	}
</style>
