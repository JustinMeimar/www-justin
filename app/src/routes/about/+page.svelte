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
                I’m a computer science student at the University of Alberta. 
                This website was created to bring my reclusive command line projects 
                to life. What you’re seeing now is V 2.0 of my home-web-server project. 
                It was re-written in winter 2024 with new features and desperately 
                needed refactors.
            </p>

            <h2 class="subtitle">About the site</h2>
            <p class="body-text">
                The fronted is now using Svelte. The styles are written locally for each 
                component, pages are more reactive and, the simplicity of Svelte encouraged me
                to create some new side projects, including the recursive tree generator.
                The biggest overhaul is in the back end. With one command `docker compose up`, 
                the entire server can be deployed. The Flask server now times after excessive 
                computation in the compiler explorer, and fails gracefully. The API routes 
                are now more easily extensible for new projects using an improved naming 
                scheme and organized route blueprints. Also included is server logs, 
                and a postgreSQL database. A future project involves creating a request 
                dashboard to monitor site activity.

            </p>

            <h2 class="subtitle">My Perspective on Programming</h2>
            <p class="body-text">
                Code seems to walk the line between engineering and art. The former is commonly 
                associated as a left-brained skill, the latter a right-brain. How can this
                seemingly disparate balance acheived?  
                I think so. My perspective is to think of code 
                as a trade which necessitates good craftsmanship. In many cases, its craftmanship
                that walks the line best.  
                In many ways, the nature of programming is more similar to the brick layer and the 
                architect than that of any other.
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
        margin: auto;
        padding: 20px;
        flex-grow: 1; /* This makes sure that this container takes up all available space */
    }

    .content {
        margin: 20px 0;
        padding-bottom: 50px; /* Add padding at the bottom */
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