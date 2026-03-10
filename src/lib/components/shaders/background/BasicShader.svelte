<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import type { ShaderMaterial } from 'three';

	let material: ShaderMaterial | undefined = $state();

	const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0); 
        }
    `;

	const fragmentShader = `
        uniform float uTime;
        varying vec2 vUv;
        
        void main() {
            vec3 color = vec3(vUv.x + sin(uTime) * 0.5, vUv.y, 0.5);
            gl_FragColor = vec4(color, 1.0);
        }
    `;

	useTask((delta) => {
		if (material) {
			material.uniforms.uTime.value += delta;
		}
	});
</script>

<T.OrthographicCamera makeDefault position={[0, 0, 1]} />
<T.Mesh frustumCulled={false}>
	<T.PlaneGeometry args={[2, 2]} />
	<T.ShaderMaterial
		bind:ref={material}
		{vertexShader}
		{fragmentShader}
		uniforms={{ uTime: { value: 0.0 } }}
		depthWrite={false}
	/>
</T.Mesh>
