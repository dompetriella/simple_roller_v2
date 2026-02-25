<script>
	import { drawerState } from '$lib/state/DrawerState.svelte';
</script>

<nav>
	<button onclick={() => drawerState.toggle()} class="settings-button">
		<IconLucideSettings />
	</button>
</nav>

<style>
	nav {
		background-color: var(--surface);
		border-bottom: 2px solid var(--onSurface);
		height: 3em;
		padding: 0.5em;
		z-index: 1;
		display: flex;
		justify-content: end;
		align-items: center;
	}

	.settings-button {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1em;
		background-color: var(--surface);
		color: var(--onSurface);
		border: none;
	}
</style>
