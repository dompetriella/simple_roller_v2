export enum ThemeName {
	Midnight = 'Midnight',
	Blinding = 'Blinding',
	Multiverse = 'Multiverse'
	// Solar = 'Solar',
	// Neon = 'Neon'
}

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

export const THEMES: Record<ThemeName, ThemeColors> = {
	[ThemeName.Multiverse]: {
		diceColor: '#FAFAFA',
		diceOutlineColor: '#101010',
		diceHighlightColor: '#FA824C',

		surface: '#101010',
		onSurface: '#FAFAFA',
		primary: '#642CA9',
		onPrimary: '#FAFAFA',
		secondary: '#220135',
		onSecondary: '#FAFAFA'
	},
	[ThemeName.Midnight]: {
		diceColor: '#101010',
		diceOutlineColor: '#FAFAFA',
		diceHighlightColor: '#220135',

		surface: '#101010',
		onSurface: '#FAFAFA'
	},
	[ThemeName.Blinding]: {
		diceColor: '#FAFAFA',
		diceOutlineColor: '#101010',
		diceHighlightColor: '#FFA500',

		surface: '#FAFAFA',
		onSurface: '#101010'
	}
	// [ThemeName.Neon]: {
	// 	surface: '#FDF6E3',
	// 	onSurface: '#073642',
	// 	primary: '#268BD2',
	// 	onPrimary: '#FFFFFF',
	// 	secondary: '#D33682',
	// 	onSecondary: '#FFFFFF'
	// }
};
