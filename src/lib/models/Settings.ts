enum SettingsType {
	Switch,
	Text,
	Slider
}

export interface BaseSetting {
	id: string;
	type: SettingsType;
	title: string;
	description: string;
}

export interface ToggleSetting extends BaseSetting {
	defaultValue: boolean;
}

export class SettingsKeys {
	static readonly AllowMultipleDice = 'allowMultipleDice';
	static readonly TwentyFourHourClock = 'twentyFourHourClock';
}

export type SettingDefinition = ToggleSetting;

export const SETTINGS_CONFIG = {
	allowMultipleDice: {
		type: SettingsType.Switch,
		id: SettingsKeys.AllowMultipleDice,
		title: 'Allow Multiple Dice',
		description: 'Enables addition/subtraction buttons for rolling multiple dice at once.',
		defaultValue: false
	},
	twentyFourHourClock: {
		type: SettingsType.Switch,
		id: SettingsKeys.TwentyFourHourClock,
		title: 'Use 24hr Clock',
		description: 'Changes any time settings to a 24hr Clock (default is 12hr AM/PM)',
		defaultValue: false
	}
} as const;
