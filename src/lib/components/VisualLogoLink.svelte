<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';
	import { resolve } from '$app/paths';
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

<a href={resolve('/')} class="visual-logo-link">
	{@render children()}
</a>

<style lang="scss">
	.v-logo-link {
		text-decoration: none;
	}
</style>
