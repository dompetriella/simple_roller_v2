import { RollContainerType, type ThemeColors } from '../models/ThemeData';

export enum ThemeName {
	Midnight = 'Midnight',
	Daybreak = 'Daybreak',
	Galactic = 'Galactic',
	Pulse = 'Pulse',
	Nightshade = 'Nightshade',
	Verdant = 'Verdant',
	Harvest = 'Harvest',
	Dusk = 'Dusk',
	Glacier = 'Glacier',
	Fireball = 'Fireball',
	Brimstone = 'Brimstone',
	Doldrums = 'Doldrums'
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
	},
	[ThemeName.Pulse]: {
		surface: '#241002',
		onSurface: '#FDF2E1',
		primary: '#430D0B',
		onPrimary: '#FDF2E1',
		secondary: '#241002',
		onSecondary: '#FDF2E1',

		diceColor: '#9B1B3B',
		diceOutlineColor: '#FDF2E1',
		diceHighlightColor: '#FDF2E1'
	},
	[ThemeName.Nightshade]: {
		surface: '#1B073D',
		onSurface: '#F1F1F1',
		primary: '#120429',
		onPrimary: '#F1F1F1',

		diceColor: '#120429',
		diceOutlineColor: '#F1F1F1',
		diceHighlightColor: '#BF9EE8'
	},
	[ThemeName.Verdant]: {
		surface: '#1C4A1B',
		onSurface: '#F0F0F0',
		primary: '#3B8E39',
		onPrimary: '#F1F1F1',
		secondary: '#BDEEAC',
		onSecondary: '#F1F1F1',

		diceColor: '#BDEEAC',
		diceOutlineColor: '#3B8E39',
		diceHighlightColor: '#50B5B5',
		rollContainerType: RollContainerType.Orb
	},
	[ThemeName.Harvest]: {
		surface: '#511C29',
		onSurface: '#F3F3F3',
		primary: '#394032',
		onPrimary: '#F3F3F3',

		diceColor: '#AF4A00',
		diceOutlineColor: '#F3F3F3',
		diceHighlightColor: '#EFB00A'
	},
	[ThemeName.Dusk]: {
		surface: '#392033',
		onSurface: '#D9D9D9',
		primary: '#FFE577',
		onPrimary: '#392033',

		diceColor: '#FFE577',
		diceOutlineColor: '#392033',
		diceHighlightColor: '#FD6051'
	},
	[ThemeName.Fireball]: {
		surface: '#911C1E',
		onSurface: '#FFFFFF',
		primary: '#F56A05',
		onPrimary: '#FFFFFF',
		secondary: '#FFF268',

		diceColor: '#F56A05',
		diceOutlineColor: '#FFFFFF',
		diceHighlightColor: '#FFF268',
		rollContainerType: RollContainerType.Orb
	},
	[ThemeName.Brimstone]: {
		surface: '#471113',
		onSurface: '#D9D9D9',
		primary: '#101010',
		onPrimary: '#D9D9D9',

		diceColor: '#F3DB59',
		diceOutlineColor: '#471113',
		diceHighlightColor: '#101010'
	},
	[ThemeName.Glacier]: {
		surface: '#1B073D',
		onSurface: '#E3E3E3',
		primary: '#2A4ABB',
		onPrimary: '#E3E3E3',
		secondary: '#ADF3F3',
		onSecondary: '#1B073D',

		diceColor: '#2A4ABB',
		diceOutlineColor: '#E3E3E3',
		diceHighlightColor: '#8A9FFF',
		rollContainerType: RollContainerType.Orb
	},
	[ThemeName.Doldrums]: {
		surface: '#888888',
		onSurface: '#28272F',
		primary: '#515151',
		onPrimary: '#28272F',

		diceColor: '#515151',
		diceOutlineColor: '#28272F',
		diceHighlightColor: '#D9D9D9',
		rollContainerType: RollContainerType.Orb
	}
};
