<script lang="ts">
	import type { DieState } from '$lib/models/DiceState';
	import { generateRandomInt } from '$lib/utility/numbers';
	import { T, useTask } from '@threlte/core';
	import { interactivity, View } from '@threlte/extras';

	let {
		dieState,
		children
	}: {
		dieState: DieState;
		children: () => any;
	} = $props();

	let rotationX = $state(generateRandomInt(0, 180));
	let rotationY = $state(generateRandomInt(0, 180));
	let rotationZ = $state(generateRandomInt(0, 180));

	useTask((delta) => {
		rotationX += delta * 0.5;
		rotationY += delta * 0.25;
		rotationZ += delta * 0.05;
	});
</script>

<View dom={dieState.target}>
	<T.Mesh
		position={[0, 0, 0]}
		scale={dieState.scale}
		rotation.y={rotationY}
		rotation.x={rotationX}
		rotation.z={rotationZ}
	>
		{@render children()}

		<T.MeshBasicMaterial toneMapped={false} color={dieState.meshColor} />

		<T.Mesh scale={1.001}>
			{@render children()}
			<T.MeshBasicMaterial color={dieState.wireframeColor} toneMapped={false} wireframe={true} />
		</T.Mesh>
	</T.Mesh>
</View>
