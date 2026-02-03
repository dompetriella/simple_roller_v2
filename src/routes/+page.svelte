<script>
	import CanvasPortal from "$lib/components/CanvasPortal.svelte";
	import { T } from "@threlte/core";

</script>
<!-- Regular DOM elements for UI -->
<button>Click me</button>

<div class="three-container">
<CanvasPortal>
  <T.PerspectiveCamera
    position.z={10}
    makeDefault
  />

  <T.Mesh>
    <T.BoxGeometry />
    <T.MeshBasicMaterial color="blue" />
  </T.Mesh>
</CanvasPortal>
</div>

<style>
.three-container {
    height: 5em;
    width: 5em;
    background-color: aqua;
}
</style>