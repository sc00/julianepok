<script lang="ts">
	/**
	 * TYPES
	 */
	interface Props {
		isVisible?: boolean;
	}

	/**
	 * PROPS
	 */
	let { isVisible = true }: Props = $props();
</script>

<div class="v-blur" aria-hidden={!isVisible}></div>

<style lang="scss">
	.v-blur {
		backdrop-filter: blur(0.5rem);
		transition: backdrop-filter 0.1s ease-in-out;

		&[aria-hidden='true'] {
			backdrop-filter: blur(0);
			pointer-events: none;
		}
	}
</style>
