<script>
    const links = [['About','#about'],['Portfolio','#portfolio'],['Contact','#contact'],['Resume','#resume']]

    export let w
    export let h
    export let y
    let mobile
    let section
    let highlight
    let active = true

    function activate(){active = !active}

    $: {
        let pos = Math.floor((y+52)/h)
        mobile = w<576
        highlight = [false, false, false, false]
        if (mobile && active == false) {
            section = pos>0? `<${links[pos-1][0].toLowerCase()}>` : ''
        } else {
            if (section !== null) {section = ''}
            if (pos>0 && active == false) {highlight[pos-1] = true}
        }
    }

    $: {y; active = false}
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
    <div class="navbar-menu m-0 py-0 has-background-dark 
    {active?'is-active':''}
    {mobile?'mobile-nav':''}">
        <div class="navbar-start"/>
        <div class="navbar-end {mobile&&active?'mb-5':''}">
            {#each links as link, i}
                <a href={link[1]} on:click={activate} id={`nav${i}`}
                class="navbar-item is-spaced 
                {mobile?'is-align-items-center':''}
                {i===3?'button is-warning is-outlined':'is-tab'}
                {highlight[i]?'has-background-warning has-text-dark' :'has-text-warning'} ">
                    {link[0]}
                </a>
            {/each}
        </div>
    </div>
</nav>
    
<style>
    
</style>