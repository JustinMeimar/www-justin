<script lang="ts">
    import InfoTemplate from './InfoTemplate.svelte';
    import { onMount } from "svelte";
    import Navbar from "../Navbar.svelte";
    import Footer from "../Footer.svelte";
    import { projectDescs } from "$lib/projects";
    import type { Project } from "$lib/types";
    
    export let projectRoute: String;
    let project : Project | null = null; 

    onMount(() => {
        project = projectDescs.filter((project) => {
            return project.route === projectRoute;
        })[0];
    });

</script>

<Navbar navbarColor='info-subtle'></Navbar>

{#if project} 
    <InfoTemplate
        project={project}
    />
{/if}

<Footer></Footer>