<script>
    import { w, h, y, start, navH, colors, mode, openForm } from '$lib/stores'
    import Logo from "$lib/Logo.svelte"
    import { cubicOut } from 'svelte/easing'
    
    const navbarLogo = {
        d6: false, 
        startingFace: 'logo', 
        size: $w>=960 ? 30 : 20,
        units: 'px', 
        scene: 1800
    }

    const pages = [
        ['About','#about'],
        ['Portfolio','#portfolio'],
        ['Contact','#contact'],
        ['Resume','https://github.com/elikyaB/files/raw/main/Eli%20Bokanga%20Resume%202022.pdf']
    ]

    let menuH
    let settingsH
    let mobile
    let active = false
    let section = ''
    let highlight = [false, false, false, false]
    let completed = false
    let dropdownH
    $: dropdownH = $h-52-settingsH

    // let availableH
    // $: if ($start) {availableH = window.screen.availHeight}

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
                section = $openForm ? '<form>' 
                    : pos>0 && pos<4 ? `<${pages[pos-1][0].toLowerCase()}>` : ''
            }
        }
    }

    function activate() {if (mobile) {active = !active}}

    function firstLoadFade(node, {delay=0, duration=7000}) {
        return {delay, duration, tick: t => {
            if ($y !== 0) {completed = true}
            if (completed) {document.querySelector('nav').style.opacity = '1'}
            else {document.querySelector('nav').style.opacity = 
                `${t==1 ? completed=true : t>6/7 ? 7*t-6 : 0}` 
                // delay must be 0 to make skippable
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

    function veil(node, {delay=0, duration=250}) {
        if (completed && mobile) {
            return {delay, duration, css: t => `
                background: linear-gradient(
                    to bottom,
                    ${colors[$mode].bG} ${100*t}%,
                    transparent ${100*t}%
                );
            `}
        }
    }

    function drop(node, {delay=0, duration=500, easing=cubicOut, i}) {
        if (completed && mobile) {
        const style = getComputedStyle(node)
        const y = -style.height.slice(0,-2)
        const n = pages.length+3

        return {delay, duration, easing, css: t => `
            transform: translateY(${
                t>=i/n && t<(i+1)/n ? (1-n*t+i) * y : 
                t>=(i+1)/n ? 0 : y
            }px);
            opacity: ${t<=i/n ? 0 : 1};
            z-index: ${n-i};
        `}}
    }
</script>

{#if $start}
<nav class="navbar is-fixed-top" in:firstLoadFade bind:clientHeight={$navH}>
    <div id="bar" class="navbar-brand m-0 has-background-dark">
        <a id="logo" href="/" class="navbar-item ml-2">
            <Logo props={navbarLogo}/>
        </a>
        {#if mobile && $start}
            {#key section}
                <div id="section" class="navbar-item is-expanded is-flex is-flex-direction-column is-justify-content-center has-text-warning"
                transition:glitch>
                    {section}
                </div>
            {/key}
        {/if}
        <div class="navbar-burger has-text-warning" class:is-active={active} on:click={completed? activate : ()=>{completed=true}}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    {#key active}
    <div class="navbar-menu m-0 py-0" class:is-active={active} class:mobile bind:clientHeight={menuH} transition:veil>
        <div class="navbar-start" bind:clientHeight={settingsH}>
            <!-- TODO: menu settings for light mode and language select -->
            <div class="has-text-warning">H-navH: {$h-52-settingsH}; menu: {menuH-settingsH}</div>
        </div>
        <div class="navbar-end" bind:clientHeight={dropdownH}>
            {#each pages as page, i}
                <a href={page[1]} on:click={activate} id={`nav${i}`} transition:drop="{{i:i}}" sveltekit:noscroll class="navbar-item is-spaced 
                {i===3 ? 'button is-warning is-outlined' : 'is-tab'}
                {highlight[i] ? 'has-background-warning has-text-dark' : 'has-text-warning'}">
                    {page[0]}
                </a>
            {/each}
        </div>
    </div>
    {/key}
</nav>
{/if}
    
<style lang="scss">
    nav {
        background: transparent; 
        position: fixed !important;
    }
    .navbar-menu {justify-content:space-between; background: $dark;}
    .navbar-burger:hover {background-color: $dark;}
    .mobile {
        height: 100vh;
        .is-tab {border-top: 1px solid $dark !important;}
        .navbar-end {
            display: flex;
            flex-direction: column;
            justify-content: center;
            a {
                font-size: 6vh;
                font-weight: bolder;
                padding: 6vh;
                align-items: center;
            }
            #nav3 {margin: 3vh 19vw; padding: 3vh;}
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