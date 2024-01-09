<script lang="ts">
    import Showcase from './Showcase.svelte'; 
    import type { Project } from '$lib/index';
    
    let projects: Project[] = [
        {
            title: 'Compiler Explorer',
            route: 'compiler',
            desc: 'A tool to explore compiler outputs',
            imgLink: 'path/to/compiler-explorer-image.jpg',
            date: "June 2023"
        },
        {
            title: 'Regex Engine',
            route: 'regex-engine',
            desc: 'A regular expression testing tool',
            imgLink: 'path/to/regex-engine-image.jpg',
            date: "May 2023"
        },
        {
            title: 'Semantic Journal',
            route: 'semantic-journal',
            desc: 'A regular expression testing tool',
            imgLink: 'path/to/regex-engine-image.jpg',
            date: "May 2023"
        },
        {
            title: 'Home Server',
            route: 'home-server',
            desc: 'A regular expression testing tool',
            imgLink: 'path/to/regex-engine-image.jpg',
            date: "May 2023"
        },
        {
            title: 'B+ Tree',
            route: 'btree',
            desc: 'A regular expression testing tool',
            imgLink: 'path/to/regex-engine-image.jpg',
            date: "May 2023"
        },
    ];
 
</script>

<div class="site-title">
    WWW.Justin 
</div>
<p>
    <Showcase items={projects}/>
</p>

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

<style>
    .site-title {
        font-size: 44px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        width: 100%;
    }
</style>