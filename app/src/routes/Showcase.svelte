<script lang="ts">
    import { onMount } from 'svelte';
    import type { Project } from '$lib/index';

    export let items : Project[] = [];
    
 

    const url='/projects'
    // const maxWidth = '45px;'
    // function handleClick(item : string) {
    //     console.log("Clicked item:", item);
    // }

    // function createContainerPartitions(width: number, height: number, n: number) {
        
    //     const cols = 3; 
    //     const rows = Math.ceil(n / cols);
    //     const remainder = n % cols;

    //     console.log(rows, remainder);
    // }

    onMount(() => {
        // createContainerPartitions(400, 800, 8);
    })

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
    }
    .showcase-item {
        min-width: 150px;
        max-width: 150px;
        margin: 5px;
        outline: 1px solid black; 
        border-radius: 8px;
        text-align:center;
        padding: 10px;
    }
    .showcase-item:hover .showcase-item-title {
        font-size: 1.5em;
    }
    .showcase-item-desc {
        font-size: 12px;
    }
    .showcase-item-title {
        transition: font-size 0.3s ease;
        font-size: 20px;
    }
    .plain-link {
        text-decoration: none; /* Removes underline */
        color: inherit; /* Inherits color from parent */
    }
</style>