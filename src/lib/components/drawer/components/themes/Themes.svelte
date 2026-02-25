<script>
	import { themeState } from '$lib/state/ThemeState.svelte';
	import { THEMES } from '$lib/theme/Themes';
	import ThemePaletteNode from './components/ThemePaletteNode.svelte';
	import ThemeSelect from './components/ThemeSelect.svelte';
</script>

<fieldset>
	<h2>Current Theme</h2>

	<div class="current-theme">
		<h3>{`${themeState.currentThemeName}`}</h3>
		<ThemePaletteNode theme={themeState.fullTheme} />
	</div>

	{#each Object.entries(THEMES) as [name, theme]}
		<ThemeSelect themeName={name} themePalette={theme} />
	{/each}
</fieldset>

<style>
	fieldset {
		border: none;

		display: flex;
		flex-direction: column;
		align-items: start;

		width: 100%;
	}

	.current-theme {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		gap: 0.5em;
	}

	h2 {
		font-size: 1em;
		padding: 0px;
		margin: 0px;
		color: var(--onSurface);
		padding-bottom: 0.5em;
	}

	h3 {
		padding: 0px;
		margin: 0px;
		color: var(--onSurface);
		font-size: 1em;
		font-weight: 500;
	}
</style>
