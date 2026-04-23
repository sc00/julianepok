<script lang="ts">
	import CompositionParseContent from '$lib/components/CompositionParseContent.svelte';
	import LayoutPortfolioItemHeader from '$lib/components/LayoutPortfolioItemHeader.svelte';
	/**
	 * IMPORTS
	 */
	import VisualPortfolioItemTitle from '$lib/components/VisualPortfolioItemTitle.svelte';
	import VisualToggleButton from '$lib/components/VisualToggleButton.svelte';
	import { type PageData } from './$types';

	/**
	 * TYPES
	 */
	interface Props {
		data: PageData;
	}

	/**
	 * PROPS
	 */
	let { data }: Props = $props();

	/**
	 * VARIABLES
	 */
	let isToggled = $state(false);
</script>

<LayoutPortfolioItemHeader tag="header">
	<VisualToggleButton
		label={isToggled ? 'Show Gallery' : 'Show Description'}
		onclick={() => (isToggled = !isToggled)}
	/>
	<VisualPortfolioItemTitle>
		<CompositionParseContent content={data.item.title} />
	</VisualPortfolioItemTitle>
</LayoutPortfolioItemHeader>

<div class="gallery"></div>

<style lang="scss">
	.gallery {
		z-index: -1;
		position: fixed;
		inset: 0;
		background-image: url('/assets/portfolio/1.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
