<script lang="ts">
	import RetroLink from '$lib/retro/components/RetroLink.svelte';
	import { RetroIcons } from '$lib/retro/handler/icons';

	let {
		path,
		border,
		name
	}: {
		path: string;
		border?: 'left' | 'right' | 'top' | 'bottom';
		name: string;
	} = $props();
</script>

<RetroLink attributes={{ href: path }} missingBorder={border}>
	<div class="links">
		<span>{name}</span>
		<img src={RetroIcons.diagonalArrow} alt="" />
	</div>
</RetroLink>

<style>
	div.links {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		gap: 3rem;
	}

	div.links img {
		transition: 0.3s ease-in-out;
		height: 20px;
	}

	div.links:hover img {
		transform: translate(4px, -4px);
	}
</style>
