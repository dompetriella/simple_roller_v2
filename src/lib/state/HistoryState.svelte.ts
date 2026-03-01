import type { DiceType } from '$lib/models/DieData';
import type { HistoryData } from '$lib/models/HistoryData';

class HistoryState {
	data: HistoryData[] = $state([]);

	addRollToHistory({ diceType, rollList }: { diceType: DiceType; rollList: number[] }) {
		const newRoll: HistoryData = {
			id: crypto.randomUUID(),
			dateTime: new Date(),
			diceType: diceType,
			diceRolls: rollList
		};
		this.data = [...this.data, newRoll];
	}

	deleteRollFromHistory(rollId: string) {
		this.data = [
			...this.data.filter((roll) => {
				return roll.id !== rollId;
			})
		];
	}
}

export const historyState = new HistoryState();
