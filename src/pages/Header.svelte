<script>
    import { onMount } from 'svelte'

    const titles = ["coder", "programmer", "developer", "engineer"]
    let index = []
    let title = "coder"
    
    let hello
    let word
    let padding_top    

    function titleSwitch (t) {
        const current = titles.findIndex((w) => {return w === t})
        const next = current < titles.length-1 ? current+1 : 0
        index = [current, next]
        title = titles[next]
        setTimeout(() => {titleSwitch(title)}, 3000)
    }

    onMount(() => {
        titleSwitch(title)
        padding_top = `${(window.innerHeight-hello-word)/2}px`
    })

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
</script>

<header class="hero is-dark">
    <div class="hero-body pb-0" style:padding-top={padding_top}>
        <h1 class="title m-0" bind:clientHeight={hello}>Hi,<br/>I'm Eli</h1>
        {#key title}
            <div id="wordlock" class='title m-0 is-flex direction-row' bind:clientHeight={word}>
                {#each title as letter, i}
                    <div
                        in:roll="{{i:i}}"
                        out:roll="{{i:i}}"
                    >{letter}</div>
                {/each}
            </div>
        {/key}
    </div>
</header>

<style>
    header {
        font-family: 'Share Tech Mono', monospace; 
        height:100vh;
        /* vertical-align: middle; */
    }
    /* .hero-body {padding-top: 20vh;} */
    .title {font-size:14vw}
    #wordlock {position:absolute;}
</style>