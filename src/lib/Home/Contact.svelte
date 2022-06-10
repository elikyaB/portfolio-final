<script>
    import { y, h, w, navH, typewriter, colors, mode, socialDelay, start } from "$lib/stores";
    import { fade } from 'svelte/transition'
    import Form from '$lib/Form.svelte'

    let titleH
    let introH
    let outroH
    let p1h
    let p1w
    let p2h
    let p2w
    let firstTime = true
    let form = false
    $: pad1 = `${(introH-p1h) / 2}px`
    $: pad2 = `${(outroH-p2h) / 2}px`
    $: height = `${$h-$navH-titleH-52-24*2}px`
    $: animate = $y>$h*2.5
    $: timing = firstTime ? 2000 : 1000
    $: $socialDelay = timing + 900 + timing/2
    $: if ($start) {
        form? document.querySelector('html').style.overflowY = 'hidden'
            : document.querySelector('html').style.overflowY = ''
    }

    function toggleForm () {form = !form}

    function spotlight (node, {delay=0, duration=timing}) {
        setTimeout(()=>{firstTime=false},5000)
        return {delay, duration, css: t => `
            background-color: ${colors[$mode].hL};
            filter: blur(0.5rem);
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

<section id="contact" class="page--with-nav--and-foot has-background-dark has-text-light">
    {#if animate}
    <div class="contain">
        <div bind:clientHeight={titleH}>
            <h1 class="heading block has-text-warning" transition:typewriter="{{speed:3}}">
                Let's get in touch
            </h1>
        </div>
        <div class="is-flex is-flex-direction-column is-justify-content-space-evenly" style:height>
            <div bind:clientHeight={introH}>
                <div class="frame left" in:spotlight>
                    <img src="assets/suitedup_square.jpg" alt="me" in:fade="{{delay:timing}}"/>
                </div>
                <div class="veil" in:textFall="{{delay:timing+100}}" style:height={p1h+'px'} style:width={p1w+'px'} style:margin-top={pad1}/>
                <p bind:clientHeight={p1h} bind:clientWidth={p1w} style:margin-top={pad1} style:text-align=left in:fade="{{delay:timing+100}}">I'm open to opportunities of all kinds in the Boston area or remote. Whether it's a small passion project of yours or a corporate product, I'm always available to consult or collaborate.</p>
            </div>
            <br/>
            <div bind:clientHeight={outroH}>
                <div class="frame right" in:fade="{{delay:timing+900}}">
                    <button class="button m-auto is-warning is-outlined" in:bubble="{{delay:timing+900}}">
                        <div in:fade="{{delay:timing+900+timing/2}}" on:click={toggleForm}>
                            Say hello
                        </div>
                    </button>
                </div>
                <div class="veil" in:textFall="{{delay:timing+500}}" style:height={p2h+'px'} style:width={p2w+'px'} style:margin-top={pad2}/>
                <p bind:clientHeight={p2h} bind:clientWidth={p2w} style:margin-top={pad2} style:text-align=right in:fade="{{delay:timing+500}}">I'm open to opportunities of all kinds in the Boston area or remote. Whether it's a small passion project of yours or a corporate product, I'm always available to consult or collaborate.</p>
            </div>
        </div>
        {#key form}
            <div class="modal" class:is-active={form}>
                <div class="modal-background"/>
                <div class="modal-content">
                  <Form {toggleForm}/>
                </div>
                <button class="modal-close is-large" aria-label="close" on:click={toggleForm}/>
            </div>
        {/key}
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
    .modal-close::before {background-color:$gold;}
    .modal-close::after {background-color:$gold;}
</style>