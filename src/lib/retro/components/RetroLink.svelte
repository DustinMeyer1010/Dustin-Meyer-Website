<script lang="ts">
	import type { Snippet } from "svelte";


    let {
        attributes,
        missingBorder,
        size = "sm",
        children,
    } : {

        attributes?: any
        missingBorder?: "right" | "left" | "top" | "bottom"
        size?: "sm" | "md" | "lg"
        children: Snippet
    } = $props()
</script>


<a {...attributes} target="_blank" class={`${missingBorder} ${size}`}>
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
        min-height: 40px;
        padding: 0.5rem;
        background: rgb(196, 196, 196);
        border: 5px solid black;
    }

    a.sm {
        width: 200px;
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