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

<div class="v-page">
	{@render children?.()}
</div>

<style lang="scss">
	.v-page {
		padding: 0.5rem 1rem 5rem;
		color: var(--clr-text);
	}
</style>
