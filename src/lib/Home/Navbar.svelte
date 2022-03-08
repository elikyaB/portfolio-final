<script>
    import { onMount } from 'svelte'

    const links = [['About','#about'],['Portfolio','#portfolio'],['Contact','#contact'],['Resume','#resume']]

    export let w
    export let h
    export let y
    let section
    let highlight = [false, false, false, false]

    $: {
        let pos = Math.floor((y+52)/h)
        if (w<576) {
            section = pos>0? `<${links[pos-1][0].toLowerCase()}>` : ''
        } else {
            if (section !== null) {section = ''}
            if (pos>0) {
                highlight = [false, false, false, false]
                highlight[pos-1] = true
            }
        }
    }

    let active = false
    function activate(){active = !active}
</script>


<nav id="navi" class="{`navbar is-fixed-top is-dark`}" >
    <div class="navbar-brand m-0">
        <a href="/" class="navbar-item is-tab">EB3</a>
        <div id="section" class="navbar-item is-expanded is-justify-content-center has-text-warning"
        contenteditable="true"
        bind:textContent={section}/>
        <div class="{`navbar-burger has-text-warning ${active?'is-active':''}`}" on:click={activate}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="{`navbar-menu m-0 has-background-dark ${active?'is-active':''}`}">
        <div class="navbar-start"/>
        <div class="navbar-end m-0">
            {#each links as link, i}
                <a href={link[1]} on:click={activate} id={`nav${i}`}
                class="navbar-item is-tab is-spaced has-background-dark has-text-warning {highlight[i]?'highlight':''}">
                    {link[0]}
                </a>
            {/each}
        </div>
    </div>
</nav>
    
<style>
    .navbar-menu {justify-content:space-between;}
    .hide {display: none;}
    /* .highlight {} */
</style>