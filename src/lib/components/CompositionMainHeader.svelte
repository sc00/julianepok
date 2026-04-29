<script lang="ts">
	import { type NavItem } from '$lib/types';
	import { afterNavigate } from '$app/navigation';
	import LayoutLogoLink from './LayoutLogoLink.svelte';
	import LayoutMainHeader from './LayoutMainHeader.svelte';
	import LayoutMainNav from './LayoutMainNav.svelte';
	import LayoutMainNavItems from './LayoutMainNavItems.svelte';
	import LayoutMainNavLink from './LayoutMainNavLink.svelte';
	import LayoutMobileMenuButton from './LayoutMobileMenuButton.svelte';
	import LayoutOverlay from './LayoutOverlay.svelte';
	import VisualBlur from './VisualBlur.svelte';
	import VisualLogo from './VisualLogo.svelte';
	import VisualLogoLink from './VisualLogoLink.svelte';
	import VisualMainHeader from './VisualMainHeader.svelte';
	import VisualMainNav from './VisualMainNav.svelte';
	import VisualMainNavLink from './VisualMainNavLink.svelte';
	import VisualMainNavItem from './VisualMainNavItem.svelte';
	import VisualToggleButton from './VisualToggleButton.svelte';

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

	/**
	 * VARIABLES
	 */
	let isMobileMenuOpen = $state(false);

	/**
	 * FUNCTIONS
	 */
	function handleMobileMenuButtonClick() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	/**
	 * HOOKS
	 */
	afterNavigate(() => {
		isMobileMenuOpen = false;
	});
</script>

<LayoutLogoLink>
	<VisualLogoLink>
		<VisualLogo />
	</VisualLogoLink>
</LayoutLogoLink>

<LayoutMainHeader>
	<VisualMainHeader>
		<LayoutMainNav>
			<VisualMainNav {isMobileMenuOpen}>
				<LayoutMainNavItems tag="ul">
					{#each mainNavItems as { text, href, hideOnDesktop }, index (index)}
						<VisualMainNavItem {hideOnDesktop}>
							<LayoutMainNavLink>
								<VisualMainNavLink {text} {href} />
							</LayoutMainNavLink>
						</VisualMainNavItem>
					{/each}
				</LayoutMainNavItems>
			</VisualMainNav>
		</LayoutMainNav>
	</VisualMainHeader>
	<LayoutMobileMenuButton>
		<VisualToggleButton
			label={isMobileMenuOpen ? '×' : 'Menu'}
			onclick={handleMobileMenuButtonClick}
		/>
	</LayoutMobileMenuButton>
	<LayoutOverlay isVisible={isMobileMenuOpen} zIndex={-1}>
		<VisualBlur isVisible={isMobileMenuOpen} />
	</LayoutOverlay>
</LayoutMainHeader>
