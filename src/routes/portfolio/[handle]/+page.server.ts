import { portfolio } from '$lib/constants';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const handle = params.handle;

	const item = portfolio.find((item) => item.handle === handle);

	if (!item) {
		error(404, 'Not found');
	}

	return {
		item
	};
};
