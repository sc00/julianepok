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

<div class="v-portfolio-item-description">
	{@render children?.()}
</div>

<style lang="scss">
	.v-portfolio-item-description {
		padding: 6rem 0 2.5rem;
		font-size: 1.375rem;

		&::before {
			z-index: 1;
			position: fixed;
			display: block;
			inset: 0 1rem auto;
			// height: 4.5rem;
			height: 6rem;
			content: '';
			background: linear-gradient(to bottom, var(--clr-body-background) 70%, transparent 100%);
		}

		&::after {
			z-index: 1;
			position: fixed;
			display: block;
			inset: auto 1rem 0;
			// height: 4.5rem;
			height: 6rem;
			content: '';
			background: linear-gradient(
				to bottom,
				transparent 0%,
				var(--clr-body-background) 30%,
				var(--clr-body-background) 100%
			);
		}
	}

	@media screen and (min-width: 800px) {
		.v-portfolio-item-description {
			padding: 4rem 0 2.5rem;
			font-size: 1.75rem;
		}
	}
</style>
