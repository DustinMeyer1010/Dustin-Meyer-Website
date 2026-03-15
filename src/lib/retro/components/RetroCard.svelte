<script lang="ts">
	import type { Snippet } from 'svelte';
	import RetroButton from './RetroButton.svelte';
	import { blur } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let hidden: boolean = $state(false);

	let {
		title = 'Card Title',
		size = 'sm',
		path = null,
		children
	}: {
		title?: string;
		size?: 'sm' | 'md' | 'lg';
		path?: string | null;
		children?: Snippet;
	} = $props();

	function hide() {
		hidden = true;
	}

	function show() {
		hidden = false;
	}

	function directToPage() {
		if (path) {
			goto(path);
		}
	}
</script>

{#if hidden}
	<div id="hidden-card">
		<RetroButton attributes={{ onclick: show }}>Restore {title}</RetroButton>
	</div>
{:else}
	<div id="card" class={size} out:blur={{ duration: 300 }} in:blur={{ duration: 300 }}>
		<header>
			<div id="buttons">
				<button onclick={hide} title="close"></button>
				<button onclick={directToPage} title="View Page"></button>
			</div>
			<h1>{title}</h1>
		</header>

		{@render children?.()}
	</div>
{/if}

<style>
	div#hidden-card {
		order: 100;
	}

	header {
		display: flex;
		justify-content: center;
		position: sticky;
		top: 0px;
		align-items: center;
		border-bottom: 5px solid black;
		background-color: rgb(196, 196, 196);
		width: 100%;
		padding: 0.3rem;
		font-size: 15px;
	}

	div#card.hidden {
		opacity: 0;
		order: 100;
	}

	h1 {
		font-size: 15px;
		padding: 0;
		margin: 0;
		flex-grow: 1;
		text-align: center;
	}

	div#buttons {
		position: absolute;
		left: 10px;
	}

	div#buttons button {
		width: 15px;
		height: 15px;
		border-radius: 15px;
		border: 3px solid black;
	}

	div#card {
		background: white;
		border: 5px solid black;
		border-radius: 10px;
		transition: 0.3s;
		position: relative;
		overflow-y: scroll;
		box-shadow: 3px 3px 0px 3px black;
	}

	div#card.sm {
		min-width: 400px;
		height: 300px;
	}

	div#card.md {
		min-width: 500px;
		width: 500px;
		height: 400px;
	}

	div#card.lg {
		min-width: 600px;
		height: 500px;
	}
</style>
