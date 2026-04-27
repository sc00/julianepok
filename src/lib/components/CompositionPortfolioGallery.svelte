<script lang="ts">
	/**
	 * IMPORTS
	 */
	import LayoutPortfolioGallery from './LayoutPortfolioGallery.svelte';
	import LayoutPortfolioGalleryImage from './LayoutPortfolioGalleryImage.svelte';
	import LayoutPortfolioGalleryNav from './LayoutPortfolioGalleryNav.svelte';
	import LayoutPortfolioGalleryNavItems from './LayoutPortfolioGalleryNavItems.svelte';
	import VisualPlainListItem from './VisualPlainListItem.svelte';
	import VisualPortfolioGalleryImage from './VisualPortfolioGalleryImage.svelte';
	import VisualPortfolioGalleryNav from './VisualPortfolioGalleryNav.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		handle: string;
		items: {
			fileName: string;
			alt: string;
			width: number;
			height: number;
		}[];
	}

	/**
	 * PROPS
	 */
	let { handle, items }: Props = $props();

	/**
	 * VARIABLES
	 */
	let currentIndex = $state(0);
	let previousIndex = $derived(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
	let nextIndex = $derived(currentIndex === items.length - 1 ? 0 : currentIndex + 1);

	/**
	 * FUNCTIONS
	 */
	function goToImage(index: number) {
		if (items.length < 2 || index === currentIndex) {
			return;
		}

		currentIndex = index;
	}

	function goToPrevImage() {
		goToImage(previousIndex);
	}

	function goToNextImage() {
		goToImage(nextIndex);
	}
</script>

<LayoutPortfolioGallery>
	<LayoutPortfolioGalleryNav>
		<VisualPortfolioGalleryNav>
			<LayoutPortfolioGalleryNavItems tag="ul">
				<VisualPlainListItem>
					<button type="button" onclick={goToPrevImage}>Prev</button>
				</VisualPlainListItem>
				<VisualPlainListItem>
					<button type="button" onclick={goToNextImage}>Next</button>
				</VisualPlainListItem>
			</LayoutPortfolioGalleryNavItems>
		</VisualPortfolioGalleryNav>
	</LayoutPortfolioGalleryNav>
	<LayoutPortfolioGalleryImage>
		<VisualPortfolioGalleryImage
			src="/assets/portfolio/{handle}/{items[currentIndex].fileName}"
			width={items[currentIndex].width}
			height={items[currentIndex].height}
		/>
	</LayoutPortfolioGalleryImage>
</LayoutPortfolioGallery>

<style lang="scss">
	button {
		width: 4rem;
	}
</style>
