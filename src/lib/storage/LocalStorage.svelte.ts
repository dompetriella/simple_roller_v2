import { settingsState } from '$lib/state/SettingsState.svelte';
import { defaultTheme, themeState } from '$lib/state/ThemeState.svelte';
import type { ThemeName } from '$lib/theme/Themes';
import { StorageKeys } from './StorageKeys.svelte';

let initialized = $state(false);

export class LocalStorage {
	static init() {
		if (typeof window === 'undefined') return;

		const themeFromStorage: ThemeName =
			LocalStorage.retrieveData(StorageKeys.Theme) ?? defaultTheme;
		if (themeFromStorage) {
			themeState.setTheme(themeFromStorage as ThemeName);
		}

		const settingsFromStorage = LocalStorage.retrieveData<Record<string, any>>(
			StorageKeys.Settings
		);
		if (settingsFromStorage) {
			settingsState.overwriteSettings(settingsFromStorage);
		}

		initialized = true;
	}

	static get isLocalStorageInitialized() {
		return initialized;
	}

	static retrieveData<T>(storageKey: string): T | null | undefined {
		if (typeof window !== 'undefined') {
			const item = localStorage.getItem(storageKey);
			if (item !== null) {
				try {
					return JSON.parse(item) as T;
				} catch (e) {
					console.error(`Failed to parse local storage for ${storageKey}, falling back to default`);
					return null;
				}
			}
		}
	}

	static saveData<T>(storageKey: string, data: T) {
		if (typeof window !== 'undefined') {
			try {
				localStorage.setItem(storageKey, JSON.stringify(data));
			} catch (e) {
				console.error(`Couldn't save value ${data}, error: ${e}`);
			}
		}
	}
}
