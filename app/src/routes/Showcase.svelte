<script lang="ts">
    import { onMount } from 'svelte';
    export let items : string[] = [];

    const maxWidth = '45px;'
    function handleClick(item : string) {
        console.log("Clicked item:", item);
    }

    function createContainerPartitions(width: number, height: number, n: number) {
        
        const cols = 3; 
        const rows = Math.ceil(n / cols);
        const remainder = n % cols;

        console.log(rows, remainder);
    }

    onMount(() => {
        createContainerPartitions(400, 800, 8);
    })

</script>

<div class="showcase-container">
    {#each items as item}
        <div class="showcase-item">
            {item}
        </div> 
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
        max-width: 300px;
        min-height: 100px;
        margin: 5px;
        transition: font-size 0.3s ease;
        outline: 1px solid black; 
        text-align:center;
    }
    .showcase-item:hover {
        font-size: 1.4em;
        cursor: pointer;
    }
</style>