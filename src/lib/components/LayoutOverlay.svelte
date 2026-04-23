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
		zIndex?: number;
		isVisible?: boolean;
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', zIndex = 0, isVisible = true, children }: Props = $props();
</script>

<svelte:element this={tag} class="l-overlay" style="z-index: {zIndex}" aria-hidden={!isVisible}>
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-overlay {
		position: fixed;
		inset: 0;
		display: grid;

		&[aria-hidden='true'] {
			pointer-events: none;
		}
	}
</style>
