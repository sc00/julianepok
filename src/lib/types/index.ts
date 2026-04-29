import type { Pathname } from '$app/types';

export interface NavItem {
	href: Pathname;
	text: string;
	hideOnDesktop?: boolean;
}

export interface Token {
	type: string;
	content: string;
}
