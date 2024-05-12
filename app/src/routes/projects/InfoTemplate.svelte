<script lang="ts">
    // import "../global.css";
    import type { Project } from "$lib/types";
    import { tagMap } from "$lib/projects";
    import { defaultSearchText } from "$lib/store";
    import { goto } from "$app/navigation";
    
    export let project: Project;

    const tagClickHandler =  (tag: string) => {
        defaultSearchText.set(tag);
        goto('/');
    }

</script>

<div class="home-page-wrapper">
    <div class="info-template">
        <div class="title">
            {project.title}
        </div>
        <div class="info-container-tags">
            {#each project.tags as tag}
                <button type="button" 
                        class="info-tag" 
                        style="background-color: {tagMap[tag]}" 
                        on:click={() => tagClickHandler(tag)}>
                    {tag}
                </button>    
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
            <p><strong>Description:</strong> {project.longDesc}</p>
        </div>
        {#if project.imgLink}
            <div class="info-container-preview">
                <div class="image-container">

                    <a href={project.guiLink} target="_blank">
                        <img src={project.imgLink} alt=""/>
                    </a>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    /* all */
    .info-template {
        text-align: center;
        max-width: 800px;
        margin: 20px auto;
        margin-top: 50px;
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 10px;
        background-color: rgb(32, 63, 85);
        color: white;
    }
    .info-container-desc {
        text-align: left;
        margin-left: 10px;
    }
    .info-container-desc, .info-container-date, .info-container-tech {
        margin-bottom: 15px;
        font-size: 16px;
    }
    /* title */
    .title {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
        color: white;
    }
    /* tags */
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
        transition: transform 0.2s ease;
        cursor: pointer;
        border: none;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.3);
    }
    .info-tag:hover {
        transform: scale(1.1);
    }
    /* preview image */
    .info-container-preview {
        margin-bottom: 20px;
    }
    .info-container-preview img {
        width: 500px;
        transition: transform 0.6s ease-in-out, filter 0.3s ease;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    }
    .info-container-preview:hover img {
        filter: brightness(70%);
        cursor: pointer;
    } 
</style>