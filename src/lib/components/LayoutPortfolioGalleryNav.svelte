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

<svelte:element this={tag} class="l-portfolio-gallery-nav">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-portfolio-gallery-nav {
		z-index: 10;
		position: absolute;
		inset: 50% 1rem auto;
		translate: 0 -50%;
	}
</style>
