<script>
    import { onMount } from 'svelte'

    const titles = ["coder", "programmer", "developer", "engineer"]
    let index = []
    let title = "coder"
    

    function titleSwitch (t) {
        // console.log(title)
        const current = titles.findIndex((w) => {return w === t})
        const next = current < titles.length-1 ? current+1 : 0
        index = [current, next]
        title = titles[next]
        setTimeout(() => {titleSwitch(title)}, 3000)
    }

    onMount(() => titleSwitch(title))

    function roll(node, {delay=0, duration=1000, i}) {
        // console.log(node.textContent, title, i)
        if (title[i] === node.textContent) {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===0? -90+t*90: 90-t*90}deg)
                translateZ(2vw)
            `}
        } else {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===1? -90+t*90: 90-t*90}deg)
                translateZ(2vw)
            `}
        } 
    }
</script>

<header class="hero is-dark">
    <div class="hero-body py-0">
        <h1 class="title m-0">Hi,<br/>I'm Eli</h1>
        {#key title}
            <div id="wordlock" class='title m-0 is-flex direction-row'>
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