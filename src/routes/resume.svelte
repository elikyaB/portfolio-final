<script context="module">
</script>

<script>
    import Logo from "$lib/Logo.svelte";
    import { w } from '$lib/stores'

    const navbarLogo = {
        d6: false, 
        startingFace: 'logo', 
        size: $w>=960 ? 30 : 20,
        units: 'px', 
        scene: 1800
    }

</script>

<nav class="navbar is-fixed-top">
    <div id="bar" class="navbar-brand m-0 has-background-dark">
        <a id="logo" href="/" class="navbar-item ml-2" sveltekit:reload>
            <Logo props={navbarLogo}/>
        </a>
    </div>
</nav>
<main class="page--with-nav has-background-dark">

</main>