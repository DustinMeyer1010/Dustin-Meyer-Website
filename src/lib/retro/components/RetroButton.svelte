<script lang="ts">
	import type { Snippet } from "svelte";

    let {
        children,
        size = "sm",
        attributes
    } : {
        children: Snippet
        size?: "sm" | "md" | "lg"
        attributes?: any

    } = $props()
</script>

<button {...attributes} class={`${size}`}>
    {@render children()}
</button>


<style>
    button {
        padding: 0.5rem 1rem ;
        border: 5px solid black;
        font-size: 18px;
        margin: 0px; 
    }

    button.sm {
        font-size: 12px;
        width: fit-content;
        min-width: fit-content;
        text-wrap: nowrap;
        height: fit-content;
    }

</style>