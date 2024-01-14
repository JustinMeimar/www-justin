<script lang="ts">
    import "../global.css";
    import type { Project } from "$lib/types";
    import { tagMap } from "$lib/projects";

    export let project: Project;
</script>

<div class="home-page-wrapper">
    <div class="info-template">
        <div class="title">
            {project.title}
        </div>
        <div class="info-container-tags">
            {#each project.tags as tag}
                <div class="info-tag" style="background-color: {tagMap[tag]}">
                    {tag}
                </div> 
            {/each}
        </div> 
        <div class="info-container-date">
            <p><strong>Date:</strong> {project.date}</p>
        </div>
        <div class="info-container-tech">
            <p><strong>Technolgoies:</strong>
            {#if project.technologies}
                {project.technologies.join(' ')}
            {/if}
            </p>
        </div>
        <div class="info-container-desc">
            {project.longDesc}
        </div>
    </div>
</div>

<style>
    .info-template {
        text-align: center;
        max-width: 800px;
        margin: 20px auto;
        margin-top: 50px;
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 10px;
        background-color: white;
    }
    .info-container-tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 15px;
    }
    .info-tag {
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        margin: 5px;
        white-space: nowrap; 
    }
    .title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #333;
    }
    .info-container-desc, .info-container-date, .info-container-tech {
        margin-bottom: 15px;
        font-size: 16px;
    }
</style>