export enum SettingsKey {
	AllowMultipleDice = 'Allow Multiple Dice',
	BatterySaver = 'Battery Saver'
}

interface SettingsMap {
	[SettingsKey.AllowMultipleDice]: boolean;
	[SettingsKey.BatterySaver]: boolean;
}

class SettingsState {
	data = $state<SettingsMap>({
		[SettingsKey.AllowMultipleDice]: false,
		[SettingsKey.BatterySaver]: false
	});

	updateValue<K extends SettingsKey>(key: K, value: SettingsMap[K]) {
		console.log(key);
		console.log(value);
		this.data[key] = value;
	}
}

export const settingsState = new SettingsState();
