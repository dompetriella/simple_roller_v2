import { DiceType, type DieData } from '$lib/models/DieData';

const createDefaultDie = (overrides: Partial<DieData> = {}): DieData => ({
	target: undefined,
	multiplier: 1,
	rollList: [],
	isHovered: false,
	isPressed: false,
	isRolling: false,
	...overrides
});

class DiceState {
	data = $state<Record<DiceType, DieData>>({
		[DiceType.D4]: createDefaultDie(),
		[DiceType.D6]: createDefaultDie(),
		[DiceType.D8]: createDefaultDie(),
		[DiceType.D10]: createDefaultDie(),
		[DiceType.D12]: createDefaultDie(),
		[DiceType.D20]: createDefaultDie()
	});

	updateDie(id: DiceType, updatedState: Partial<DieData>) {
		if (this.data[id]) {
			Object.assign(this.data[id], updatedState);
		}
	}

	resetDie(id: DiceType) {
		this.data[id] = createDefaultDie();
	}

	setRollingStatus(id: DiceType, isRolling: boolean) {
		this.data[id].isRolling = isRolling;
	}
}

export const diceState = new DiceState();
