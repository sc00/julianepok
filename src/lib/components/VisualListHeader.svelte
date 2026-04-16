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

<header class="v-list-header">
	{@render children?.()}
</header>

<style lang="scss">
	.v-list-header {
		padding: 0 var(--spacing-list-indent);
		text-transform: uppercase;
	}
</style>
