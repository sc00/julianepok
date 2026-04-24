<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';

	/**
	 * TYPES
	 */
	interface Props {
		children: Snippet;
	}

	/**
	 * PROPS
	 */
	let { children }: Props = $props();
</script>

<h1 class="v-portfolio-item-title">
	{@render children()}
</h1>

<style lang="scss">
	.v-portfolio-item-title {
		padding: 0.4375rem var(--spacing-list-indent) 0.5625rem;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.25rem;
		text-transform: lowercase;
		border: solid thin;
	}
</style>
