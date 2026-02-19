import { THEMES, ThemeName } from './ThemeData';

class ThemeManager {
	currentThemeName = $state<ThemeName>(ThemeName.Midnight);

	fullTheme = $derived.by(() => {
		const theme = THEMES[this.currentThemeName];

		if (!theme) return THEMES[ThemeName.Midnight];

		return {
			...theme,
			secondarySurface: theme.secondarySurface ?? theme.surface,
			secondaryOnSurface: theme.secondaryOnSurface ?? theme.onSurface
		};
	});

	setTheme(name: ThemeName) {
		this.currentThemeName = name;
	}
}

export const themeState = new ThemeManager();
