<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		src: string;
		alt?: string;
		width?: number;
		height?: number;
	}

	/**
	 * PROPS
	 */
	let { src, alt, width, height }: Props = $props();
</script>

<img class="v-portfolio-gallery-image" {src} {alt} {width} {height} />

<style lang="scss">
	.v-portfolio-gallery-image {
		width: var(--portfolio-gallery-image-width);
		height: var(--portfolio-gallery-image-height);
		object-fit: cover;
		object-position: center;
	}
</style>
