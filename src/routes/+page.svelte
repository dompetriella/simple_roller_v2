<script lang="ts">
	import Backdrop from '$lib/components/Backdrop.svelte';
	import DiceCanvas from '$lib/components/dice/canvas/DiceCanvas.svelte';
	import DiceContainer from '$lib/components/dice/dom/DiceContainer.svelte';
	import DicePanel from '$lib/components/dice/dom/components/DicePanel.svelte';
	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
</script>

<main>
	<Backdrop />
	<Drawer />

	<DiceContainer />
	<Navbar />
</main>

<DiceCanvas />

<style>
	main {
		width: 100svw;
		height: 100svh;
		background-color: var(--surface);
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
</style>
