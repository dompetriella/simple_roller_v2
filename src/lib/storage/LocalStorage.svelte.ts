export class LocalStorage<T> {
	private key: string;
	private current: T = $state() as T;

	constructor(key: string, initialValue: T) {
		this.key = key;

		let savedValue = initialValue;
		// make sure we're in the browser
		if (typeof window !== 'undefined') {
			const item = localStorage.getItem(this.key);
			if (item !== null) {
				try {
					savedValue = JSON.parse(item);
				} catch (e) {
					console.error('Failed to parse local storage, falling back to default');
				}
			}
		}

		this.current = savedValue;
	}
}
