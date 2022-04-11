<script>
    import Socials from "$lib/Socials.svelte"

    const navbarSocial = {
        id: "navbarLinks",
        style: "is-flex is-justify-content-space-around my-5",
        links: ["email", "linkedIn", "twitter", "gitHub", "codePen", "linkTree"]
    }

    const pages = [['About','#about'],['Portfolio','#portfolio'],['Contact','#contact'],['Resume','#resume']]

    export let w
    export let h
    export let y
    let highlight
    let mobile
    let section = ''
    let active = false

    function activate() {active = !active}

    $: {
        let pos = Math.floor((y+52)/h)
        highlight = [false, false, false, false]
        if (pos>0) {highlight[pos-1] = true}

        mobile = w<786
        if (mobile) {
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
</script>

<nav id="navi" class="navbar is-fixed-top">
    <div id="bar" class="navbar-brand m-0 has-background-dark">
        <a id="logo" href="/" class="navbar-item">EB3</a>
        <div id="section" class="navbar-item is-expanded is-justify-content-center has-text-warning"
        >{section}</div>
        <div class="navbar-burger has-text-warning" class:is-active={active} on:click={activate}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="navbar-menu m-0 py-0 has-background-dark" class:is-active={active} class:mobile>
        <div class="navbar-start">
            {#if mobile}
                <Socials props={navbarSocial}/>
            {/if}
        </div>
        <div class="navbar-end">
            {#each pages as page, i}
                <a href={page[1]} on:click={activate} id={`nav${i}`} class="navbar-item is-spaced 
                {i===3?'button is-warning is-outlined':'is-tab'}
                {highlight[i]?'has-background-warning has-text-dark':'has-text-warning'}" class:is-align-items-center={mobile}>
                    {page[0]}
                </a>
            {/each}
        </div>
    </div>
</nav>
    
<style lang="scss">
    #navi {background-color: transparent;}
    #logo {color: white;}
    .navbar-menu {justify-content:space-between;}
    .mobile {
        height: 100vh;
        #nav3 {margin: 0.5rem 37vw;}
        .is-tab {border-top: 1px solid $dark !important;}
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