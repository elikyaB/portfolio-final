<script>
    import { y, h, w, typewriter, colors, mode, socialDelay, openForm } from "$lib/stores";
    import { fade } from 'svelte/transition'
    import Form from '$lib/Home/Form.svelte'

    let titleH
    let introH
    let outroH
    let p1h
    let p1w
    let p2h
    let p2w
    let firstTime = true
    let firstRender = true
    $: pad1 = `${(introH-p1h) / 2}px 0px`
    $: pad2 = `${(outroH-p2h) / 2}px 0px`
    $: height = `${$h-titleH-52*2-24*2}px`
    $: animate = $y>$h*2.25
    $: if (animate) {firstRender = false}
    $: timing = firstTime ? 2000 : 1000
    $: $socialDelay = timing*19/10 + 100

    function spotlight (node, {delay=0, duration=timing}) {
        setTimeout(()=>{firstTime=false},5000)
        return {delay, duration, css: t => `
            background-color: ${colors[$mode].hL};
            filter: ${t<1? 'blur(0.5rem)' : 'none'};
            transform: translate(
                ${t<1/5 ? $w/2 * (5*t) 
                : t<3/5 ? $w/2 
                : t<4/5 ? $w/2 * (4-5*t) 
                : 2*Math.sqrt($w)*(5-5*t)*Math.cos(45*(t-4/5))
            }px, 
                ${t<1/5 ? $h/3 * (1-5*t) 
                : t<1.5/5 ? 0 
                : t<2.5/5 ? $h/3 * (5*t-1.5) 
                : t<3/5 ? $h/3 
                : t<4/5 ? $h/3 * (4-5*t) 
                : 2*Math.sqrt($h)*(5-5*t)*Math.sin(45*(t-4/5))
            }px);
        `}
    }

    function textFall (node, {delay=0, duration=400}) {
        return {delay, duration, css: t => `
            background: linear-gradient(
                to bottom,
                transparent ${100*t}%,
                ${t==0? 'transparent' : colors[$mode].bG} ${100*t}%
            );
        `}
    }

    function bubble (node, {delay=0, duration=timing/2}) {
        return {delay, duration, css: t => `
            width: ${30*t+10}vw;
            height: ${30*t+10}vw;
            background: radial-gradient(
                closest-side, 
                ${colors[$mode].bG}, 
                ${colors[$mode].bG} ${(100-4)*t}%, 
                ${colors[$mode].hL} ${(100-2)*t}%, 
                ${colors[$mode].bG} ${100*t}%,
                ${colors[$mode].bG} ${(100-4*2)*t*2}%, 
                ${colors[$mode].hL} ${(100-2*2)*t*2}%, 
                ${colors[$mode].bG} ${100*t*2}%,
                ${colors[$mode].bG} ${(100-4*3)*t*3}%, 
                ${colors[$mode].hL} ${(100-2*3)*t*3}%, 
                ${colors[$mode].bG} ${100*t*3}%,
                ${colors[$mode].bG} ${(100-4*4)*t*4}%, 
                ${colors[$mode].hL} ${(100-2*4)*t*4}%, 
                ${colors[$mode].bG} ${100*t*4}%
            );
        `}
    }
</script>

<section id="person" class="page--with-nav--and-foot has-background-dark has-text-light">
    {#if animate || ($w<576 && !firstRender)}
    <div class="contain">
        <div bind:clientHeight={titleH}>
            <h1 class="heading block has-text-warning" style:text-align=center transition:typewriter="{{speed:3}}">
                Let's get in touch
            </h1>
        </div>
        <div class="is-flex is-flex-direction-column is-justify-content-space-evenly" style:height>
            <div bind:clientHeight={introH}>
                <div class="frame left" in:spotlight>
                    <img src="assets/suitedup_square.jpg" alt="me" in:fade="{{delay:timing}}"/>
                </div>
                <div class="veil" in:textFall="{{delay:timing+100, duration:timing/5}}" style:height={p1h+'px'} style:width={p1w+'px'} style:margin={pad1}/>
                <p bind:clientHeight={p1h} bind:clientWidth={p1w} style:margin={pad1} style:text-align=left in:fade="{{delay:timing+100, duration:timing/5}}">As a global citizen, I was attracted to the potential of the web to create a world beyond borders. I strive to push the boundaries of what's possible, both for myself and the technology.</p>
            </div>
            <div bind:clientHeight={outroH}>
                <div class="frame right" in:fade="{{delay:timing*7/5+100, duration:timing/5}}">
                    <button class="button m-auto is-warning is-outlined" in:bubble="{{delay:timing*7/5+100}}" on:click={()=>{$openForm=true}}>
                        <div in:fade="{{delay:timing*19/10+100, duration:timing/5}}">
                            Say hello
                        </div>
                    </button>
                </div>
                <div class="veil" in:textFall="{{delay:timing*6/5+100, duration:timing/5}}" style:height={p2h+'px'} style:width={p2w+'px'} style:margin={pad2}/>
                <p bind:clientHeight={p2h} bind:clientWidth={p2w} style:margin={pad2} style:text-align=right in:fade="{{delay:timing*6/5+100, duration:timing/5}}">I'm open to opportunities of all kinds in the Boston area or remote. Whether it's a small passion project or a corporate product, I'm always available to consult or collaborate.</p>
            </div>
        </div>
        {#if $openForm}
            <div class="modal is-active" transition:fade>
                <div class="modal-background"/>
                <div class="modal-content">
                  <Form/>
                </div>
            </div>
        {/if}
    </div>
    {/if}
</section>

<style lang="scss">
    img {
        z-index: 2;
        height: inherit;
        width: inherit;
        max-width: inherit;
        max-height: inherit;
        border-radius: inherit;
        border: 1px solid $gold;
        margin-top: inherit;
    }
    .frame {
        z-index: 2;
        display: flex;
        width: 40vw;
        height: 40vw;
        max-width: 250px;
        max-height: 250px;
        border-radius: 50%;
        shape-outside: circle();
        &.right {float: right; margin-left: 5vw;}
        &.left {float: left; margin-right: 5vw;}
    }
    .button {
        z-index: 2;
        width: 40vw;
        height: 40vw;
        max-width: 250px;
        max-height: 250px;
        border-radius: 50%;
        shape-outside: circle();
    }
    .veil {position: absolute; z-index: 1;}
</style>