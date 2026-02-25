<script lang="ts">
	import type { ThemeColors } from '$lib/models/ThemeData';

	let { theme }: { theme: ThemeColors } = $props();

	const uniquePalette = $derived(
		[...new Set(Object.values(theme))].filter((v) => v?.toString().startsWith('#'))
	);
</script>

<div class="node-container">
	{#each uniquePalette as color}
		<div class="palette" style:background-color={color}></div>
	{/each}
</div>

<style>
	.node-container {
		height: 1.5em;
		width: 6em;
		border-radius: 5px;
		border: 1px solid var(--onSurface);

		display: flex;
		overflow: hidden;
	}

	.palette {
		flex: 1;
		height: 100%;
	}
</style>
