import { DICE_VALUES, type DieState } from '$lib/models/DiceState';

const defaultDieState = (overrides: Partial<DieState> = {}): DieState => ({
	target: undefined,
	multiplier: 1,
	rollList: [],
	isHovered: false,
	isPressed: false,
	isRolling: false,
	scale: 2.5,
	rotationSpeed: 1,
	...overrides
});

export const DiceState = $state<Record<number, DieState>>({
	4: defaultDieState(),
	6: defaultDieState(),
	8: defaultDieState(),
	10: defaultDieState(),
	12: defaultDieState(),
	20: defaultDieState()
});

export const updateDie = (id: number, updatedState: Partial<DieState>) => {
	Object.assign(DiceState[id], updatedState);
};
