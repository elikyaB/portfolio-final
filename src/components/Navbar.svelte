<script>
    import { onMount } from 'svelte'

    let postHero = false
    function showNav(){
        console.log(window.scrollY, 4*window.innerHeight)
        if (window.innerHeight-52<window.scrollY) {postHero = true}
        else {postHero=false}
        setTimeout(() => {showNav()}, 20)
    }

    onMount(() => showNav())

    let active = false
    function activate(){active = !active}
</script>

<nav id="navi" class="{`navbar is-fixed-top ${postHero?'':'hide'}`}" >
    <div class="navbar-brand m-0">
        <a href="/" class="navbar-item">Eli B3 | Web Dev</a>
        <!-- <div class="navbar-item">Test</div> -->
        <div 
            class="{`navbar-burger has-dropdown is-arrowless is-right${active?' is-active':''}`}"
            on:click={activate}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="{`navbar-menu m-0${active?' is-active':''}`}">
        <div class="navbar-start">
            <!-- <div class="navbar-item">... pulsing dot bridge ...</div> -->
        </div>
        <div class="navbar-end">
            <a on:click={activate} href="#about" class="navbar-item">About</a>
            <a on:click={activate} href="#portfolio" class="navbar-item">Portfolio</a>
            <a on:click={activate} href="#contact" class="navbar-item">Contact</a>
            <!-- <hr class="navbar-divider"/> -->
            <a on:click={activate} href="#about" class="navbar-item">Resume</a>
            <a on:click={activate} href="#portfolio" class="navbar-item">Github</a>
            <!-- <a href="#contact" class="navbar-item">Blog (Coming Soon)</a> -->
        </div>
    </div>
</nav>
    
<style>
    .navbar-menu {justify-content:space-between;}
    .hide {display: none;}
</style>