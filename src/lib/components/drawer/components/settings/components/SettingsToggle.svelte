<script lang="ts">
	import type { SettingDefinition } from '$lib/models/Settings';
	import { settingsState } from '$lib/state/SettingsState.svelte';

	let { configuration }: { configuration: SettingDefinition } = $props();

	let isExpanded = $state(false);

	let settingsValue = $derived(settingsState.data[configuration.id]);
</script>

<fieldset>
	<button class="info-button" onclick={() => (isExpanded = !isExpanded)}>
		<div class="info-container">
			<div class="chevron-icon" class:chevron-expanded={isExpanded}>
				<IconLucideChevronRight />
			</div>

			<h3>{configuration.title}</h3>
		</div>
		{#if isExpanded}
			<div class="expanded-info-container">{configuration.description}</div>
		{/if}
	</button>

	<button
		onclick={() => settingsState.updateValue(configuration.id, !settingsValue)}
		class="switch-container"
		aria-checked={settingsValue}
		role="switch"
		aria-label="toggle"
	>
		<div class="switch-background" class:switch-background-on={settingsValue}>
			<div class="switch-toggle" class:switch-toggle-on={settingsValue}></div>
		</div>
	</button>
</fieldset>

<style>
	fieldset {
		padding: 0px;
		margin: 0px;

		display: flex;
		width: 100%;
		overflow: hidden;
		border: none;
	}

	button {
		background-color: transparent;
	}

	h3 {
		text-align: start;
		font-size: 0.75em;
		font-weight: 200;
	}

	.info-button {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		flex: 6;
		gap: 0.5em;

		height: 100%;
		width: 100%;
		padding: 1em;
		border: none;
		color: var(--onSurface);
	}

	.info-container {
		width: 100%;
		display: flex;
		justify-content: start;
		gap: 0.5em;
	}

	.expanded-info-container {
		text-align: start;
		font-size: 0.75em;
		font-weight: 100;
	}

	h3 {
		margin: 0px;
		padding: 0px;
		font-size: 1em;
	}

	.switch-container {
		display: flex;
		align-items: center;
		flex: 2;
		padding: 1em;
		border: none;
	}

	.switch-background {
		height: 2em;
		width: 4em;
		background-color: var(--surface);
		border-radius: 1em;
		border: 1px solid var(--onSurface);
		display: flex;
		align-items: center;
		padding: 0.15em;
		transition: background-color 200ms ease-out;
	}

	.switch-background-on {
		background-color: var(--primary);
	}

	.switch-toggle {
		height: 1.5em;
		width: 1.5em;
		background-color: var(--onSurface);
		border-radius: 50%;
		transition:
			transform 200ms ease-out,
			height 200ms ease-out,
			width 200ms ease-out,
			background-color 200ms ease-out;
		transform: translateX(0);
	}

	.switch-toggle-on {
		transform: translateX(2em);
		background-color: var(--diceHighlightColor);
	}

	.chevron-icon {
		transition: transform 100ms linear;
	}

	.chevron-expanded {
		transform: rotate(90deg);

		transition: transform 100ms linear;
	}
</style>
