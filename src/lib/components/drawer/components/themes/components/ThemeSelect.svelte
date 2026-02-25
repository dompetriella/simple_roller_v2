<script lang="ts">
	import type { ThemeColors } from '$lib/models/ThemeData';
	import { themeState } from '$lib/state/ThemeState.svelte';
	import { THEMES, type ThemeName } from '$lib/theme/Themes';

	let { themeName, themePalette }: { themeName: string; themePalette: ThemeColors } = $props();
</script>

<button onclick={() => themeState.setTheme(themeName as ThemeName)}> {themeName}</button>
