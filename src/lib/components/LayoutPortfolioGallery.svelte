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

<svelte:element this={tag} class="l-portfolio-gallery">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-portfolio-gallery {
		position: fixed;
		inset: 0;
	}
</style>
