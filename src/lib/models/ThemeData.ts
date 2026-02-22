export enum RollContainerType {
	HollowOrb = '35%',
	Orb = '50%',
	Solid = '100%'
}

export type ThemeColors = {
	diceColor: string;
	diceOutlineColor: string;
	diceHighlightColor?: string;

	surface: string;
	onSurface: string;
	primary?: string;
	onPrimary?: string;
	secondary?: string;
	onSecondary?: string;

	secondarySurface?: string;
	onSecondarySurface?: string;

	rollContainerType?: string;
};
