<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    let sY
    let vH
    const bio = [
        "For a long time I've wanted to code, from TI-89 math hacks and VBScript stack overflow 'viruses' in high school to being an Excel macro maximalist working full-time in college. In 2021 I finally decided to bite the bullet and pursue my dreams in app, crypto, and game development.",
    ]

    // function checkVar() {
    //     console.log(sY, vH)
    //     setTimeout(()=>{checkVar()}, 20)
    // }

    // onMount(() => checkVar())

    function sticky(node, {duration = 400, i}) {
        console.log(node.textContent, i)
        const o = +getComputedStyle(node).opacity

        return {duration, css: t => `
            opacity: ${t * o}
        `}
    }
</script>

<svelte:window bind:scrollY={sY} bind:innerHeight={vH}/>

<section id="about" class="page--with-nav columns is-mobile is-gapless">
    <div id="photo" class="column">
        <figure class="image" style:top={`${sY-vH}px`}>
            <img class="is-rounded" alt="pic of me" src="https://raw.githubusercontent.com/elikyaB/files/main/selfie.jpeg" />
        </figure>
    </div>
    <div class="column">
        {#each bio as note, i}
            <!-- {#if sY>=(1+i/(bio.length*2))*vH-52} -->
                <div class="block pl-3">
                    {note}
                </div>
            <!-- {/if} -->
        {/each}
    </div>
</section>

<style>
    #about {overflow: hidden;}
    img {position: relative; z-index: -1;}
</style>