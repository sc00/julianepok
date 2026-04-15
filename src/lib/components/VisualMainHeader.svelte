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

<div class="v-main-header">
	{@render children?.()}
</div>

<style lang="scss">
	.v-main-header {
		background-color: var(--clr-body-background);
	}
</style>
