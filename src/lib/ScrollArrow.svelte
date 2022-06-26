<script>
    import { y, h, start } from '$lib/stores'
    import { fade } from 'svelte/transition'

    let size = 24
    let left = `calc(98vw - ${size}px)`
    let triggers = [false, false, false]
    let dic = {0: null, 1: null, 2: null}
    let loop = false
    
    $: if ($start) {
        setTimeout(()=>{
            triggers = [true, true, true]
            // let loop = true
        }, 1000)
    }

    // $: if (loop) {}

    // function timer (i) {
    //     setTimeout(()=>{
    //         triggers[i] = false;
    //         if ($y==0) {setTimeout(()=>{
    //             triggers[i] = true;
    //             timer(i);
    //         }, 1400+200*i)}
    //     }, 1200-200*i)
    // }

    function timer (node, i) {
        setTimeout(()=>{triggers[i] = false}, 1200-200*i)
        return {
            destroy() {
                if ($y==0) {
                    setTimeout(()=>{triggers[i] = true}, 1400+200*i)
                }
            }
        }
    }

    // function repeatFadeIn (node, {delay=0, duration=0, i}) {
    //     delay = 400-200*i
    //     duration = 1200-200*i
    //     const b = delay/duration // before delimiter
    //     const d = b + 400/duration // during delimiter
    //     const a = duration/400 // after delimiter
    //     // const o = +getComputedStyle(node).opacity
    //     return {delay, duration, css: t => `
    //         opacity: ${t<b ? 0 : t<d ? (t-b)*a : 1}
    //     `}
    // }
</script>


<figure style:z-index=1>
    {#if $y==0}
        {#each triggers as trigger, i}
            {#if trigger}
                <div in:fade="{{delay:400-200*i}}" use:timer={i} out:fade style:top={`${($h*0.98)-(size+0.5*size*i)}px`} style:left style:position=fixed>
                    <span class="iconify-inline" data-width={size} data-height={size} data-icon='icons8:chevron-down'/>
                </div>
            {/if}
        {/each}
    {/if}
</figure>
