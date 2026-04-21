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

<svelte:element this={tag} class="l-main-nav-items">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-main-nav-items {
		display: grid;
		gap: 1rem;
		margin: 0;
		padding: 0;
	}

	@media screen and (min-width: 800px) {
		.l-main-nav-items {
			grid-template-columns: var(--spacing-list-columns);
			gap: var(--spacing-list-column-gap);
		}
	}
</style>
