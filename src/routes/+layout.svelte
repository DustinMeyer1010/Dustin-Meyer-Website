<script lang="ts">
	import Nav from '$lib/theme/Retro/Nav.svelte';
	import "$lib/styles/global.css"


	let { children } = $props();
</script>

<svelte:head>
</svelte:head>

<Nav></Nav>

{@render children()}
