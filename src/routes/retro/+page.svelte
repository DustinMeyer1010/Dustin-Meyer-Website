<script lang="ts">
	import Intro from './components/Intro.svelte';
	import Projects from './components/Projects.svelte';
</script>

<main>
	<Intro />
	<Projects />
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
