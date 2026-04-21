<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		isMobileMenuOpen: boolean;
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { isMobileMenuOpen, children }: Props = $props();
</script>

<nav class="v-main-nav" aria-current={isMobileMenuOpen ? 'true' : null}>
	{@render children?.()}
</nav>

<style lang="scss">
	.v-main-nav {
		padding: 1.25rem;
		border: solid thin var(--clr-body-text);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.25s ease-in-out;

		&::before {
			z-index: -1;
			position: fixed;
			inset: 0;
			content: '';
			backdrop-filter: blur(0.5rem);
			opacity: 0;
			transition: opacity 0.25s ease-in-out;
		}

		&[aria-current='true'] {
			opacity: 1;
			pointer-events: all;

			&::before {
				opacity: 1;
			}
		}
	}

	@media screen and (min-width: 800px) {
		.v-main-nav {
			padding: 0.5rem var(--spacing-list-indent) 0.75rem;
			opacity: 1;
			pointer-events: all;

			&::before {
				content: none;
			}
		}
	}
</style>
