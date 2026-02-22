import { type ThemeColors } from '../models/ThemeData';

export enum ThemeName {
	Midnight = 'Midnight',
	Daybreak = 'Daybreak',
	Galactic = 'Galactic'
	// Solar = 'Solar',
	// Neon = 'Neon'
}

export const THEMES: Record<ThemeName, ThemeColors> = {
	[ThemeName.Galactic]: {
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
		diceHighlightColor: '#FAFAFA',

		surface: '#101010',
		onSurface: '#FAFAFA'
	},
	[ThemeName.Daybreak]: {
		diceColor: '#FAFAFA',
		diceOutlineColor: '#101010',
		diceHighlightColor: '#101010',

		surface: '#FAFAFA',
		onSurface: '#101010'
	}
};
