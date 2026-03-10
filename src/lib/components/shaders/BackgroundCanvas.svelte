<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { LayerIndex } from '$lib/utility/LayerIndex';
	import BasicShader from './background/BasicShader.svelte';
</script>

<div class="bg-canvas" style:z-index={LayerIndex.shaderBackground}>
	<Canvas>
		<BasicShader />
	</Canvas>
</div>

<style>
	.bg-canvas {
		position: absolute;
		inset: 0;
		width: 100svw;
		height: 100svh;
		pointer-events: none;
	}
</style>
