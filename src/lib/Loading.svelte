<script>
    import Logo from "./Logo.svelte";
    
    const props = {
        d6: true, 
        face:'logo', 
        size:50, 
        units:'vw', 
        scene:2000
    }
</script>

<header class="hero is-dark page">
    <div class="is-flex m-auto">
        <Logo {props}/>
    </div>
</header>