<script>
    import Socials from "../Socials.svelte"

    const pages = [['About','#about'],['Portfolio','#portfolio'],['Contact','#contact'],['Resume','#resume']]

    export let w
    export let h
    export let y
    let mobile
    let section
    let highlight
    let active = false

    function activate(){active = !active}

    $: {
        let pos = Math.floor((y+52)/h)
        mobile = w<576
        
        if (mobile && !active) {
            section = pos>0? `<${pages[pos-1][0].toLowerCase()}>` : ' '
        } else {
            if (mobile && section) {section = '<menu>'}
        }

        highlight = [false, false, false, false]
        if (pos>0) {highlight[pos-1] = true}
    }

    const navbarSocial = {
        id: "navbarLinks",
        links: ["email", "linkedIn", "twitter", "gitHub", "codePen", "linkTree"]
    }
</script>


<nav id="navi" class="navbar is-fixed-top">
    <div id="bar" class="navbar-brand m-0 has-background-dark">
        <a id="logo" href="/" class="navbar-item">EB3</a>
        <div id="section" class="navbar-item is-expanded is-justify-content-center has-text-warning"
        contenteditable="true"
        bind:textContent={section}/>
        <div class="navbar-burger has-text-warning {active?'is-active':''}" on:click={activate}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="navbar-menu m-0 py-0 has-background-dark {active?'is-active':''}
    {mobile?'mobile':'desktop'}">
        <div class="navbar-start">
            <!-- {#if mobile && active}
                <Socials props={navbarSocial}/>
            {/if} -->
        </div>
        <div class="navbar-end">
            {#each pages as page, i}
                <a href={page[1]} on:click={activate} id={`nav${i}`}
                class="navbar-item is-spaced 
                {mobile?'is-align-items-center':''}
                {i===3?'button is-warning is-outlined':'is-tab'}
                {highlight[i]?'has-background-warning has-text-dark' :'has-text-warning'} ">
                    {page[0]}
                </a>
            {/each}
        </div>
    </div>
</nav>
    
<style>

</style>