<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from "svelte"; 
    import type { Project } from '$lib/types';
    import { tagMap } from '$lib/projects';
    
    export let items : Project[] = []; 
    export let searchText = '';
    
    const itemsPerPage = 100;
    let searchTags: string[] = []; 
    let filteredItems : Project[] = items; 
    let currentPage = 1;
    let totalPageCount = Math.ceil(items.length / itemsPerPage);

    const filterItems = () => {
        if(searchText.trim() === '') {
            filteredItems = items;
        } else {
            searchTags = searchText.split(' ').filter(t => {
                return t;
            }); 
            filteredItems = items.filter((project) => {

                return (project.tags.some(projectTag => 
                    searchTags.some(searchTag => 
                        projectTag.toLowerCase().includes(searchTag.toLowerCase())
                    )
                ) || project.desc.toLowerCase().includes(searchText.toLowerCase())); 
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
    
    onMount(() => {
        filterItems();
    });
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
                class="form-control rounded" placeholder="Fuzzy Search...">
        </div>
    </div>  
    <div class="showcase-container">
        {#each paginatedItems as item}
            <a  href={`${item.link}`} target="_blank" 
                class="plain-link">
                <div class="showcase-item">
                    <div class="showcase-item-title">
                        {item.title}
                    </div>
                    <div class="showcase-item-desc">
                        {item.desc}
                    </div>
                    <div class="showcase-item-icons">
                       {#each item.iconLinks as icon}
                            <img src="/icons/{icon}.svg" class="{icon}-icon" alt=""/>
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
    color: white;
    padding: 3px 6px;
    border-radius: 3px;
    font-size: 10px;
    margin: 2px;
    overflow: hidden;
    white-space: nowrap;
}
.showcase-container {
    margin: auto; 
    max-width: 600px;
    justify-content: center;
    align-content: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
.showcase-search-container {
    max-width: 600px;
    margin: auto;
}
.showcase-item {
    min-width: 260px;
    min-height: 100px;
    max-width: 260px;
    margin: 5px;
    background-color: rgb(32, 63, 85);
    text-align:center;
    padding: 10px;
    transition: all 0.3s ease;
    box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.8);
    perspective: 1000px;
    transition: transform 0.5s; 
    color: white;
} 
.showcase-item:hover {
    background-color: rgb(24, 51, 69);
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
.showcase-item-desc {
    font-size: 14px;
}
.showcase-item-title {
    transition: font-size 0.3s ease;
    font-size: 24px;
}
.showcase-item-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 5px;
}
img {
    display: inline-block;
    width: 29px;
    height: 29px;
    object-fit: contain;
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

.cplusplus-icon {
    filter: invert(48%) sepia(92%) saturate(1352%) hue-rotate(189deg) brightness(95%) contrast(88%);
}

.javascript-icon {
    filter: invert(91%) sepia(76%) saturate(6487%) hue-rotate(360deg) brightness(105%) contrast(105%);
}

/* C Icon */
.c-icon {
    filter: invert(30%) sepia(90%) saturate(1500%) hue-rotate(180deg) brightness(90%) contrast(89%);
}

/* Docker Icon */
.docker-icon {
    filter: invert(58%) sepia(5%) saturate(6462%) hue-rotate(187deg) brightness(89%) contrast(91%);
}

/* LLVM Icon */
.llvm-icon {
    filter: invert(42%) sepia(75%) saturate(3490%) hue-rotate(220deg) brightness(92%) contrast(83%);
}

/* PostgreSQL Icon */
.postgresql-icon {
    filter: invert(35%) sepia(91%) saturate(3432%) hue-rotate(205deg) brightness(90%) contrast(85%);
}

/* SQLite Icon */
.sqlite-icon {
    filter: invert(45%) sepia(10%) saturate(1300%) hue-rotate(340deg) brightness(92%) contrast(89%);
}

/* Ubuntu Icon */
.ubuntu-icon {
    filter: invert(38%) sepia(87%) saturate(2912%) hue-rotate(8deg) brightness(93%) contrast(90%);
}

/* Django Icon */
.django-icon {
    filter: invert(48%) sepia(95%) saturate(585%) hue-rotate(80deg) brightness(90%) contrast(87%);
}

/* Flask Icon */
.flask-icon {
    filter: invert(55%) sepia(30%) saturate(1500%) hue-rotate(320deg) brightness(90%) contrast(85%);
}

/* Nginx Icon */
.nginx-icon {
    filter: invert(48%) sepia(70%) saturate(702%) hue-rotate(142deg) brightness(89%) contrast(85%);
}

/* OpenAI Icon */
.openai-icon {
    filter: invert(76%) sepia(10%) saturate(7500%) hue-rotate(160deg) brightness(95%) contrast(89%);
}

/* React Icon */
.react-icon {
    filter: invert(55%) sepia(53%) saturate(1491%) hue-rotate(204deg) brightness(97%) contrast(88%);
}

/* Rust Icon */
.rust-icon {
    filter: invert(42%) sepia(87%) saturate(2982%) hue-rotate(2deg) brightness(88%) contrast(84%);
}

/* Svelte Icon */
.svelte-icon {
    filter: invert(50%) sepia(100%) saturate(6377%) hue-rotate(346deg) brightness(103%) contrast(101%);
}

/* TypeScript Icon */
.typescript-icon {
    filter: invert(67%) sepia(29%) saturate(5024%) hue-rotate(206deg) brightness(90%) contrast(92%);
}

/* WebAssembly Icon */
.webassembly-icon {
    filter: invert(33%) sepia(92%) saturate(839%) hue-rotate(192deg) brightness(86%) contrast(85%);
}



</style>