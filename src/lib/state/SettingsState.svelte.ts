import { SETTINGS_CONFIG, SettingsKeys } from '$lib/models/Settings';
import { LocalStorage } from '$lib/storage/LocalStorage.svelte';
import { StorageKeys } from '$lib/storage/StorageKeys.svelte';

class SettingsState {
	data = $state<Record<string, any>>(
		Object.fromEntries(Object.values(SETTINGS_CONFIG).map((s) => [s.id, s.defaultValue]))
	);

	overwriteSettings(newSettings: Record<string, any>) {
		this.data = newSettings;
	}

	updateValue(key: string, value: any) {
		this.data[key] = value;
		LocalStorage.saveData(StorageKeys.Settings, this.data);
	}
}

export const settingsState = new SettingsState();
