<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type PageData } from './$types';

	/**
	 * TYPES
	 */
	interface Props {
		data: PageData;
	}

	/**
	 * PROPS
	 */
	let { data }: Props = $props();
</script>

<h1>{data.item.title}</h1>

<div class="gallery"></div>

<style lang="scss">
	.gallery {
		z-index: -1;
		position: fixed;
		inset: 0;
		background-image: url('/assets/portfolio/1.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
