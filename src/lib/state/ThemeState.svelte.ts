import { LocalStorage } from '$lib/storage/LocalStorage.svelte';
import { StorageKeys } from '$lib/storage/StorageKeys.svelte';
import { RollContainerType } from '../models/ThemeData';
import { ThemeName, THEMES } from '../theme/Themes';

export const defaultTheme = ThemeName.Midnight;

class ThemeState {
	currentThemeName = $state<ThemeName>(defaultTheme);

	fullTheme = $derived.by(() => {
		const theme = THEMES[this.currentThemeName];

		if (!theme) return THEMES[defaultTheme];

		return {
			...theme,
			primary: theme.primary ?? theme.surface,
			onPrimary: theme.onPrimary ?? theme.onSurface,

			diceHighlightColor: theme.diceHighlightColor ?? theme.primary,

			secondary: theme.secondary ?? theme.primary,
			onSecondary: theme.onSecondary ?? theme.onPrimary,
			secondarySurface: theme.secondarySurface ?? theme.surface,
			onSecondarySurface: theme.onSecondarySurface ?? theme.onSurface,
			rollContainerType: theme.rollContainerType ?? RollContainerType.HollowOrb
		};
	});

	setTheme(name: ThemeName) {
		this.currentThemeName = name;
		LocalStorage.saveData(StorageKeys.Theme, name);
	}
}

export const themeState = new ThemeState();
