
<script lang="ts">
    import profilePicture from "$lib/assets/profile.png"
	import RetroButton from "$lib/theme/Retro/components/RetroButton.svelte";

</script>

<main>
    <section id="intro">
        <div>
            <h1>Hello <br/> I'm Dustin</h1>
            <p>
                I am a Go, Svelte developers. Love to try different things
            </p>
            <RetroButton >Download CV</RetroButton>
        </div>
        <img src={profilePicture} alt="">
    </section>


    <section class="gray" id="projects">
        <section id="quick-links">
            <h2>Quick Links</h2>
            <div>
                <RetroButton><div class="links"><span>Projects</span><img src={profilePicture} alt=""></div></RetroButton>
                <RetroButton>Projects</RetroButton>
                <RetroButton>Projects</RetroButton>
                <RetroButton>Projects</RetroButton>
            </div>
        </section>
    </section>
</main>

<style>

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    section#intro {
        display: flex;
        margin-top: 5rem;
        margin-bottom: 10rem;
        justify-content: space-between;
        width: 80%;

    }

    section#intro h1 {
        font-size: 50px;
        font-weight: bold;
        margin: 0;
    }

    section#quick-links {
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
    }

    section#quick-links h2 {
        padding: 0;
        margin: 0;
    }


    section#quick-links div {
        display: flex;
    }

    div.links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
    }

    div.links img {
        height:30px;
    }



    section#projects {
        position: relative;
        width: 100%;
        height: 500px;
        border-top: 5px solid black;
        border-bottom: 5px solid black;
    }

    section.gray {
        background: rgb(196, 196, 196);
    }


</style>