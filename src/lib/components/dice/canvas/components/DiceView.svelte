<script lang="ts">
	import type { DieData } from '$lib/models/DieData';
	import { themeState } from '$lib/state/ThemeState.svelte';
	import { generateRandomInt } from '$lib/utility/Numbers';
	import { T, useTask } from '@threlte/core';
	import { View } from '@threlte/extras';
	import { BoxGeometry, Color, LineBasicMaterial, MeshBasicMaterial } from 'three';

	let {
		dieState,
		geometry
	}: {
		dieState: DieData;
		geometry: any;
	} = $props();

	// Initial Direction and Speed Values
	const idleSpeed = 1;
	const rollSpeed = 25;
	const interpolationFactor = 0.25;

	let currentSpeed = $state(idleSpeed);

	let rotationX = $state(generateRandomInt(0, 180));
	let rotationY = $state(generateRandomInt(0, 180));
	let rotationZ = $state(generateRandomInt(0, 180));

	// Initial Scale Values
	const idleScale = 2.4;

	// Initial Color Values
	let dieMaterial: MeshBasicMaterial = $state(new MeshBasicMaterial());
	let outlineMaterial: LineBasicMaterial = $state(new LineBasicMaterial());

	const initialDieColor = $derived(new Color(themeState.fullTheme.diceColor));
	const dieHighlightColor = $derived(new Color(themeState.fullTheme.diceHighlightColor));
	const initialDieOutlineColor = $derived(new Color(themeState.fullTheme.diceOutlineColor));
	const dieHighlightOutlineColor = $derived(new Color(themeState.fullTheme.diceColor));

	useTask((delta) => {
		let targetSpeed = dieState.isRolling ? rollSpeed : idleSpeed;

		currentSpeed = currentSpeed + (targetSpeed - currentSpeed) * interpolationFactor;

		rotationX += delta * 0.5 * currentSpeed;
		rotationY += delta * 0.25 * currentSpeed;
		rotationZ += delta * 0.05 * currentSpeed;

		let lerpValue = (currentSpeed - idleSpeed) / (rollSpeed - idleSpeed);

		if (dieMaterial && outlineMaterial) {
			dieMaterial.color.lerpColors(initialDieColor, dieHighlightColor, lerpValue);
			outlineMaterial.color.lerpColors(initialDieOutlineColor, dieHighlightOutlineColor, lerpValue);
		}
	});
</script>

<View dom={dieState.target}>
	<T.Mesh
		scale={idleScale}
		position={[0, 0, 0]}
		rotation.y={rotationY}
		rotation.x={rotationX}
		rotation.z={rotationZ}
		{geometry}
	>
		<T.MeshBasicMaterial
			bind:ref={dieMaterial}
			toneMapped={false}
			color={initialDieColor}
			side={2}
		/>
		<T.LineSegments>
			<T.EdgesGeometry args={[geometry]} />
			<T.LineBasicMaterial
				bind:ref={outlineMaterial}
				toneMapped={false}
				color={initialDieOutlineColor}
			/>
		</T.LineSegments>
	</T.Mesh>
</View>
