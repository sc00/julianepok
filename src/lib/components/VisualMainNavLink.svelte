<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type RouteId } from '$app/types';
	import { resolve } from '$app/paths';

	/**
	 * TYPES
	 */
	interface Props {
		text: string;
		href: RouteId;
	}

	/**
	 * PROPS
	 */
	let { href, text }: Props = $props();
</script>

<a class="v-main-nav-link" href={resolve(href)}>{text}</a>

<style lang="scss">
	.v-main-nav-link {
		font-size: 1.125rem;
		line-height: 1.25rem;
		color: inherit;
		text-transform: uppercase;
		text-decoration: none;

		&:hover {
			color: var(--clr-body-text-contrast);
			background-color: var(--clr-body-text);
		}
	}
</style>
