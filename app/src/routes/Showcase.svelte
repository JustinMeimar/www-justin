<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from "svelte"; 
    import type { Project } from '$lib/types';
    import { tagMap } from '$lib/projects';
    export let items : Project[] = []; 
    
    let searchText = '';
    let searchTags: string[] = [];
    
    let filteredItems = items;
    
    let currentPage = 1;
    const itemsPerPage = 6;
    let totalPageCount = Math.ceil(items.length / itemsPerPage);

    const filterItems = () => {
        if(searchText.trim() === '') {
            filteredItems = items;
        } else {
            searchTags = searchText.split(' ').filter(t => {
                return t;
            }); 
            filteredItems = items.filter((project) => {
                return project.tags.some(projectTag => 
                    searchTags.some(searchTag => 
                        projectTag.toLowerCase().includes(searchTag.toLowerCase())
                    )
                ); 
            });
            totalPageCount = Math.ceil(filteredItems.length / itemsPerPage);
        }
    }

    const setPage = (page: number) => {
        currentPage = page;
    }

    const handleEvent = (event: FocusEvent | MouseEvent) => { 
        switch (event.type) {
            case 'focus':
            case 'mouseover':
            case 'blur':
            case 'mouseout':
                break;
        }
    }
 
    $: paginatedItems = filteredItems.slice((currentPage-1) * itemsPerPage, currentPage * itemsPerPage);

</script>

<div class="showcase-search-container">
    <div>
        <div class="mb-3">
            <input type="text"
                bind:value={searchText} 
                on:input={filterItems}
                on:focus={handleEvent}
                on:blur={handleEvent}
                on:mouseover={handleEvent}
                on:mouseout={handleEvent}
                class="form-control rounded" placeholder="Search for tags...">
        </div>
    </div>  
    <div class="showcase-container">
        {#each paginatedItems as item}
            <a  href={`/projects/${item.route}`} 
                class="plain-link">
                <div class="showcase-item">
                    <div class="showcase-item-title">
                        {item.title}
                    </div>
                    <div class="showcase-item-desc">
                        {item.desc}
                    </div>
                    <div class="showcase-item-more-info">
                        {#each item.tags as tag}
                            <div class="tag"
                                style="background-color: {tagMap[tag]}"
                            >
                                {tag}
                            </div> 
                        {/each}
                    </div>
                </div> 
            </a>
        {/each} 
    </div>
    <div class="pagination-bar">
        {#each Array(totalPageCount).fill(0) as _, index}
            <button 
                class:selected={index + 1 === currentPage}
                on:click={() => setPage(index + 1)}>
                {index + 1}
            </button>
        {/each}
    </div>
</div>

<style>
    .tag {
        /* background-color: #28a6aa; */
        color: white;
        padding: 3px 6px;
        border-radius: 3px;
        font-size: 10px;
        margin: 2px;
    }
    .showcase-container {
        margin: auto; 
        max-width: 600px;
        justify-content: center;
        align-content: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 350;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    .showcase-search-container {
        max-width: 600px;
        margin: auto;
    }
    .showcase-item {
        min-width: 250px;
        min-height: 100px;
        max-width: 250px;
        margin: 5px;
        outline: 1px solid black; 
        border-radius: 8px;
        background-color: white;
        text-align:center;
        padding: 10px;
        transition: all 0.3s ease;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease, box-shadow 0.3s ease;
    }
    .showcase-item-desc {
        min-height: 34px;
    }
    .showcase-item-more-info {
        left: 0;
        right: 0;
        background-color: rgb(255, 255, 255);
        transition: bottom 0.3s ease;
        padding: 10px;
        border-radius: 0 0 8px 8px;
        display: flex;
    }
    .showcase-item:hover {
        background-color: rgb(234, 248, 255);
        box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
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
        text-decoration: none;
        color: inherit;
    }
    .pagination-bar {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 10px;;
    }

    .pagination-bar button {
        background-color: white;
        padding: 5px 10px;
        margin: 0 5px;
        cursor: pointer;
    }

    .pagination-bar button.selected {
        font-weight: bold;
        text-decoration: underline;
    }
</style>