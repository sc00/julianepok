<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type PageData } from './$types';
	import CompositionParseContent from '$lib/components/CompositionParseContent.svelte';
	import LayoutList from '$lib/components/LayoutList.svelte';
	import LayoutListRow from '$lib/components/LayoutListRow.svelte';
	import LayoutListBody from '$lib/components/LayoutListBody.svelte';
	import VisualCell from '$lib/components/VisualCell.svelte';
	import VisualListRow from '$lib/components/VisualListRow.svelte';
	import VisualListHeader from '$lib/components/VisualListHeader.svelte';
	import VisualList from '$lib/components/VisualList.svelte';

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

<VisualList>
	<LayoutList>
		<VisualListHeader>
			<LayoutListRow>
				<VisualCell>Year</VisualCell>
				<VisualCell>Title</VisualCell>
				<VisualCell>Type</VisualCell>
				<VisualCell>Medium</VisualCell>
				<VisualCell>Location</VisualCell>
			</LayoutListRow>
		</VisualListHeader>
		<LayoutListBody>
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
		</LayoutListBody>
	</LayoutList>
</VisualList>
