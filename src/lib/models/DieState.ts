import type { Component, Snippet } from 'svelte';

export const DICE_VALUES = [20, 6, 4, 8, 10, 12];

export type DieState = {
	target: HTMLDivElement | undefined;

	multiplier: number;
	rollList: number[];

	isHovered: boolean;
	isPressed: boolean;
	isRolling: boolean;
};
