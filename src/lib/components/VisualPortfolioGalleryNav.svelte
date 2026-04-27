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

<nav class="v-portfolio-gallery-nav">
	{@render children?.()}
</nav>

<style lang="scss">
	.v-portfolio-gallery-nav {
	}
</style>
