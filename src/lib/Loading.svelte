<script>
    import Logo from "./Logo.svelte";

    const props = {
        d6: true, 
        startingFace: 'logo', 
        size: 30, 
        units: 'vh', 
        scene: 500,
        // if d6 true //
        transition: 0.2,   // seconds
        interval: 200,     // ms
        timeout: 3000,      // ms
        revertDelay: 5000,  // ms
        revertFace: 'logo'
    }
</script>

<header class="hero is-dark page">
    <div class="is-flex m-auto">
        <Logo {props}/>
    </div>
</header>