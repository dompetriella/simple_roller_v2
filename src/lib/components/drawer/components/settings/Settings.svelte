<script>
	import { SETTINGS_CONFIG } from '$lib/models/Settings';
	// @ts-ignore
	import { version } from '$app/environment';
	import SettingsToggle from './components/SettingsToggle.svelte';

	const allSettings = Object.values(SETTINGS_CONFIG);
</script>

<section>
	<h1>Settings</h1>
	<p>Version: v{version}</p>
	{#each allSettings as setting}
		<div class="settings-content">
			<SettingsToggle configuration={setting} />
		</div>
	{/each}
</section>

<style>
	section {
		border: none;

		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		overflow-y: auto;
		color: var(--onSurface);
	}

	h1 {
		font-size: 2.5em;
		color: var(--onSurface);
		padding-bottom: 0px;
		margin-bottom: 0px;
	}

	p {
		font-size: 1em;
		margin: 0px;
		padding: 0px;
		margin-bottom: 2em;
	}

	.settings-content {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: start;
	}
</style>
