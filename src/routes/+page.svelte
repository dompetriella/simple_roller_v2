<script lang="ts">
	import DiceCanvas from '$lib/components/dice/canvas/DiceCanvas.svelte';
	import DiceContainer from '$lib/components/dice/dom/DiceContainer.svelte';
	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { LocalStorage } from '$lib/storage/LocalStorage.svelte';

	let appReady = $derived(LocalStorage.isLocalStorageInitialized);
</script>

{#if !appReady}
	<div class="loading-barrier"></div>
{/if}

<main class:initialized={appReady}>
	<Drawer />
	<Navbar />
	<DiceContainer />
</main>

<DiceCanvas />

<style>
	main {
		width: 100svw;
		height: 100svh;

		display: flex;
		flex-direction: column;
		justify-content: start;

		opacity: 0;
		transition: opacity 800ms ease-out;
	}

	.initialized {
		opacity: 1;
	}

	.loading-barrier {
		position: fixed;
		inset: 0;
		background-color: #1c1c1c;
		width: 100%;
		height: 100%;
		z-index: 9999;
		pointer-events: all;
		opacity: 1;
	}
</style>
