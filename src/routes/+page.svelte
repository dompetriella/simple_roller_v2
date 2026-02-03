<script lang="ts">
	import DicePanel from '$lib/components/DicePanel.svelte';
	import { Canvas, T } from '@threlte/core';
	import { View } from '@threlte/extras';

	let d20Target: HTMLDivElement | null = $state(null);
</script>

<div class="grid">
	<DicePanel diceValue={20} onTarget={(element) => (d20Target = element)} />
</div>

<div class="canvas">
	<Canvas>
		{#if d20Target}
			<View dom={d20Target}>
				<T.Mesh position={[0, 0, 0]} scale={2.5} rotation.y={90}>
					<T.IcosahedronGeometry />
					<T.MeshBasicMaterial color="blue" wireframe={true} />
				</T.Mesh>
			</View>
		{/if}
	</Canvas>
</div>

<style>
	.canvas {
		position: absolute;
		inset: 0;
		z-index: 0;
		pointer-events: none;
	}

	.grid {
		z-index: 1;
		display: flex;
		flex-wrap: wrap;
		gap: 2em;
	}
</style>
