<script lang="ts">
	import DiceCanvas from '$lib/components/dice/canvas/DiceCanvas.svelte';
	import DiceContainer from '$lib/components/dice/dom/DiceContainer.svelte';
	import Drawer from '$lib/components/drawer/Drawer.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
</script>

<main>
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
	}
</style>
