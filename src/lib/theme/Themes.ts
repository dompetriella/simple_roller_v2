import { type ThemeColors } from '../models/ThemeData';

export enum ThemeName {
	Midnight = 'Midnight',
	Daybreak = 'Daybreak',
	Galactic = 'Galactic'
	// Solar = 'Solar',
	// Neon = 'Neon'
}

export const THEMES: Record<ThemeName, ThemeColors> = {
	[ThemeName.Midnight]: {
		surface: '#101010',
		onSurface: '#FAFAFA',

		diceColor: '#101010',
		diceOutlineColor: '#FAFAFA',
		diceHighlightColor: '#FAFAFA'
	},
	[ThemeName.Daybreak]: {
		surface: '#FAFAFA',
		onSurface: '#101010',

		diceColor: '#FAFAFA',
		diceOutlineColor: '#101010',
		diceHighlightColor: '#101010'
	},
	[ThemeName.Galactic]: {
		surface: '#101010',
		onSurface: '#FAFAFA',
		primary: '#642CA9',
		onPrimary: '#FAFAFA',
		secondary: '#220135',
		onSecondary: '#FAFAFA',

		diceColor: '#FAFAFA',
		diceOutlineColor: '#101010',
		diceHighlightColor: '#FA824C'
	}
};
