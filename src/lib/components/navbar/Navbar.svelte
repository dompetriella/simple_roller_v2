<script>
	import { drawerState } from '$lib/state/DrawerState.svelte';
</script>

<nav>
	<button onclick={() => drawerState.toggle()} class="settings-button">
		<h1>Options</h1>
		<div class="icon">
			<IconLucideSparkles />
		</div>
	</button>
</nav>

<style>
	h1 {
		padding: 0px;
		margin: 0px;
	}

	nav {
		border-top: 2px solid var(--onSurface);
		height: 25svw;
		padding: 0.5em;
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 15svw;
		width: 15svw;
		font-size: 6svw;
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
