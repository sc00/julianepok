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
		margin: 0;
		padding: 0;
		grid-template-columns: 10rem 3fr 2fr 3fr 2fr;
	}
</style>
