<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type PageData } from './$types';

	/**
	 * TYPES
	 */
	interface Props {
		data: PageData;
	}

	/**
	 * PROPS
	 */
	let { data }: Props = $props();
</script>

<h1>{data.item.title}</h1>
