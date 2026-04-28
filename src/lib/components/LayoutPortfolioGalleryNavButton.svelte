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

<svelte:element this={tag} class="l-portfolio-gallery-nav-button">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-portfolio-gallery-nav-button {
		display: grid;
		width: 3rem;
		height: 2rem;
	}
</style>
