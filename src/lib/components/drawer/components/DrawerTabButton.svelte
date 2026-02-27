<script lang="ts">
	import { drawerState, type DrawerTab } from '$lib/state/DrawerState.svelte';
	import type { Snippet } from 'svelte';

	let { tab, children }: { tab: DrawerTab; children: Snippet } = $props();
</script>

<button
	onclick={() => drawerState.changeTab(tab)}
	class:current-tab={drawerState.currentTab == tab}
	aria-label={`${tab} Tab`}
>
	{@render children()}</button
>

<style>
	button {
		direction: flex;
		flex-grow: 1;
		font-size: 1em;

		background-color: transparent;
		color: var(--onSurface);

		border: 1px solid var(--surface);

		border-top-left-radius: 10%;
		border-top-right-radius: 10%;
		border-bottom-left-radius: 0%;
		border-bottom-right-radius: 0%;
		transition: border-color 400ms ease-out;
	}

	.current-tab {
		color: var(--diceHighlightColor);
		border-bottom: 1px solid var(--diceHighlightColor);
	}
</style>
