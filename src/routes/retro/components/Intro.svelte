<script lang="ts">
	import RetroButton from '$lib/retro/components/RetroButton.svelte';
	import { RetroIcons } from '$lib/retro/handler/icons';
</script>

<section>
	<div>
		<h1>Hello <br /> I'm Dustin</h1>
		<p>I am a Go, Svelte developers. Love to try different things</p>
		<RetroButton>Download CV</RetroButton>
	</div>
	<img src={RetroIcons.PLACEHOLDER} alt="" />
</section>

<style>
	section {
		display: flex;
		margin-top: 5rem;
		margin-bottom: 10rem;
		justify-content: space-between;
		width: 80%;
	}

	section h1 {
		font-size: 50px;
		font-weight: bold;
		margin: 0;
	}
	section img {
		height: 200px;
	}
</style>
