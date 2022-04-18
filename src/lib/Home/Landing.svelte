<script>
    import { onMount } from 'svelte'

    const titles = ["coder", "programmer", "developer", "engineer"]
    let title = "coder"
    // letters that overlap transition wrong

    function titleSwitch (t) {
        const current = titles.findIndex((w) => {return w === t})
        const next = current < titles.length-1 ? current+1 : 0
        title = titles[next]
        setTimeout(() => {titleSwitch(title)}, 3000)
    }

    onMount(() => {titleSwitch(title)})

    function roll(node, {delay=0, duration=1000, i}) {
        // console.log(node.textContent, title, i)
        if (title[i] === node.textContent) {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===0? -90+t*90: 90-t*90}deg)
                translateZ(7vw)
            `}
        } else {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===1? -90+t*90: 90-t*90}deg)
                translateZ(7vw)
            `}
        } 
    }

    let hello
    let word
    export let h
</script>

<header class="hero is-dark page">
    <div class="hero-body pb-0" style:padding-top={`${(h-hello-word)/2}px`}>
        <h1 class="title m-0" bind:clientHeight={hello}>
            Hi!<br/>I'm Eli
        </h1>
        {#key title}
            <figure id="wordlock" class='title m-0 is-flex' bind:clientHeight={word}>
                {#each title as letter, i}
                    <div class="letter has-text-warning"
                        in:roll="{{i:i}}"
                        out:roll="{{i:i}}"
                    >{letter}</div>
                {/each}
            </figure>
        {/key}
    </div>
</header>

<style>
    header {font-family: 'Share Tech Mono', monospace;}
    .title {font-size:13vw;}
    #wordlock {position:absolute;}
</style>