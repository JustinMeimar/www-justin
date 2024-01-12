<script lang="ts">
    import type { Project } from '$lib/types';
    export let items : Project[] = []; 
</script>

<div class="showcase-container">
    {#each items as item}
        <a href={`/projects/${item.route}`} class="plain-link">
            <div class="showcase-item">
                <div class="showcase-item-title">
                    {item.title}
                </div>
                <div class="showcase-item-desc">
                    {item.desc}
                </div>
            </div> 
        </a>
    {/each} 
</div>

<style>
    .showcase-container {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        max-width: 450px;
        justify-content: center;
        align-content: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 350;
    }
    .showcase-item {
        min-width: 150px;
        max-width: 150px;
        margin: 5px;
        outline: 1px solid black; 
        border-radius: 8px;
        background-color: white;
        text-align:center;
        padding: 10px;
    }
    .showcase-item:hover {
        background-color: rgb(234, 248, 255);
    }

    .showcase-item:hover .showcase-item-title {
        font-size: 1.9em;
    }
    .showcase-item-desc {
        font-size: 12px;
    }
    .showcase-item-title {
        transition: font-size 0.3s ease;
        font-size: 20px;
    }
    .plain-link {
        text-decoration: none;
        color: inherit;
    }
</style>