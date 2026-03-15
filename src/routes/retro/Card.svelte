<script lang="ts">
	import RetroCard from '$lib/retro/components/RetroCard.svelte';
	import RetroLink from '$lib/retro/components/RetroLink.svelte';
	import RetroTag from '$lib/retro/components/RetroTag.svelte';
	import { type Project } from '$lib/retro/context/project';

	let {
		project
	}: {
		project: Project;
	} = $props();
</script>

<RetroCard path={project.pageLink} size="md" title={project.title}>
	<section class="card-content">
		<div class="img-container">
			<img src={project.imgPath} alt="" />
		</div>
		<div class="description-container">
			<h1>Description</h1>
			<p>{project.description}</p>
			<RetroLink attributes={{ href: project.githubLink }}>View Gtihub</RetroLink>
		</div>
		<div class="tags-container">
			{#each project.tags as tag}
				<RetroTag value={tag.title} icon={tag.iconPath} />
			{/each}
		</div>
	</section>
</RetroCard>

<style>
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
