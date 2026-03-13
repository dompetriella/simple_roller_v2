export enum DrawerTab {
	Settings = 'Settings',
	Themes = 'Themes',
	History = 'History',
	Stats = 'Stats'
}

class DrawerState {
	isOpen: boolean = $state<boolean>(false);
	currentTab: DrawerTab = $state(DrawerTab.Settings);

	readonly closeThreshold: number = 100;
	dragOffset: number = $state(0);
	isDragging: boolean = $state(false);

	toggle() {
		this.isOpen = !this.isOpen;
	}

	close() {
		this.isOpen = false;
		this.dragOffset = 0;
		this.isDragging = false;
	}

	changeTab(newTab: DrawerTab) {
		this.currentTab = newTab;
	}

	setDragOffset(offset: number) {
		this.dragOffset = Math.max(0, offset);
	}

	setIsDragging(state: boolean) {
		this.isDragging = state;
	}

	resetDrag() {
		this.dragOffset = 0;
		this.isDragging = false;
	}
}

export const drawerState = new DrawerState();
