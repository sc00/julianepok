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
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { tag = 'div', children }: Props = $props();
</script>

<svelte:element this={tag} class="l-main-nav-link">
	{@render children()}
</svelte:element>

<style lang="scss">
	.l-main-nav-link {
		display: flex;
		justify-content: center;
		height: 1.25rem;
	}

	@media screen and (min-width: 800px) {
		.l-main-nav-link {
			display: block;
		}
	}
</style>
