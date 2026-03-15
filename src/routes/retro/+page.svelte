<script lang="ts">
	import Intro from './Intro.svelte';
	import Projects from './Projects.svelte';
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
