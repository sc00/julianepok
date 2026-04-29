<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { children }: Props = $props();
</script>

<div class="v-list">
	{@render children?.()}
</div>

<style lang="scss">
	.v-list {
		&::after {
			z-index: 1;
			position: fixed;
			display: block;
			inset: auto 1rem 0;
			height: 3.3125rem;
			content: '';
			background-color: var(--clr-body-background);
		}
	}
</style>
