<script lang="ts">
    import { onMount } from "svelte";
    import Navbar from "../../Navbar.svelte";
    import Footer from "../../Footer.svelte";
    onMount(() => {
        console.log("mount");
    });
</script>

<Navbar navbarColor='info-subtle'> </Navbar>
<div class="component-body">
    <div class="header">
        <div class="title">
            Semantic Journal
        </div>
    </div>
    <div class="sub-header">
    </div>
</div>
<Footer></Footer>

<style>
    .component-body {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        min-width: 100%;
        margin: 0;
        padding: 0;
    }
    .header {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title {
        margin-top: 20px;
        margin-bottom: 10px;
        font-size: 40px;
        font-weight: 300;
        text-align: center;
    } 
</style>