<script lang="ts">
	/**
	 * IMPORTS
	 */
	import type { Snippet } from 'svelte';
	import { fade, type FadeParams } from 'svelte/transition';

	/**
	 * TYPES
	 */
	interface Props {
		fadeIn?: FadeParams;
		fadeOut?: FadeParams;
		children?: Snippet;
	}

	/**
	 * PROPS
	 */
	let { fadeIn, fadeOut, children }: Props = $props();
</script>

<div in:fade={fadeIn} out:fade={fadeOut}>
	{@render children?.()}
</div>
