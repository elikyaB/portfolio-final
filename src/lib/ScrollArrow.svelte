<script>
    import { y, h, start } from '$lib/stores'
    import { fade } from 'svelte/transition'

    let size = 24
    let left = `calc(98vw - ${size}px)`
    let triggers = [false, false, false]
    
    $: if ($start) {
        setTimeout(()=>{triggers = [true, true, true]}, 8000)
    }

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
