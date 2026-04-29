<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type NavItem } from '$lib/types';
	import '$lib/scss/common.scss';
	import CompositionMainHeader from '$lib/components/CompositionMainHeader.svelte';
	import VisualPage from '$lib/components/VisualPage.svelte';

	/**
	 * PROPS
	 */
	const { children } = $props();

	/**
	 * CONSTANTS
	 */
	const mainNavItems: NavItem[] = [
		{
			text: 'Index',
			href: '/',
			hideOnDesktop: true
		},
		{
			text: 'About',
			href: '/about'
		},
		{
			text: 'Press',
			href: '/press'
		},
		{
			text: 'Contact',
			href: '/contact'
		},
		{
			text: 'Showcase',
			href: '/showcase'
		},
		{
			text: 'Imprint',
			href: '/imprint'
		}
	];
</script>

<VisualPage>
	<header id="main-header">
		<CompositionMainHeader {mainNavItems} />
	</header>

	<main id="main-content">
		{@render children?.()}
	</main>
</VisualPage>
