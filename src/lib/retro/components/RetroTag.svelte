<script lang="ts">

    let {
        value,
        icon
    } : {
        value: string
        icon?: string
    } = $props()
</script>


<div>
    <span>{value}</span>
    <img src={icon} alt=""/>
</div>

<style>

    div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: 11px;
        background: rgb(196,196,196);
        border: 5px solid black;
        border-radius: 20px;
        padding: 0.3rem 0.5rem;
        width: fit-content;
    }

    img {
        height: 20px;
    }
</style>