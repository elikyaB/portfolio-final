<script>
    import { onMount } from 'svelte'
    import {fade, fly} from 'svelte/transition'
    import {elasticOut} from 'svelte/easing'
    import Test from '../components/Test.svelte'

    const titles = ["coder", "programmer", "developer", "engineer"]
    let title = "coder"

    function titleSwitch (t) {
        // console.log(title)
        const current = titles.findIndex((w) => {return w === t})
        const next = current < titles.length-1 ? current+1 : 0
        title = titles[next]
        setTimeout(() => {titleSwitch(title)}, 3000)
    }

    onMount(() => titleSwitch(title))
    

    function testFade(node, {delay = 0, duration = 200}) {
        const o = +getComputedStyle(node).opacity;
        return {delay, duration, css: t => `opacity: ${t * o}`}
    }

    function rollUp(node, {delay=0, duration=500}) {
        console.log(node.textContent)
        return {delay, duration, css: t => `
            transform: rotateX(${-90+t*90}deg)
            translateZ(2vw)
        `}
    }

    function rollDown(node, {delay=0, duration=500}) {
        return {delay, duration, css: t => `
            transform: rotateX(${90-t*90}deg)
            translateZ(2vw)
        `}
    }

    let direction = false
</script>

<div>
    <h1>Hi!<br/>I'm Eli,</h1>
    {#key title}
        <h1 id="title">
            {#each title as letter}
                <div 
                    in:rollUp
                    out:rollDown
                >{letter}</div>
            {/each}
        </h1>
    {/key}
    <Test />
</div>

<style>
    #title {display: flex; position:fixed;}
    h1 {margin: 0;}
</style>