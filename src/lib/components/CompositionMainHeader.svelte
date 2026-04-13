<script lang="ts">
	import { type NavItem } from '$lib/types';
	import LayoutMainHeader from './LayoutMainHeader.svelte';
	import LayoutMainNavItems from './LayoutMainNavItems.svelte';
	import VisualMainHeader from './VisualMainHeader.svelte';
	import VisualMainNavLink from './VisualMainNavLink.svelte';
	import VisualPlainListItem from './VisualPlainListItem.svelte';

	/**
	 * TYPES
	 */
	interface Props {
		mainNavItems: NavItem[];
	}

	/**
	 * PROPS
	 */
	let { mainNavItems }: Props = $props();
</script>

<LayoutMainHeader>
	<VisualMainHeader>
		<LayoutMainNavItems tag="ul">
			{#each mainNavItems as { text, href }, index (index)}
				<VisualPlainListItem>
					<VisualMainNavLink {text} {href} />
				</VisualPlainListItem>
			{/each}
		</LayoutMainNavItems>
	</VisualMainHeader>
</LayoutMainHeader>
