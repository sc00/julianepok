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

<svelte:element this={tag} class="l-portfolio-gallery-nav-items">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-portfolio-gallery-nav-items {
		display: flex;
		justify-content: space-between;
		margin: 0;
		padding: 0;
	}
</style>
