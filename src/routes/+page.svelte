<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { portfolio } from '$lib/constants';
	import LayoutListRow from '$lib/components/LayoutListRow.svelte';
	import VisualCell from '$lib/components/VisualCell.svelte';
	import VisualListRow from '$lib/components/VisualListRow.svelte';
	import LayoutListRows from '$lib/components/LayoutListRows.svelte';
</script>

<LayoutListRows>
	{#each portfolio as { handle, year, title, type, medium, location }, index (index)}
		<VisualListRow href="/portfolio/{handle}">
			<LayoutListRow>
				<VisualCell>{year}</VisualCell>
				<VisualCell>{title}</VisualCell>
				<VisualCell>{type}</VisualCell>
				<VisualCell>{medium}</VisualCell>
				<VisualCell>{location}</VisualCell>
			</LayoutListRow>
		</VisualListRow>
	{/each}
</LayoutListRows>
