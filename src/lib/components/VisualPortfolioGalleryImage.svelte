<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { fade, type FadeParams } from 'svelte/transition';

	/**
	 * TYPES
	 */
	interface Props {
		src: string;
		alt?: string;
		width?: number;
		height?: number;
		fadeOptions?: FadeParams; // Use FadeParams and rename to avoid collision
	}

	/**
	 * PROPS
	 */
	let { src, alt, width, height, fadeOptions }: Props = $props();
</script>

<img class="v-portfolio-gallery-image" {src} {alt} {width} {height} transition:fade={fadeOptions} />

<style lang="scss">
	.v-portfolio-gallery-image {
		grid-area: var(--portfolio-gallery-image-grid-area);
		width: var(--portfolio-gallery-image-width);
		height: var(--portfolio-gallery-image-height);
		object-fit: cover;
		object-position: center;
	}
</style>
