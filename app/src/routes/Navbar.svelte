<script lang="ts">
    import { Navbar, NavbarBrand, Nav, NavItem, NavLink, type BackgroundColor } from '@sveltestrap/sveltestrap';
    export let navbarColor: BackgroundColor = 'light';
</script>

<Navbar  
    class="navbar-container"
    container="md"
    color="dark"
    dark={false}
    expand="md"
    fixed=""
    sticky=""
    theme="dark"> 
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