import { DICE_VALUES, type DieState } from '$lib/models/DieState';

const defaultDieState = (overrides: Partial<DieState> = {}): DieState => ({
	target: undefined,
	multiplier: 1,
	rollList: [],
	isHovered: false,
	isPressed: false,
	isRolling: false,
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
