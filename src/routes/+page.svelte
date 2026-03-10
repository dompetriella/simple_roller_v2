<script lang="ts">
	import DiceCanvas from '$lib/components/dice/canvas/DiceCanvas.svelte';
	import DiceContainer from '$lib/components/dice/dom/DiceContainer.svelte';
	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import { LocalStorage } from '$lib/storage/LocalStorage.svelte';
	import { LayerIndex } from '$lib/utility/LayerIndex';

	let appReady = $derived(LocalStorage.isLocalStorageInitialized);
</script>

{#if !appReady}
	<div class="loading-barrier" style:z-index={LayerIndex.loadingBarrier}></div>
{/if}

<main class:initialized={appReady} style:z-index={LayerIndex.defaultBackground}>
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
		background: linear-gradient(var(--surface), var(--primary));

		opacity: 0;
		transition: opacity 800ms ease-out;
	}

	.initialized {
		opacity: 1;
	}

	.loading-barrier {
		position: fixed;
		inset: 0;
		background-color: #101010;
		width: 100%;
		height: 100%;
		pointer-events: all;
		opacity: 1;
	}
</style>
