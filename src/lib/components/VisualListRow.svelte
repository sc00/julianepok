<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { RouteId } from '$app/types';
	import type { Snippet } from 'svelte';
	import { resolve } from '$app/paths';

	/**
	 * TYPES
	 */
	interface Props {
		children?: Snippet;
		href: RouteId;
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
		padding: 0 4rem;
		text-decoration: none;
		border: solid thin var(--clr-body-text);

		&:not(:first-of-type) {
			border-top: none;
		}

		&:hover {
			color: var(--clr-body-text-contrast);
			background-color: var(--clr-body-text);
		}
	}
</style>
