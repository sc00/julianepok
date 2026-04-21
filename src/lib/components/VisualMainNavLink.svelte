<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type Pathname } from '$app/types';
	import { resolve } from '$app/paths';

	/**
	 * TYPES
	 */
	interface Props {
		text: string;
		href: Pathname;
	}

	/**
	 * PROPS
	 */
	let { href, text }: Props = $props();
</script>

<a class="v-main-nav-link" href={resolve(href)}>{text}</a>

<style lang="scss">
	.v-main-nav-link {
		line-height: 1.25;
		color: inherit;
		text-transform: uppercase;
		text-decoration: none;
		transition:
			color 0.15s ease-in-out,
			background-color 0.15s ease-in-out;

		&:hover {
			color: var(--clr-body-text-contrast);
			background-color: var(--clr-body-text);
		}
	}
</style>
