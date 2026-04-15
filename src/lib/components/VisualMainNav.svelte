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

<nav class="v-main-nav">
	{@render children?.()}
</nav>

<style lang="scss">
	.v-main-nav {
		padding: 0.5rem 4rem 0.75rem;
		border: solid thin var(--clr-body-text);
	}
</style>
