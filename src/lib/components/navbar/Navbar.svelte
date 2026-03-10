<script>
	import { drawerState } from '$lib/state/DrawerState.svelte';
	import { LayerIndex } from '$lib/utility/LayerIndex';
</script>

<nav style:z-index={LayerIndex.navbar}>
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
		border-bottom: 2px solid var(--onSurface);
		height: 25svw;
		padding: 0.5em;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--surface);
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
