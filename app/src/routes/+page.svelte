<script lang="ts">
    // import "../static/global.css";
    import Showcase from './Showcase.svelte'; 
    import { onMount } from "svelte"; 
    import { projectDescs } from '$lib/projects';
    import Footer from './Footer.svelte';
    import Navbar from './Navbar.svelte';
    import { defaultSearchText } from '$lib/store'; 

    export const prerender = true;
    let searchText : string = "";
    let subtitle : string = "";

    const fullSubtitleText = "systems - web - cloud & more";

    onMount(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            subtitle += fullSubtitleText[i];
            i++;
            if (i === fullSubtitleText.length) {
                clearInterval(typingInterval);
            }
        }, 50);
    });

    $: {
        $defaultSearchText && (searchText = $defaultSearchText);
    }

</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>

<Navbar navbarColor="info-subtle"></Navbar>

<div class="home-page-wrapper">
    <!-- <div class="alert alert-warning" role="alert">
        This website is currently in the process of being updated from version 1 to 2.
    </div> -->
    <div class="home-logo">
        <!-- TODO: Add title -->
    </div>
    <Showcase items={projectDescs} searchText={searchText}/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</div>

<Footer></Footer>

<style>
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    
    :global(body) {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .home-logo {
        text-align: center;
        width: 100%;
        margin: 0 auto;
        max-width: 300px;
        padding: 20px 0;
    }
    .home-logo img {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        margin-top: 20px; 
        transition: all 0.5s ease;
    }
    .home-logo img:hover {
        scale: 1.07;
    }
    .site-title {
        font-size: 64px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        width: 100%;
        margin-top: 40px;
        background-color: #f9f9f9;
        width: min-content;
        white-space: nowrap;
        overflow: hidden;
        border-radius: 10px;
        margin-bottom: 10px;
        padding-left: 10px; 
        padding-right: 10px; 
    }
    .site-sub-title {
        font-size: 24px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        background-color: #fff;
        border-radius: 10px;
        /* background-color: #f9f9f9; */
        width: 100%;
        width: min-content;
        white-space: nowrap;
        overflow: hidden;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid rgb(223, 223, 223); 
    }  
</style> 