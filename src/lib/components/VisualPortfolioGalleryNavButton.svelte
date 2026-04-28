<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type MouseEventHandler } from 'svelte/elements';

	/**
	 * TYPES
	 */
	interface Props {
		type: 'prev' | 'next';
		ariaLabel: string;
		onclick?: MouseEventHandler<HTMLButtonElement>;
	}

	/**
	 * PROPS
	 */
	let { type, ariaLabel, onclick }: Props = $props();
</script>

<button
	class={['v-portfolio-gallery-nav-button', 'v-portfolio-gallery-nav-button--' + type]}
	aria-label={ariaLabel}
	{onclick}
></button>

<style lang="scss">
	.v-portfolio-gallery-nav-button {
		background-color: transparent;
		background-size: auto 75%;
		background-position: center;
		background-repeat: no-repeat;
		border: none;
		transition: transform 0.15s ease-in-out;
	}

	.v-portfolio-gallery-nav-button--prev {
		background-image: url('/assets/arrow-left.svg');

		&:hover {
			transform: translateX(-0.25rem);
		}
	}

	.v-portfolio-gallery-nav-button--next {
		background-image: url('/assets/arrow-right.svg');

		&:hover {
			transform: translateX(0.25rem);
		}
	}
</style>
