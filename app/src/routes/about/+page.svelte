<script>
    import Navbar from "../Navbar.svelte";
    import Footer from "../Footer.svelte";
</script>

<div class="page-container">
    <Navbar navbarColor="info-subtle" />
    <div class="about-page">
        <h1>Hi, I’m Justin</h1>
        <div class="content">
        <p class="body-text">
            I'm a Computer Science student at the University of Alberta. 
        </p>
        <p class="body-text"> 
            To me, software development is a craft that perfectly balances engineering and art. 
        </p>
        <p class="body-text"> 
            I'm always looking to get involved in interesting projects, sometimes starting them myself.

        </p>
        <p class="body-text">
            If you'd like to connect or share thoughts, don’t hesitate to reach out at <a href="mailto:meimar@ualberta.ca">meimar@ualberta.ca</a>.
        </p>
        </div>
    </div>
    <Footer />
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .about-page {
        text-align: center;
        width: 60%;
        max-width: 600px;
        margin: auto;
        padding: 20px;
    }
    .content {
        margin: 20px 0;
        padding-bottom: 50px;
        max-height: 50%;
        overflow: auto;
    }
    .title {
        font-size: 2em;
        margin-bottom: 0.5em
    }
    .subtitle {
        font-size: 1.5em;
        margin-top: 1em;
        color: #333;
    }
    .body-text {
        font-size: 16px;
        text-align: justify;
        margin-top: 0.5em;
        color: #444;
        line-height: 1.6;
    }
</style>