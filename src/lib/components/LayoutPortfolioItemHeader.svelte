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
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', children }: Props = $props();
</script>

<svelte:element this={tag} class="l-portfolio-item-header">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-portfolio-item-header {
		display: grid;
		grid-template-columns: 18rem max-content;
		justify-content: space-between;
		width: 100%;
	}
</style>
