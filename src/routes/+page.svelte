
<script lang="ts">
    import profilePicture from "$lib/assets/profile.png"
    import arrow from "$lib/assets/icons/diagonal-arrow.png"
	import RetroButton from "$lib/theme/Retro/components/RetroButton.svelte";
	import RetroLink from "$lib/theme/Retro/components/RetroLink.svelte";
	import RetroCard from "$lib/theme/Retro/components/RetroCard.svelte";
    import { URMCHUB, type Project } from "$lib/context/project";
	import RetroTag from "$lib/theme/Retro/components/RetroTag.svelte";

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
                {@render Link("Project", "/project", "right")}
                {@render Link("About", "/about", "right")}
                {@render Link("Contact", "/contact", "right")}
                {@render Link("Project", "/project")}
            </div>
        </section>
        <h1>Projects</h1>
        <div id="projects">
            {@render Card(URMCHUB)}
        </div>
    </section>
</main>


{#snippet Card(project: Project)}
    <RetroCard size="md" title={project.title}>
    <section class="card-content">
        <div class="img-container">
            <img src={project.imgPath} alt=""/>
        </div>
        <div class="description-container">
            <h1>Description</h1>
            <p>{project.description}</p>
            <RetroLink attributes={{href: URMCHUB.githubLink}}>View Project</RetroLink>
        </div>
        <div class="tags-container">
            {#each project.tags as tag}
                <RetroTag value={tag.title} icon={tag.iconPath}/>
            {/each}
        </div>
    </section>
</RetroCard>
{/snippet}


{#snippet Link(name: string, path: string, border?: "left" | "right" | "top" | "bottom" )}
    <RetroLink attributes={{href: path}} missingBorder={border}>
        <div class="links">
            <span>{name}</span>
            <img src={arrow} alt="">
        </div>
    </RetroLink>
{/snippet}

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
        width: 100%;
        gap: 3rem;
    }

    div.links img {
        transition: 0.3s ease-in-out;
        height: 20px;
    }

    div.links:hover img {
        transform: translate(4px, -4px);
    }



    section#projects {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        padding: 5rem;
        height: fit-content;
        border-top: 5px solid black;
        border-bottom: 5px solid black;
    }

    section.gray {
        background: rgb(196, 196, 196);
    }


    div#projects {
        display: flex;
        justify-content: cneter;
        align-items: center;
        width: 100%;
        overflow-x: scroll;
        height: fit-content;
        padding: 1rem 1rem 3rem 0 ;
        gap: 2rem;
    }

    section.card-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    section.card-content div.img-container {
        width: 100%;
        height: 100px;
        overflow: hidden;
        border-bottom: 5px solid black;
    }

    section.card-content div.description-container {
        padding: 1rem;
    }

    section.card-content div.description-container h1 {
        font-size: 18px;
    }

        section.card-content div.description-container p {
        font-size: 12px;
    }

    section.card-content img {
        width: 100%;
    }

    section.card-content div.tags-container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        padding: 0.5rem; 
    }


</style>