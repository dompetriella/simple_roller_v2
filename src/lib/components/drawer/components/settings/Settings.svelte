<script>
	import { SettingsKey } from '$lib/state/SettingsState.svelte';
	import SettingsToggle from './components/SettingsToggle.svelte';
</script>

<section>
	<h1>Settings</h1>
	<div class="settings-content">
		<SettingsToggle settingsKey={SettingsKey.AllowMultipleDice} />
	</div>
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
