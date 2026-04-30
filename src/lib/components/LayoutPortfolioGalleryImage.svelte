<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		tag?: string;
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', children }: Props = $props();
</script>

<svelte:element this={tag} class="l-portfolio-gallery-image">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-portfolio-gallery-image {
		--portfolio-gallery-image-grid-area: 1 / 1;
		--portfolio-gallery-image-width: 100vw;
		--portfolio-gallery-image-height: 100vh;

		position: absolute;
		inset: 0;
		display: grid;
		align-items: stretch;
		justify-content: stretch;
	}
</style>
