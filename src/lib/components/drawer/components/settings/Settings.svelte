<script>
	import { SETTINGS_CONFIG } from '$lib/models/Settings';
	import SettingsToggle from './components/SettingsToggle.svelte';

	const allSettings = Object.values(SETTINGS_CONFIG);
</script>

<section>
	<h1>Settings</h1>
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
	}

	h1 {
		font-size: 2.5em;
		color: var(--onSurface);
	}

	.settings-content {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: start;
	}
</style>
