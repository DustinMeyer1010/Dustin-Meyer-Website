<script lang="ts">
	import '$lib/retro/styles/global.css';
	import '$lib/retro/styles/colors.css';
	import Nav from '$lib/retro/components/Nav.svelte';

	let { children } = $props();
</script>

<Nav />

<svelte:head></svelte:head>

{@render children()}
