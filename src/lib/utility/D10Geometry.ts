import { PolyhedronGeometry } from 'three';

export function createD10Geometry(): PolyhedronGeometry {
	const vertices: number[] = [];
	const indices: number[] = [];

	// Top pole (vertex 0)
	vertices.push(0, 1, 0);

	// 10 equatorial vertices in a zigzag pattern (vertices 1-10)
	for (let i = 0; i < 10; i++) {
		const angle = (i / 10) * Math.PI * 2;
		const y = i % 2 === 0 ? 0.105 : -0.105; // slight offset above/below equator
		vertices.push(Math.cos(angle), y, Math.sin(angle));
	}

	// Bottom pole (vertex 11)
	vertices.push(0, -1, 0);

	// 10 upper faces: top pole connects to pairs of equatorial vertices
	for (let i = 0; i < 10; i++) {
		const a = 1 + i;
		const b = 1 + ((i + 1) % 10);
		indices.push(0, a, b);
	}

	// 10 lower faces: bottom pole connects to pairs of equatorial vertices
	for (let i = 0; i < 10; i++) {
		const a = 1 + i;
		const b = 1 + ((i + 1) % 10);
		indices.push(11, b, a);
	}

	return new PolyhedronGeometry(vertices, indices, 1, 0);
}
