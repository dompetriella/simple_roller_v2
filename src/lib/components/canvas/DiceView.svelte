<script lang="ts">
	import type { DieState } from '$lib/models/DiceState';
	import { themeState } from '$lib/theme/ThemeState.svelte';
	import { generateRandomInt } from '$lib/utility/numbers';
	import { T, useTask } from '@threlte/core';
	import { View } from '@threlte/extras';
	import { BoxGeometry } from 'three';

	let {
		dieState,
		geometry
	}: {
		dieState: DieState;
		geometry: any;
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
		{geometry}
	>
		<T.MeshBasicMaterial toneMapped={false} color={themeState.fullTheme.primary} />
		<T.LineSegments>
			<T.EdgesGeometry args={[geometry]} />
			<T.LineBasicMaterial toneMapped={false} color={themeState.fullTheme.onPrimary} />
		</T.LineSegments>
	</T.Mesh>
</View>
