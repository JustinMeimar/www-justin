<script>
    import Navbar from "../Navbar.svelte";
    import Footer from "../Footer.svelte";
</script>

<div class="page-container">
    <Navbar navbarColor="info-subtle" />
    <div class="about-page">

        <div class="content">
            <h1 class="title">About</h1>
            
            <h2 class="subtitle">Hi, I’m Justin</h2>
            <p class="body-text">
                A computer science student at the University of Alberta. 
                This website was created to bring my reclusive command line projects 
                to life. What you’re seeing now is version 2.0 of my home-web-server project. 
                It was re-written in January 2024 to include new features and desperately 
                needed refactors.
            </p>

            <h2 class="subtitle">V 2.0</h2>
            <p class="body-text">
                The frontend is now using Svelte, instead of React. Both ends now are composable with 
                docker for consistency and an additional layer of security. The backend is more robust, (i.e
                strange computation run from the compiler explorer is now more likely to fail gracefully.) The API routes 
                are now more easily extensible for new projects by using more organized flask blueprints. 
                Lastly are the server logs, and a postgreSQL database. A future project involves creating a request 
                dashboard to monitor site activity.
            </p>

            <h2 class="subtitle">Programming Interests</h2>
            <p class="body-text"> 
                My interests in programming vary the more I learn. Currently, I enjoy writting web-apps, systems programming, tinkering with
                embedded devices and networks.                
            </p>

            <h2 class="subtitle">On code...</h2>
            <p class="body-text">
                
                Code seems to walk the line between engineering and art, seemingly in conflict between the left and right brain.
                My perspective on how to achieve both in balance is to treat programming as a trade which necessitates 
                good craftsmanship. 
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