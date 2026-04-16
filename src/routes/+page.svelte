<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type PageData } from './$types';
	import CompositionParseContent from '$lib/components/CompositionParseContent.svelte';
	import LayoutListRow from '$lib/components/LayoutListRow.svelte';
	import LayoutListRows from '$lib/components/LayoutListRows.svelte';
	import VisualCell from '$lib/components/VisualCell.svelte';
	import VisualListRow from '$lib/components/VisualListRow.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		data: PageData;
	}

	/**
	 * PROPS
	 */
	const { data }: Props = $props();
</script>

<LayoutListRows>
	{#each data.portfolio as { handle, year, title, type, medium, location }, index (index)}
		<VisualListRow href="/portfolio/{handle}">
			<LayoutListRow>
				<VisualCell>{year}</VisualCell>
				<VisualCell><CompositionParseContent content={title} /></VisualCell>
				<VisualCell>{type}</VisualCell>
				<VisualCell>{medium}</VisualCell>
				<VisualCell>{location}</VisualCell>
			</LayoutListRow>
		</VisualListRow>
	{/each}
</LayoutListRows>
