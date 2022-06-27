<script>
    import { w, colors, mode, notes } from '$lib/stores'
    import { fly } from 'svelte/transition'
    export let note, i

    let width
    let timeout = false

    $: bG = colors[$mode].hL
    $: mL = `calc(98vw - ${width}px)`
    $: x = width + 2*$w/100

    function timer (node) {
        const time = node.textContent.length * 1000
        setTimeout(()=>{timeout = true}, time)
        return {
            destroy() {
                $notes = $notes.slice(1)
            }
        }
    }
</script>

{#if !timeout}
    <div id={`note${i}`} class="mb-1" bind:clientWidth={width} in:fly="{{delay:400, x:x}}" out:fly="{{x:x}}" use:timer style:padding=10px style:background-color={bG} style:margin-left={mL}>
        {note}
    </div>
{/if}

<style>
    div {
        display: inline-block;
        border-style: dotted;
        border-radius: 10px;
    }
</style>