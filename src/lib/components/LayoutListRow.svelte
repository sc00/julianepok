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

<svelte:element this={tag} class="l-list-row">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-list-row {
		display: grid;
		grid-template-columns: minmax(5rem, 2fr) 8fr 5fr 7fr 5fr;
		gap: 1rem;
	}
</style>
