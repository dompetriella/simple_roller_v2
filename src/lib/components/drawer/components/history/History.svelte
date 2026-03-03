<script lang="ts">
	import { historyState } from '$lib/state/HistoryState.svelte';
	import HistoryEntry from './components/HistoryEntry.svelte';
</script>

<section>
	<h1>History</h1>
	<div class="history-entry-container">
		{#if historyState.data.length > 0}
			{#each historyState.data as entry}
				<HistoryEntry historyData={entry} />
			{/each}
		{:else}
			<h2>[ No History Data ]</h2>
		{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	h1 {
		font-size: 2.5em;
		color: var(--onSurface);
		padding-bottom: 0.5em;
	}

	h2 {
		font-size: 1em;
		color: var(--onSurface);
		text-align: center;
	}

	.history-entry-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.5em;
	}
</style>
