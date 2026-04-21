<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';

	/**
	 * TYPES
	 */
	interface Props {
		label: string;
		isMobileMenuOpen: boolean;
		onclick: MouseEventHandler<HTMLButtonElement>;
	}

	/**
	 * PROPS
	 */
	let { label, isMobileMenuOpen, onclick = $bindable() }: Props = $props();
</script>

<button class="v-toggle-button" aria-expanded={isMobileMenuOpen} {onclick}>
	{label}
</button>

<style lang="scss">
	.v-toggle-button {
		padding: 0.5rem var(--spacing-list-indent) 0.75rem;
		text-transform: uppercase;
		background-color: transparent;
		border: solid thin var(--clr-body-text);

		&:hover {
			color: var(--clr-body-text-contrast);
			background-color: var(--clr-body-text);
		}
	}
</style>
