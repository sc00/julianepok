<script lang="ts">
	/**
	 * IMPORTS
	 */
	import { type Token } from '$lib/types';

	/**
	 * TYPES
	 */
	interface Props {
		content: string;
	}

	/**
	 * PROPS
	 */
	let { content }: Props = $props();

	/**
	 * CONSTANTS
	 */
	const allowedTags = ['sup', 'sub', 'b', 'i', 'em', 'strong'];

	/**
	 * FUNCTIONS
	 */
	export function parseCustomTags(text: string): Token[] {
		if (!text) return [];

		const regex = /\[([a-z]+)\](.*?)\[\/\1\]/g;
		const tokens: Token[] = [];

		let lastIndex = 0;
		let match;

		while ((match = regex.exec(text)) !== null) {
			if (match.index > lastIndex) {
				tokens.push({
					type: 'text',
					content: text.slice(lastIndex, match.index)
				});
			}

			tokens.push({
				type: match[1],
				content: match[2]
			});

			lastIndex = regex.lastIndex;
		}

		if (lastIndex < text.length) {
			tokens.push({
				type: 'text',
				content: text.slice(lastIndex)
			});
		}

		return tokens;
	}

	/**
	 * DERIVED
	 */
	let parsedContent = $derived(parseCustomTags(content));
</script>

{#each parsedContent as part, index (index)}
	{#if part.type === 'text'}
		{part.content}
	{:else if allowedTags.includes(part.type)}
		<svelte:element this={part.type}>
			{part.content}
		</svelte:element>
	{:else}
		[{part.type}]{part.content}[/{part.type}]
	{/if}
{/each}
