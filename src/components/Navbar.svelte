<script>
    import { onMount } from 'svelte'

    let links = [['About','#about'],['Portfolio','#portfolio'],['Contact','#contact'],['Resume','#resume'],['Github','#github']]

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
        <a href="/" class="navbar-item is-tab">Eli B3 | Web Dev</a>
        <!-- <div class="navbar-item is-expanded">... pulsing dot bridge ...</div> -->
        <div 
            class="{`navbar-burger ${active?'is-active':''}`}"
            on:click={activate}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="{`navbar-menu m-0 ${active?'is-active':''}`}">
        <div class="navbar-start"/>
        <div class="navbar-end m-0">
            {#each links as link}
                <a href={link[1]} on:click={activate} class="navbar-item is-tab">{link[0]}</a>
            {/each}
        </div>
    </div>
</nav>
    
<style>
    .navbar-menu {justify-content:space-between;}
    .hide {display: none;}
</style>