<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	/**
	 * TYPES
	 */
	interface Props {
		label: string;
		onclick: MouseEventHandler<HTMLButtonElement>;
	}

	/**
	 * PROPS
	 */
	let { label, onclick }: Props = $props();
</script>

<button class="v-toggle-button" {onclick}>
	{label}
</button>

<style lang="scss">
	.v-toggle-button {
		padding: 0.4375rem 1rem 0.5625rem;
		line-height: 1.25rem;
		text-transform: uppercase;
		white-space: nowrap;
		background-color: transparent;
		border: solid thin var(--clr-body-text);

		&:hover {
			color: var(--clr-body-text-contrast);
			background-color: var(--clr-body-text);
		}
	}
</style>
