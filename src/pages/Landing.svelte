<script>
    import { onMount } from 'svelte'
    import {fade, fly} from 'svelte/transition'
    import {elasticOut} from 'svelte/easing'
    import Test from '../components/Test.svelte'

    const titles = ["coder", "programmer", "developer", "engineer"]
    let index = []
    let title = "abc"
    

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

<div>
    <h1>Hi!<br/>I'm Eli,</h1>
    {#key title}
        <h1 id="title">
            {#each title as letter, i}
                <div 
                    in:roll="{{i:i}}"
                    out:roll="{{i:i}}"
                >{letter}</div>
            {/each}
        </h1>
    {/key}
</div>

<style>
    #title {display: flex; position:fixed;}
    h1 {margin: 0;}
</style>