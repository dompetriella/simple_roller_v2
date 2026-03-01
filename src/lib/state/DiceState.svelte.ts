import type { DieData } from '$lib/models/DieData';

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
	data = $state<Record<number, DieData>>({
		4: createDefaultDie(),
		6: createDefaultDie(),
		8: createDefaultDie(),
		10: createDefaultDie(),
		12: createDefaultDie(),
		20: createDefaultDie()
	});

	updateDie(id: number, updatedState: Partial<DieData>) {
		if (this.data[id]) {
			Object.assign(this.data[id], updatedState);
		}
	}

	resetDie(id: number) {
		this.data[id] = createDefaultDie();
	}

	resetAll() {
		Object.keys(this.data).forEach((id) => {
			this.data[Number(id)] = createDefaultDie();
		});
	}

	setRollingStatus(id: number, isRolling: boolean) {
		this.data[id].isRolling = isRolling;
	}
}

export const diceState = new DiceState();
