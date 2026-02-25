<script>
	import { drawerState, DrawerTab } from '$lib/state/DrawerState.svelte';
	import DrawerTabButton from './components/DrawerTabButton.svelte';
</script>

<div class="container">
	{#if drawerState.isOpen}
		<button
			onclick={() => {
				if (drawerState.isOpen) {
					drawerState.close();
				}
			}}
			class="drawer-barrier"
			aria-label="Close Drawer"
		></button>
	{/if}
	<aside class="drawer" class:drawer-open={drawerState.isOpen}>
		<div class="tabs-container">
			<DrawerTabButton tab={DrawerTab.Settings}>
				<IconLucideSettings />
			</DrawerTabButton>
			<DrawerTabButton tab={DrawerTab.Themes}>
				<IconLucidePalette />
			</DrawerTabButton>
			<DrawerTabButton tab={DrawerTab.History}>
				<IconLucideScrollText />
			</DrawerTabButton>
			<DrawerTabButton tab={DrawerTab.Stats}>
				<IconLucideBarChart />
			</DrawerTabButton>
		</div>
	</aside>
</div>

<style>
	.drawer-barrier {
		position: absolute;
		height: 100%;
		width: 100%;
		background-color: color-mix(in srgb, var(--surface), transparent 60%);
		z-index: 9;
		border: none;
	}

	aside {
		position: fixed;
		top: 0;
		right: 0;
		width: 75svw;
		height: 100svh;
		background-color: color-mix(in srgb, var(--surface), transparent 10%);

		border-left: 1px solid var(--onSurface);
		z-index: 10;

		display: flex;
		flex-direction: column;
		padding: 1em;

		transform: translateX(100%);
		transition: transform 200ms ease-out;
	}

	.drawer-open {
		transform: translateX(0%);
	}

	.tabs-container {
		width: 100%;
		height: 3em;
		display: flex;
		justify-content: stretch;
	}
</style>
