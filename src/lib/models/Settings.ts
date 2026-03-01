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
	static readonly BatterySaver = 'batterySaver';
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
	batterSaver: {
		type: SettingsType.Switch,
		id: SettingsKeys.BatterySaver,
		title: 'Battery Saver',
		description: 'Turns off expensive animations to save battery (3D Rotation, Shaders, etc)',
		defaultValue: false
	}
} as const;
