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
		display: grid;
		margin: 0 1rem 1rem 1rem;
	}

	@media screen and (min-width: 800px) {
		.l-main-nav {
			display: none;
		}
	}
</style>
