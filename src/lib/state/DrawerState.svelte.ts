export enum DrawerTab {
	Settings = 'Settings',
	Themes = 'Themes',
	History = 'History',
	Stats = 'Stats'
}

class DrawerState {
	isOpen: boolean = $state<boolean>(false);
	currentTab: DrawerTab = $state(DrawerTab.Settings);

	toggle() {
		this.isOpen = !this.isOpen;
	}

	close() {
		this.isOpen = false;
	}

	changeTab(newTab: DrawerTab) {
		this.currentTab = newTab;
	}
}

export const drawerState = new DrawerState();
