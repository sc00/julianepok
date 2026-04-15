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

<svelte:element this={tag} class="l-main-nav">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-main-nav {
		margin: 0 1rem 1rem 1rem;
	}
</style>
