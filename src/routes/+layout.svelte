<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { themeState } from '$lib/state/ThemeState.svelte';

	let { children }: { children: Snippet } = $props();

	let globalCssVars = $derived(
		Object.entries(themeState.fullTheme)
			.map(([key, value]) => `--${key}: ${value};`)
			.join(' ')
	);
</script>

<div style={globalCssVars}>
	{@render children()}
</div>

<style></style>
