<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		hideOnDesktop?: boolean;
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { hideOnDesktop = false, children }: Props = $props();
</script>

<li class={['v-main-nav-item', hideOnDesktop && 'v-main-nav-item--hide-on-desktop']}>
	{@render children?.()}
</li>

<style lang="scss">
	.v-main-nav-item {
		list-style: none;
	}

	@media screen and (min-width: 800px) {
		.v-main-nav-item--hide-on-desktop {
			display: none;
		}
	}
</style>
