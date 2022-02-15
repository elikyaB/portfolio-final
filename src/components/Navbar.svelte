<script>
    import { onMount } from 'svelte'

    const links = [['About','#about'],['Portfolio','#portfolio'],['Contact','#contact'],['Resume','#resume']]

    // let postHero = false
    // function showNav(){
    //     if (window.innerHeight-52<window.scrollY) {postHero = true}
    //     else {postHero=false}
    //     setTimeout(() => {showNav()}, 20)
    // }

    // onMount(() => showNav())

    let vW
    let vH
    let sY

    // $: {
    //     let mobile = vW<576 ? true : false
    //     if (mobile) {
    //         let pos = Math.floor((sY+52)/vH)
    //         document.querySelector('#highlight').innerText = pos>0 && pos<4? `<${links[pos-1][0].toLowerCase()}>` : ''
    //     } else {
    //         // if (document.querySelector('#highlight') !== null) {document.querySelector('#highlight').innerText = ''} 
    //     }
    // }

    let active = false
    function activate(){active = !active}
</script>

<svelte:window bind:innerWidth={vW} bind:innerHeight={vH} bind:scrollY={sY}/>

<nav id="navi" class="{`navbar is-fixed-top is-dark`}" >
    <div class="navbar-brand m-0">
        <a href="/" class="navbar-item is-tab">EB3</a>
        <!-- <div id="highlight" class="navbar-item is-expanded is-justify-content-center has-text-warning"/> -->
        <div class="{`navbar-burger has-text-warning ${active?'is-active':''}`}" on:click={activate}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="{`navbar-menu m-0 has-background-dark ${active?'is-active':''}`}">
        <div class="navbar-start"/>
        <div class="navbar-end m-0">
            {#each links as link}
                <a href={link[1]} on:click={activate} 
                class="navbar-item is-tab is-spaced has-background-dark has-text-warning">
                    {link[0]}
                </a>
            {/each}
        </div>
    </div>
</nav>
    
<style>
    .navbar-menu {justify-content:space-between;}
    .hide {display: none;}
    /* #highlight {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
    } */
</style>