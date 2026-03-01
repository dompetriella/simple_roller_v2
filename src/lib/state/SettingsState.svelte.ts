import { SETTINGS_CONFIG, SettingsKeys } from '$lib/models/Settings';

class SettingsState {
	data = $state<Record<string, any>>(
		Object.fromEntries(Object.values(SETTINGS_CONFIG).map((s) => [s.id, s.defaultValue]))
	);

	updateValue(key: string, value: any) {
		this.data[key] = value;
	}
}

export const settingsState = new SettingsState();
