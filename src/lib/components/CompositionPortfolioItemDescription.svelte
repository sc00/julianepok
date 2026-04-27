<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';
	import VisualPortfolioItemDescription from './VisualPortfolioItemDescription.svelte';
	import LayoutMeasure from './LayoutMeasure.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { children }: Props = $props();
</script>

<VisualPortfolioItemDescription>
	<LayoutMeasure>
		{@render children?.()}
	</LayoutMeasure>
</VisualPortfolioItemDescription>
