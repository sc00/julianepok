<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Pathname } from '$app/types';
	import type { Snippet } from 'svelte';
	import { resolve } from '$app/paths';

	/**
	 * TYPES
	 */
	interface Props {
		children?: Snippet;
		href: Pathname;
	}

	/**
	 * PROPS
	 */
	let { children, href }: Props = $props();
</script>

<a class="v-list-row" href={resolve(href)}>
	{@render children?.()}
</a>

<style lang="scss">
	.v-list-row {
		padding: 0.5625rem var(--spacing-list-indent) 0.625rem;
		text-transform: lowercase;
		text-decoration: none;
		border: solid thin var(--clr-body-text);
		transition:
			color 0.15s ease-in-out,
			background-color 0.15s ease-in-out;

		&:not(:first-of-type) {
			border-top: none;
		}

		&:hover {
			color: var(--clr-body-text-contrast);
			background-color: var(--clr-body-text);
		}
	}
</style>
