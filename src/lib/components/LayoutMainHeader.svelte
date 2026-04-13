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

<svelte:element this={tag} class="l-main-header">
	{@render children?.()}
</svelte:element>

<style lang="scss">
	.l-main-header {
		position: fixed;
		inset: auto 1rem 1rem 1rem;
	}
</style>
