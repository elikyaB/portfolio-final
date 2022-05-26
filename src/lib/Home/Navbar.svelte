<script>
    import { w, h, y, start } from '$lib/stores'
    import Logo from "$lib/Logo.svelte";

    let navH
    
    const navbarLogo = {
        d6:false, 
        startingFace:'logo', 
        size:20,
        units:'px', 
        scene:1800
    }

    const pages = [['About','#about'],['Portfolio','#portfolio'],['Contact','#contact'],['Resume','#resume']]

    let highlight = [false, false, false, false]
    let mobile
    let section = ''
    let active = false

    function activate() {active = !active}

    $: {
        let pos = Math.floor(($y+52)/$h)
        highlight = [false, false, false, false]
        if (pos>0) {highlight[pos-1] = true}

        mobile = $w<786
        if (mobile && $start) {
            if (active) {
                document.querySelector('html').style.overflowY = 'hidden'
                section = '<menu>'
            }
            else {
                document.querySelector('html').style.overflowY = ''
                section = pos>0 ? `<${pages[pos-1][0].toLowerCase()}>` : ''
            }
        }
    }

    function firstLoadFade(node, {delay=0, duration=7000}) {
        let completed = false
        return {delay, duration, tick: t => {
            if ($y !== 0) {completed = true}
            if (completed) {document.querySelector('nav').style.opacity = '1'}
            else {document.querySelector('nav').style.opacity = 
                `${t>6/7 ? 7*t-6 : 0}` // delay must be 0 to make skippable
            }
        }}
    }

    function rng10() {return Math.round(Math.random()*10)}

    function glitch(node, {delay = 0,duration = 500}) {
        return {delay, duration, css: t => `
            opacity: ${t*Math.random()};
            transform: skew(${rng10()>5 ? 70 : 0}deg, 0deg);
            text-shadow: red -7px -5px;
        `}
    }
</script>

{#key $start}
<nav class="navbar is-fixed-top" in:firstLoadFade bind:clientHeight={navH}>
    <div id="bar" class="navbar-brand m-0 has-background-dark">
        <a id="logo" href="/#top" class="navbar-item ml-2">
            <Logo props={navbarLogo} {navH} responsive={$w>960}/>
        </a>
        {#if mobile && $start}
            {#key section}
                <div id="section" class="navbar-item is-expanded is-flex is-flex-direction-column is-justify-content-center has-text-warning"
                transition:glitch>
                    {section}
                </div>
            {/key}
        {/if}
        <div class="navbar-burger has-text-warning" class:is-active={active} on:click={activate}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="navbar-menu m-0 py-0 has-background-dark" class:is-active={active} class:mobile>
        <div class="navbar-start">
            {#if mobile}
                <!-- TODO: Settings menu for light mode and language select -->
            {/if}
        </div>
        <div class="navbar-end">
            {#each pages as page, i}
                <a href={page[1]} on:click={activate} id={`nav${i}`} class="navbar-item is-spaced 
                {i===3?'button is-warning is-outlined':'is-tab'}
                {highlight[i]?'has-background-warning has-text-dark':'has-text-warning'}">
                    {page[0]}
                </a>
            {/each}
        </div>
    </div>
</nav>
{/key}
    
<style lang="scss">
    nav {background-color: transparent;}
    .navbar-menu {justify-content:space-between;}
    .navbar-burger:hover {background-color: $dark;}
    .mobile {
        height: 100vh;
        #nav3 {margin: 5vh 19vw;}
        .is-tab {border-top: 1px solid $dark !important;}
        .navbar-end > a {
            font-size: 6vh;
            font-weight: bolder;
            padding: 5vh;
            align-items: center;
        }
    }
    .is-spaced {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
    }
    .is-tab {
        border-bottom: 1px solid $dark !important;
        &:hover {border-color: $gold !important;}
    }
    #nav3 {
        margin: 0.5rem 0.75rem;
        &:hover {
            background-color: $gold;
            color: $dark !important;
        }
    }
</style>