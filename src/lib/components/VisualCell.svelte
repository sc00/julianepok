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

<div class="v-cell">
	{@render children?.()}
</div>

<style lang="scss">
	.v-cell {
		padding: 0.75rem 0;
		text-transform: lowercase;
	}
</style>
