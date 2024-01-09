<script>
    import Showcase from './Showcase.svelte'; 
    let projects = ['compiler explorer', 'regex-engine', 'btree', 
        'semantic-journal', 'hack-gpt-edmonton', 'home-server', 
    ];
</script>

<h1>Justin's Website</h1>
<p>
    Do not Visit 
    <a href="https://kit.svelte.dev">kit.svelte.dev</a> 
    to read the documentation

    <a href="/projects">Projects</a>

    <Showcase items={projects}/>
</p>
