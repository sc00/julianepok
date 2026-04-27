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

<svelte:element this={tag} class="l-portfolio-item-header">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-portfolio-item-header {
		z-index: 100;
		position: fixed;
		display: grid;
		grid-template-columns: max-content 10rem;
		grid-template-rows: 2.375rem;
		align-items: start;
		gap: 0.625rem;
	}
</style>
