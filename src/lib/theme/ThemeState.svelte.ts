import { RollContainerType, THEMES, ThemeName } from './ThemeData';

class ThemeManager {
	currentThemeName = $state<ThemeName>(ThemeName.Multiverse);

	fullTheme = $derived.by(() => {
		const theme = THEMES[this.currentThemeName];

		if (!theme) return THEMES[ThemeName.Multiverse];

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
	}
}

export const themeState = new ThemeManager();
