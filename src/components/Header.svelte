<script>
    import { onMount } from 'svelte'
    
    let postHero = false
    function fixNavbar(){
        if (window.scrollY>screen.height) {postHero = true}
        else {postHero=false}
        setTimeout(() => {fixNavbar()}, 20)
    }

    onMount(() => fixNavbar())

    let active = false
    function activate(){active = !active}
</script>

<nav id="navi" class="{`navbar ${postHero?'is-fixed-top':''}`}" aria-label="main navigation">
    <div class="navbar-brand">
        <a href="/" class="navbar-item">Eli B3 | Web Dev</a>
        <div 
            class="{`navbar-burger has-dropdown is-arrowless is-right${active?' is-active':''}`}"
            on:click|stopPropagation={activate}
            on:pointerenter={activate}
            on:pointerleave={activate}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="{`navbar-menu ${active?' is-active':''}`}">
        <div class="navbar-start">
            <!-- <div class="navbar-item">... pulsing dot bridge ...</div> -->
        </div>
        <div class="navbar-end">
            <a href="#about" class="navbar-item">About</a>
            <a href="#portfolio" class="navbar-item">Portfolio</a>
            <a href="#contact" class="navbar-item">Contact</a>
            <a href="#about" class="navbar-item">Resume</a>
            <a href="#portfolio" class="navbar-item">Github</a>
            <!-- <a href="#contact" class="navbar-item">Blog (Coming Soon)</a> -->
        </div>
    </div>
</nav>
    
<style>
    .navbar-menu {justify-content:space-between; margin: 0 auto;}
</style>