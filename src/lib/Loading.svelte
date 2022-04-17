<script>
    import Logo from "./Logo.svelte";

    const props = {
        d6: true, 
        startingFace: 'logo', 
        size: 30, 
        units: 'vh', 
        scene: 500,
        // if d6 true //
        transition: 1.00,   // seconds
        interval: 2000,     // ms
        timeout: 4900,      // ms
        revertDelay: 5000,  // ms
        revertFace: 'logo'
    }
</script>

<header class="hero is-dark page">
    <div class="is-flex m-auto">
        <Logo {props}/>
    </div>
</header>