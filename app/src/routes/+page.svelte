<script lang="ts">
    // import "../static/global.css";
    import Showcase from './Showcase.svelte'; 
    import { onMount } from "svelte"; 
    import { projectDescs } from '$lib/projects';
    import Footer from './Footer.svelte';
    import Navbar from './Navbar.svelte';
    let isOpen = false;
    
    let subtitle = "";
    const fullSubtitleText = "systems - full stack - more";

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
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>

<Navbar navbarColor="info-subtle"></Navbar>
<div class="home-page-wrapper">
    <div class="site-title">
        www-justin 
    </div>
    <div class="site-sub-title">
        {subtitle}
    </div>
    <Showcase items={projectDescs}/>
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
    }
    .site-sub-title {
        font-size: 24px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        background-color: #f9f9f9;
        width: 100%;
        width: min-content;
        white-space: nowrap;
        overflow: hidden;
        padding: 5px;
    }  
</style> 