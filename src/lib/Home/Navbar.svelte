<script>
    const links = [['About','#about'],['Portfolio','#portfolio'],['Contact','#contact'],['Resume','#resume']]

    export let w
    export let h
    export let y
    let mobile
    let section
    let highlight

    $: {
        let pos = Math.floor((y+52)/h)
        mobile = w<576
        highlight = [false, false, false, false]
        if (mobile) {
            section = pos>0? `<${links[pos-1][0].toLowerCase()}>` : ''
        } else {
            if (section !== null) {section = ''}
            if (pos>0) {highlight[pos-1] = true}
        }
    }

    let active = true
    function activate(){active = !active}
</script>


<nav id="navi" class="{`navbar is-fixed-top is-dark`}" >
    <div class="navbar-brand m-0">
        <a id="logo" href="/" class="navbar-item">EB3</a>
        <div id="section" class="navbar-item is-expanded is-justify-content-center has-text-warning"
        contenteditable="true"
        bind:textContent={section}/>
        <div class="{`navbar-burger has-text-warning ${active?'is-active':''}`}" on:click={activate}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="{`navbar-menu m-0 py-0 has-background-dark ${active?'is-active':''}`}">
        <div class="navbar-start"/>
        <div class="navbar-end m-0 {mobile?'dividers':''}">
            {#each links as link, i}
                <a href={link[1]} on:click={activate} id={`nav${i}`}
                class="navbar-item is-spaced {i!==3?'divide-bot':''}
                {i===3&&!mobile?'button is-warning is-outlined':'is-tab'}
                {highlight[i]?'has-background-warning has-text-dark' :'has-text-warning'} ">
                    {link[0]}
                </a>
            {/each}
        </div>
    </div>
</nav>
    
<style>
    .navbar-menu {justify-content:space-between;}
    .dividers {
        padding: 0 auto;
        border-top: solid hsl(48, 100%, 67%);
        border-bottom: solid hsl(48, 100%, 67%);
    }
    .divide-bot {border-bottom: 1px solid hsl(48, 100%, 67%) !important;}
    .is-spaced {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
    }
    .is-tab {border-bottom: solid hsl(0, 0%, 21%);}
    .is-tab:hover {border-color: hsl(48, 100%, 67%);}
    .button {margin: 0.5rem 0.75rem;}
    .is-outlined:hover {
        background-color: hsl(48, 100%, 67%) !important;
        color: hsl(0, 0%, 21%) !important;
    }
</style>