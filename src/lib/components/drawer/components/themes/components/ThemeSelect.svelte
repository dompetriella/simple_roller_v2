<script lang="ts">
	import type { ThemeColors } from '$lib/models/ThemeData';
	import { themeState } from '$lib/state/ThemeState.svelte';
	import { THEMES, type ThemeName } from '$lib/theme/Themes';

	let { themeName, themePalette }: { themeName: string; themePalette: ThemeColors } = $props();

	const paletteKeys: (keyof ThemeColors)[] = [
		'surface',
		'primary',
		'diceColor',
		'diceHighlightColor'
	];

	let uniquePalette = $derived([
		...new Set(paletteKeys.map((key) => themePalette[key]).filter(Boolean))
	] as string[]);
</script>

<button
	onclick={() => themeState.setTheme(themeName as ThemeName)}
	class:selected={themeState.currentThemeName == themeName}
>
	<h4>
		{themeName}
	</h4>
	<div class="palette">
		{#each uniquePalette as color}
			<div class="color" style:background-color={color}></div>
		{/each}
	</div>
</button>

<style>
	h4 {
		color: var(--onSurface);
	}

	button {
		height: 4em;
		width: 100%;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em;
		background-color: var(--surface);
		border: 1px solid var(--onSurface);
	}

	.palette {
		width: 33%;
		height: 100%;
		display: flex;
		border-radius: 10px;
		border: 1px solid var(--onSurface);
		overflow: hidden;
	}

	.color {
		flex: 1;
		height: 100%;
	}

	.selected {
		border-color: var(--diceHighlightColor);
		transition: border-color 200ms ease-out;
	}
</style>
