<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { type NavItem } from '$lib/types';
	import LayoutMainHeader from './LayoutMainHeader.svelte';
	import LayoutMainNav from './LayoutMainNav.svelte';
	import LayoutMainNavItems from './LayoutMainNavItems.svelte';
	import LayoutMainNavLink from './LayoutMainNavLink.svelte';
	import LayoutMobileMenuButton from './LayoutMobileMenuButton.svelte';
	import VisualMainHeader from './VisualMainHeader.svelte';
	import VisualMainNav from './VisualMainNav.svelte';
	import VisualMainNavLink from './VisualMainNavLink.svelte';
	import VisualPlainListItem from './VisualPlainListItem.svelte';
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

<LayoutMainHeader>
	<VisualMainHeader>
		<LayoutMainNav>
			<VisualMainNav {isMobileMenuOpen}>
				<LayoutMainNavItems tag="ul">
					{#each mainNavItems as { text, href }, index (index)}
						<VisualPlainListItem>
							<LayoutMainNavLink>
								<VisualMainNavLink {text} {href} />
							</LayoutMainNavLink>
						</VisualPlainListItem>
					{/each}
				</LayoutMainNavItems>
			</VisualMainNav>
		</LayoutMainNav>
	</VisualMainHeader>
	<LayoutMobileMenuButton>
		<VisualToggleButton
			label={isMobileMenuOpen ? '×' : 'Menu'}
			{isMobileMenuOpen}
			onclick={handleMobileMenuButtonClick}
		/>
	</LayoutMobileMenuButton>
</LayoutMainHeader>
