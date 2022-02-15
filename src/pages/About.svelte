<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    let sY
    let vH
    let vW
    const bio = [
        "For a long time I've wanted to code, from TI-89 math hacks and VBScript stack overflow 'viruses' in high school to being an Excel macro maximalist working full-time in college. In 2021 I finally decided to bite the bullet and pursue my dreams in app, crypto, and game development."
    ]

    // function checkVar() {
    //     console.log(sY, vH, vW)
    //     setTimeout(()=>{checkVar()}, 20)
    // }

    // onMount(() => checkVar())

    // function sticky(node, {duration = 400, i}) {
    //     console.log(node.textContent, i)
    //     const o = +getComputedStyle(node).opacity

    //     return {duration, css: t => `
    //         opacity: ${t * o}
    //     `}
    // }

    
</script>

<svelte:window bind:scrollY={sY} bind:innerHeight={vH} bind:innerWidth={vW}/>

<section id="about" class="page--with-nav has-background-dark has-text-light">
    <div id="tag" class="block has-text-warning">{"<about>"}</div>
    <div>
        <p>I'm a full stack developer trying to make the web a better place.</p>
        <p>For a long time I've wanted to code, from TI-89 math hacks and VBScript stack overflow 'viruses' in high school to being an Excel macro maximalist working full-time in college. I have grand visions, and wanted to be that guy who could just take any idea and run with it. So in 2021 I finally bit the bullet.</p>
        <p>Here's a few technologies I've been working with recently: JavaScript, React, Svelte, MongoDB, Bulma, SASS</p>
    </div>
</section>

<style>
    /* #about {overflow: hidden;font-size: 2vh;} */
    /* img {position: relative; z-index: -1;} */
    /* #tag {position:absolute} */
</style>