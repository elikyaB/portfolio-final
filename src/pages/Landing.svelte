<script>
    import { onMount } from 'svelte'
    import {fade, fly} from 'svelte/transition'
    import {elasticOut} from 'svelte/easing'
    import Test from '../components/Test.svelte'

    const titles = ["abc", "def", "ghi", "klm"]
    let index = []
    let title = "abc"
    

    function titleSwitch (t) {
        // console.log(title)
        const current = titles.findIndex((w) => {return w === t})
        const next = current < titles.length-1 ? current+1 : 0
        index = [current, next]
        title = titles[next]
        setTimeout(() => {titleSwitch(title)}, 10000)
    }

    onMount(() => titleSwitch(title))

    let cipher = {'in': [], 'out': []}

    function wordlock(node, {delay=0, duration=1000, tr, ind}) {
        console.log(tr, node.textContent, ind)
        const word = tr === 'in'? index[0] : index[0]
        cipher[tr].push()
        
    }
</script>

<div>
    <h1>Hi!<br/>I'm Eli,</h1>
    {#key title}
        <h1 id="title">
            {#each title[0] as letter}
                <div 
                    in:wordlock="{{tr:'in', ind:index}}"
                    out:wordlock="{{tr:'out', ind:index}}"
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