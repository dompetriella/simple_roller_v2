<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { interactivity, View } from '@threlte/extras';
	import { HemisphereLight, PointLight } from 'three';

	let {
		target
	}: {
		target: HTMLDivElement | undefined;
	} = $props();

	let rotationX = $state(0);
	let rotationY = $state(0);
	let rotationZ = $state(0);

	let scale: number = $state(2.5);

	useTask((delta) => {
		rotationX += delta * 0.5;
		rotationY += delta * 0.25;
		rotationZ += delta * 0.05;
	});
</script>

<View dom={target}>
	<T.Mesh
		position={[0, 0, 0]}
		{scale}
		rotation.y={rotationY}
		rotation.x={rotationX}
		rotation.z={rotationZ}
	>
		<T.IcosahedronGeometry />

		<T.MeshBasicMaterial toneMapped={false} color="white" />

		<T.Mesh scale={1.001}>
			<T.IcosahedronGeometry />
			<T.MeshBasicMaterial color="black" toneMapped={false} wireframe={true} />
		</T.Mesh>
	</T.Mesh>
</View>
