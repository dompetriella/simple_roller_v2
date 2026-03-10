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
	static readonly IdleDiceRotation = 'idleDiceRotation';
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
	},
	idleDiceRotation: {
		type: SettingsType.Switch,
		id: SettingsKeys.IdleDiceRotation,
		title: 'Idle Dice Rotation',
		description:
			'When enabled, dice will slowly rotate while not being rolled.  If disabled, dice will only rotate when rolled',
		defaultValue: true
	}
} as const;
