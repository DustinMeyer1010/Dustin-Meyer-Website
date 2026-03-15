<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import { get } from 'svelte/store';

	get(theme);

	let { children } = $props();

	onMount(() => {
		goto('/retro');
	});
</script>

<svelte:head></svelte:head>

{@render children()}
