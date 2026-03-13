export enum DrawerTab {
	Settings = 'Settings',
	Themes = 'Themes',
	History = 'History',
	Stats = 'Stats'
}

class DrawerState {
	isOpen: boolean = $state<boolean>(false);
	currentTab: DrawerTab = $state(DrawerTab.Settings);
	dragOffset: number = $state(0);

	toggle() {
		this.isOpen = !this.isOpen;
	}

	close() {
		this.isOpen = false;
		this.dragOffset = 0;
	}

	changeTab(newTab: DrawerTab) {
		this.currentTab = newTab;
	}
}

export const drawerState = new DrawerState();
