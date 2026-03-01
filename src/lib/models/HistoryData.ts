import type { DiceType } from './DieData';

export type HistoryData = {
	id: string;
	dateTime: Date;
	diceType: DiceType;
	diceRolls: number[];
};
