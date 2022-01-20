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
        console.log(node.textContent, title, i)
        if (title[i] === node.textContent) {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===0? -90+t*90: 90-t*90}deg)
                translateZ(3vw)
            `}
        } else {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===1? -90+t*90: 90-t*90}deg)
                translateZ(3vw)
            `}
        } 
    }

</script>

<section id="landing">
    <h1 class="title m-0">Hi,<br/>I'm Eli</h1>
    {#key title}
        <div id="wordlock" class='is-flex direction-row'>
            {#each title as letter, i}
                <div class="title"
                    in:roll="{{i:i}}"
                    out:roll="{{i:i}}"
                >{letter}</div>
            {/each}
        </div>
    {/key}
</section>

<style>
    #landing {height: 100vh;}
    #wordlock {position:absolute;}
    h1, div {font-family: 'Share Tech Mono', monospace;}
</style>