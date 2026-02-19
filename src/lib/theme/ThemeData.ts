export enum ThemeName {
	Midnight = 'Midnight',
	Solar = 'Solar',
	Neon = 'Neon'
}

export type ThemeColors = {
	surface: string;
	onSurface: string;
	primary: string;
	onPrimary: string;
	secondary: string;
	onSecondary: string;

	secondarySurface?: string;
	secondaryOnSurface?: string;
};

export const THEMES: Record<ThemeName, ThemeColors> = {
	[ThemeName.Midnight]: {
		surface: '#000000',
		onSurface: '#FFFFFF',
		primary: '#0000FF',
		onPrimary: '#00FF00',
		secondary: '#FF0000',
		onSecondary: '#000000'
	},
	[ThemeName.Solar]: {
		surface: '#FDF6E3',
		onSurface: '#073642',
		primary: '#268BD2',
		onPrimary: '#FFFFFF',
		secondary: '#D33682',
		onSecondary: '#FFFFFF'
	},
	[ThemeName.Neon]: {
		surface: '#FDF6E3',
		onSurface: '#073642',
		primary: '#268BD2',
		onPrimary: '#FFFFFF',
		secondary: '#D33682',
		onSecondary: '#FFFFFF'
	}
};
