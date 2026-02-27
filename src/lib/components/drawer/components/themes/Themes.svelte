<script>
	import { themeState } from '$lib/state/ThemeState.svelte';
	import { THEMES } from '$lib/theme/Themes';
	import ThemeSelect from './components/ThemeSelect.svelte';
</script>

<section>
	<h1>Themes</h1>
	<h2>Current: {themeState.currentThemeName}</h2>

	<div class="themes-list-container">
		{#each Object.entries(THEMES) as [name, theme]}
			<ThemeSelect themeName={name} themePalette={theme} />
		{/each}
	</div>
</section>

<style>
	h1 {
		font-size: 2.5em;
		color: var(--onSurface);
		margin-bottom: 0px;
	}

	h2 {
		font-size: 1em;
		padding: 0px;
		margin: 0px;
		font-weight: 500;
		color: var(--onSurface);
		padding-bottom: 2em;
	}

	section {
		border: none;

		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
	}

	.themes-list-container {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		width: 100%;
	}
</style>
