<script lang="ts">
	import CompositionParseContent from '$lib/components/CompositionParseContent.svelte';
	import LayoutPortfolioItemHeader from '$lib/components/LayoutPortfolioItemHeader.svelte';
	/**
	 * IMPORTS
	 */
	import VisualPortfolioItemTitle from '$lib/components/VisualPortfolioItemTitle.svelte';
	import VisualToggleButton from '$lib/components/VisualToggleButton.svelte';
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

	/**
	 * VARIABLES
	 */
	let isToggled = $state(false);
</script>

<LayoutPortfolioItemHeader tag="header">
	<VisualPortfolioItemTitle>
		<CompositionParseContent content={data.item.title} />
	</VisualPortfolioItemTitle>
	<VisualToggleButton
		label={isToggled ? 'View' : 'Read'}
		onclick={() => (isToggled = !isToggled)}
	/>
</LayoutPortfolioItemHeader>

{#if !isToggled}
	<div class="gallery"></div>
{:else}
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, commodi eos? Modi nam
		eligendi, accusantium non, sit ullam eos velit consectetur incidunt saepe culpa doloremque
		labore architecto pariatur expedita aut? Doloribus, optio velit. Aliquid quos dolorum et
		repellendus tenetur natus ad tempore necessitatibus voluptate! Aut fugit facere quos est ad ex
		mollitia deleniti quibusdam minus sequi sint sed eligendi odio, libero dolore repudiandae magnam
		dolores, cumque quaerat explicabo reprehenderit expedita architecto. Iusto aspernatur quaerat
		nobis molestias. Dolore esse incidunt maiores ex ratione veniam nostrum, numquam itaque dolor
		quis ad rem id aliquam est cumque optio ipsam minima nihil et nulla totam quas consectetur.
		Voluptatum qui eos reiciendis vero error, eveniet, beatae similique placeat quas, possimus
		debitis assumenda modi suscipit nulla quod amet architecto. Vero, totam recusandae repudiandae
		quaerat dolore cum nihil libero ea quis quam aperiam iusto magni quasi ullam perferendis fugit.
		Sapiente laboriosam quasi suscipit dolore possimus commodi, error libero eum beatae accusamus,
		exercitationem iste fuga nulla magni corrupti labore. Iusto natus eligendi accusamus quasi
		laborum ut est, id nesciunt deserunt ab magni obcaecati commodi, rerum iste perspiciatis
		repellendus labore cumque saepe adipisci itaque doloremque maxime a. Illo facilis eos veniam
		quisquam iure laudantium tempore minus ea. Eius quidem illum beatae labore laborum officiis
		veritatis impedit atque ex quasi necessitatibus temporibus et reiciendis, animi officia ipsa
		alias recusandae excepturi dolor placeat quaerat? Qui omnis suscipit non ex temporibus error
		reprehenderit hic. Veniam, eius? Ea, animi cupiditate voluptate odit iure temporibus quam
		delectus nemo distinctio pariatur? Eius a, libero repellat tempora maiores facilis aspernatur
		doloremque voluptatibus dolore, incidunt fugiat voluptas? Enim eaque aspernatur quos quae
		molestias nemo, labore provident cumque, deserunt corporis eligendi rerum ipsam quas earum totam
		optio consequuntur, sed distinctio nostrum excepturi natus fuga commodi? In quam maiores
		deleniti dolorem blanditiis expedita maxime voluptas ducimus optio iusto eveniet mollitia iure
		soluta dolores quidem quae reprehenderit modi officia, quo enim fugit ea. Eius sequi numquam
		asperiores minima labore aperiam recusandae distinctio officiis quas atque velit nulla nam, ea
		facere suscipit architecto neque cupiditate nihil deleniti odit. Minus eos quos animi cupiditate
		libero unde magni nisi temporibus voluptatum corporis eligendi aliquam, ad impedit expedita
		culpa esse quaerat rerum? Officia veritatis iure voluptate architecto laudantium eius aspernatur
		maiores, provident, ipsum assumenda saepe error odit atque id exercitationem dignissimos qui sed
		fuga pariatur. Fugiat id non in. Incidunt doloribus fuga pariatur quisquam? Omnis veniam
		consequatur animi veritatis eveniet quis consequuntur maxime eum laboriosam mollitia. Placeat
		voluptate natus consequuntur. Fugit eum numquam odit. Corporis, maiores aliquid nobis voluptas
		molestiae ducimus dolore facere, eius repudiandae voluptate vel? At, aliquam eum eius eaque
		inventore repellendus dolor cumque provident soluta corrupti quae nam officia quo! Eum
		reprehenderit aliquid iure. Incidunt eligendi optio amet similique rem est expedita minima,
		pariatur quia minus! Obcaecati perspiciatis quisquam, commodi repudiandae, perferendis in ipsum
		pariatur ratione aut doloremque, dolore error hic provident labore minima modi explicabo nostrum
		id tempora facere reiciendis alias ut temporibus? Officia maxime unde sunt perspiciatis optio
		ratione animi id praesentium architecto modi, quam, dolor hic beatae nihil.
	</p>
{/if}

<style lang="scss">
	.gallery {
		z-index: -1;
		position: fixed;
		inset: 0;
		background-image: url('/assets/portfolio/1.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	p {
		font-size: 2rem;
		font-weight: 300;
	}
</style>
