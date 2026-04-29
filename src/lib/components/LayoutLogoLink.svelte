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

<svelte:element this={tag} class="l-logo">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-logo {
		z-index: 1000;
		position: fixed;
		inset: 1.25rem 1.75rem auto auto;
		display: none;
		width: 1rem;
		height: 1rem;
	}

	@media screen and (min-width: 800px) {
		.l-logo {
			display: grid;
		}
	}
</style>
