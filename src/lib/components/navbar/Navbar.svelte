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
		font-size: 1em;
		padding: 0px;
		margin: 0px;
	}

	nav {
		position: absolute;
		right: 0;
		border: 2px solid var(--onSurface);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 15px;
		background-color: var(--surface);
		margin: 1em;
		overflow: hidden;
	}

	.settings-button {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		background-color: var(--surface);
		color: var(--onSurface);
		padding: 1em;
		border: none;
	}
</style>
