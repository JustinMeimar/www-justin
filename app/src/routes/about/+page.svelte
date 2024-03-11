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
                A computer science student at the University of Alberta. 
                This website was created to bring my reclusive command line projects 
                to life.
            </p>

            <p class="body-text">
                I enjoy programming languages, web apps, systems software and more. 
                When a programming idea gets into my head its difficult to get it out
                except forcibly by slumping behind my keyboard for a couple days.
                It is the iterative process of imagination, experimentation, discovery and 
                integration that keeps me interested in programming.
            </p>

            <p class="body-text"> 
                Writting computer code seems to walk the line between engineering and art. 
                I have certainly felt at times that theese two traits can conflict. 
                My perspective on how to achieve both in balance is to foremost 
                treat programming like a trade which necessitates 
                good craftsmanship. Only after following solid design principles,  
                can the artistic touch shine through on an otherwise purely rational
                creation.
            </p>

            <p class="body-text"> 
                If you want to chat or send me a message, feel free to email
                me at <a> meimar@ualberta.ca </a> 
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
        flex-grow: 1;
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