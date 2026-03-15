<script lang="ts">
	import profilePicture from '$lib/assets/profile.png';
	import RetroButton from '$lib/retro/components/RetroButton.svelte';
	import Projects from './Projects.svelte';
</script>

<main>
	<section id="intro">
		<div>
			<h1>Hello <br /> I'm Dustin</h1>
			<p>I am a Go, Svelte developers. Love to try different things</p>
			<RetroButton>Download CV</RetroButton>
		</div>
		<img src={profilePicture} alt="" />
	</section>
	<Projects />
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	section#intro {
		display: flex;
		margin-top: 5rem;
		margin-bottom: 10rem;
		justify-content: space-between;
		width: 80%;
	}

	section#intro h1 {
		font-size: 50px;
		font-weight: bold;
		margin: 0;
	}
</style>
