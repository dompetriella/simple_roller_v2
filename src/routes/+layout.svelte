<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type { Snippet } from 'svelte';
	import '../app.css';

	let { children }: { children: Snippet } = $props();
</script>

{@render children()}

<style></style>
