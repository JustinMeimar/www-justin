<!-- NavbarComponent.svelte -->
<script lang="ts">
    import { Navbar, NavbarBrand, Nav, NavItem, NavLink, type BackgroundColor } from '@sveltestrap/sveltestrap';
    export let navbarColor: BackgroundColor = 'dark';
</script>

<Navbar  
    class=""
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
            <NavLink href="/blog">
                Blog
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/resume">
                Resume
            </NavLink>
        </NavItem>
    </Nav>
</Navbar>

<style>

</style>
