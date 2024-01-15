<!-- NavbarComponent.svelte -->
<!-- <script lang="ts">
    import { Navbar, NavbarBrand, Nav, NavItem, NavLink, type BackgroundColor } from '@sveltestrap/sveltestrap';
    export let navbarColor: BackgroundColor = 'dark';
</script>

<Navbar  
    class="d-flex justify-content-between"
    container="md"
    color={navbarColor}
    dark={false}
    expand="md"
    fixed=""
    sticky=""
    theme="light"> 
    <NavbarBrand href="/">
        Home
    </NavbarBrand>
    <Nav class="me-auto" navbar>
        <NavItem>
            <NavLink href="/about">
                About
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://justinmeimar.github.io/" target="_blank">
                Blog
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/resume.pdf" target="_blank">
                Resume
            </NavLink>
        </NavItem>

        <div class="d-flex">
            <NavItem>
                <NavLink href="https://github.com/JustinMeimar" target="_blank">
                    <img src="/github.png" alt="GitHub" style="height: 20px;"/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://www.linkedin.com/in/yourprofile" target="_blank">
                    <img src="/linkedin.png" alt="LinkedIn" style="height: 20px;"/>
                </NavLink>
            </NavItem>
        </div>
    </Nav>
</Navbar>

<style>

</style> -->
<!-- NavbarComponent.svelte -->
<script lang="ts">
    import { Navbar, NavbarBrand, Nav, NavItem, NavLink, type BackgroundColor } from '@sveltestrap/sveltestrap';
    export let navbarColor: BackgroundColor = 'dark';
</script>

<Navbar  
    class="navbar-container"
    container="md"
    color={navbarColor}
    dark={false}
    expand="md"
    fixed=""
    sticky=""
    theme="light"> 
    <NavbarBrand href="/">
        Home
    </NavbarBrand>
    <Nav class="me-auto" navbar>
        <!-- Existing NavItems -->
        <NavItem>
            <NavLink href="/about">
                About
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://justinmeimar.github.io/" target="_blank">
                Blog
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/resume.pdf" target="_blank">
                Resume
            </NavLink>
        </NavItem>
    </Nav>
    <div class="social-links">
        <Nav>
            <NavItem>
                <NavLink href="https://github.com/JustinMeimar" target="_blank">
                    <img src="/images/github.png" alt="GitHub" style="height: 30px;"/>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://www.linkedin.com/in/yourprofile" target="_blank">
                    <img src="/images/linkedin.png" alt="LinkedIn" style="height: 30px;"/>
                </NavLink>
            </NavItem> 
        </Nav>
    </div>
</Navbar>

<style>
    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .social-links {
        display: flex;
    }
</style>