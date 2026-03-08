<script lang="ts">
	import type { Snippet } from "svelte";


    let {
        children,
        attributes,
        missingBorder,
    } : {
        children: Snippet
        attributes?: any
        missingBorder?: "right" | "left" | "top" | "bottom"
    } = $props()
</script>


<a {...attributes} class={missingBorder}>
    {@render children()}
</a>


<style>
    

    a, a:visited {
        color: black;
        text-decoration: none;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 30px;
        padding: 0.3rem 1rem;
        background: rgb(196, 196, 196);
        border: 5px solid black;
    }

    a.right {
        border-right: none;
    }

    a.left {
        border-left: none;
    }

    a.top {
        border-top: none;
    }
    
    a.bottom {
        border-bottom: none;
    }
</style>