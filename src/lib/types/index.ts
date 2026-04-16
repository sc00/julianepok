import type { Pathname } from '$app/types';

export interface NavItem {
	href: Pathname;
	text: string;
}
