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
		position: relative;

		&::after {
			z-index: 1;
			position: fixed;
			display: block;
			inset: auto 1rem 0;
			height: 3.75rem;
			content: '';
			background-color: var(--clr-body-background);
		}
	}
</style>
