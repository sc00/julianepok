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
		padding: 1rem 1rem 3.6875rem;
		color: var(--clr-body-text);
	}
</style>
