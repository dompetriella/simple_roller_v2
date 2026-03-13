<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { themeState } from '$lib/state/ThemeState.svelte';
	import { LocalStorage } from '$lib/storage/LocalStorage.svelte';

	let { children }: { children: Snippet } = $props();

	LocalStorage.init();

	export const ssr = false;
	export const prerender = true;

	let globalCssVars = $derived(
		Object.entries(themeState.fullTheme)
			.map(([key, value]) => `--${key}: ${value};`)
			.join(' ')
	);
</script>

<svelte:head>
	<title>Simple Roller V2</title>
</svelte:head>

<div style={globalCssVars}>
	{@render children()}
</div>

<style></style>
