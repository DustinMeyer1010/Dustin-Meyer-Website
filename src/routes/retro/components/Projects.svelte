<script lang="ts">
	import { Projects } from '$lib/retro/context/project';
	import Card from './Card.svelte';
	import Link from './Link.svelte';
</script>

<section>
	<div id="quick-links">
		<h2>Quick Links</h2>
		<div>
			<Link name={'Projects'} path={'/retro/projects'} border={'right'} />
			<Link name={'About'} path={'/retro/about'} border={'right'} />
			<Link name={'Contact'} path={'/retro/contact'} border={'right'} />
			<Link name={'Projects'} path={'/retro/projects'} />
		</div>
	</div>
	<h1>Highlighted Projects</h1>
	<div id="projects">
		{#each Projects as p}
			<Card project={p} />
		{/each}
	</div>
</section>

<style>
	div#quick-links {
		position: absolute;
		top: -50px;
		left: 50%;
		transform: translateX(-50%);
	}

	div#quick-links h2 {
		padding: 0;
		margin: 0;
	}

	div#quick-links div {
		display: flex;
	}

	section {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		padding: 5rem;
		height: fit-content;
		border-top: 5px solid black;
		border-bottom: 5px solid black;
		background: rgb(196, 196, 196);
	}

	div#projects {
		display: flex;
		justify-content: cneter;
		align-items: center;
		width: 100%;
		overflow-x: scroll;
		height: fit-content;
		padding: 1rem 1rem 3rem 0;
		gap: 2rem;
	}
</style>
