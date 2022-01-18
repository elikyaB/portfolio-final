<script>
    import { onMount } from 'svelte'
    import {fade, fly} from 'svelte/transition'
    import {elasticOut} from 'svelte/easing'
    import Test from '../components/Test.svelte'

    const titles = ["coder", "programmer", "developer", "engineer"]
    let title = "coder"

    function titleSwitch (t) {
        console.log(title)
        const current = titles.findIndex((w) => {return w === t})
        const next = current < titles.length-1 ? current+1 : 0
        title = titles[next]
        setTimeout(() => {titleSwitch(title)}, 3000)
    }

    onMount(() => titleSwitch(title))
    

    function wordlock (node, {duration}) {
        return {
            duration,
            css: t => {
                const eased = elasticOut(t)

                return `
                    transform: scale(${eased}) rotate(${eased*1080}deg)`
            }
        }
    }
</script>

<div>
    <h1>Hi!<br/>I'm Eli,</h1>
    <h1>{title}</h1>
    <Test />
</div>

<style>

</style>