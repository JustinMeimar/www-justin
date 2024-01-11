<script lang="ts">
    // import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from '@sveltestrap/sveltestrap';
    import Showcase from './Showcase.svelte'; 
    import type { Project } from '$lib/index';
    import Footer from './Footer.svelte';
    import Navbar from './Navbar.svelte';

    let isOpen = false;
    let projects: Project[] = [
        {
            title: 'Compiler Explorer',
            route: 'compiler',
            desc: 'A tool to explore compiler outputs',
            imgLink: 'path/to/compiler-explorer-image.jpg',
            date: "June 2023",
        },
        {
            title: 'Regex Engine',
            route: 'regex-engine',
            desc: 'A regular expression testing tool',
            imgLink: 'path/to/regex-engine-image.jpg',
            date: "May 2023",
        },
        {
            title: 'Semantic Journal',
            route: 'semantic-journal',
            desc: 'A journal that can be chatted with! Developed at HackED 2024',
            imgLink: 'path/to/regex-engine-image.jpg',
            date: "May 2023",
        },
        {
            title: 'Home Server',
            route: 'home-server',
            desc: 'This server... Fully Equipped for SSH and HTTPS',
            imgLink: 'path/to/regex-engine-image.jpg',
            date: "May 2023",
        },
        {
            title: 'B+ Tree',
            route: 'btree',
            desc: 'A database index implemnentation in C++',
            imgLink: 'path/to/regex-engine-image.jpg',
            date: "May 2023",
        },
        {
            title: 'Recurrence Tree Generator',
            route: 'tree',
            desc: 'Using stochastic recurrence relations to generate nature',
            imgLink: 'path/to/regex-engine-image.jpg',
            date: "May 2023",
        },
    ];
        
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>

<Navbar></Navbar>

<div class="site-title">
    www-justin 
</div>
<div class="site-sub-title">
    full stack - cloud infra - more
</div>
<p>
    <Showcase items={projects}/>
</p>
<Footer></Footer>

<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

<style>
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    .site-title {
        font-size: 52px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        width: 100%;
    }
    .site-sub-title {
        font-size: 24px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        width: 100%;
    }
</style>