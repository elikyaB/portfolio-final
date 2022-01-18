<script>
    import {fade, fly} from 'svelte/transition'
    import {elasticOut} from 'svelte/easing'
    import Test from '../components/Test.svelte';
    

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

    function titleSwitch (title) {
        const titles = ["coder", "programmer", "developer", "engineer"]
        const current = titles.findIndex(title)
    }

    let title = setTimeout(titleSwitch(title), 5000)
</script>

<div>
    <h1>Hi!<br/>I'm Eli,</h1>
    <Test />
</div>

<style>

</style>