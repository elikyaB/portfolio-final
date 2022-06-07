<script>
    // import Socials from "$lib/Socials.svelte";
    import { y, h, w, navH, typewriter, colors, mode } from "$lib/stores";
    import { fade } from 'svelte/transition'

    // const contactSocials = {
    //     id: "contactLinks",
    //     style: "is-flex is-justify-content-space-around",
    //     links: ["linkedIn", "twitter", "gitHub", "codePen", "linkTree"]
    // }

    let titleH
    let introH
    let outroH
    let para1
    let para2
    $: pad1 = `${(introH-para1) / 2}px`
    $: pad2 = `${(outroH-para2) / 2}px`
    $: height = `${$h-$navH*2-titleH-24*2}px`
    $: animate = $y>$h*2.5

    function spotlight (node, {delay=0, duration=2000}) {
        return {delay, duration, css: t => `
            background-color: ${colors[$mode].hL};
            filter: blur(0.5rem);
            transform: 
                translate(
                    ${t<1/5 ? $w/2 * (5*t) 
                    : t<3/5 ? $w/2 
                    : t<4/5 ? $w/2 * (4-5*t) 
                    : Math.sqrt($w) * (5-5*t) * Math.cos(45*(t-4/5))
                }px, 
                    ${t<1/5 ? $h/3 * (1-5*t) 
                    : t<1.5/5 ? 0 
                    : t<2.5/5 ? $h/3 * (5*t-1.5) 
                    : t<3/5 ? $h/3 
                    : t<4/5 ? $h/3 * (4-5*t) 
                    : Math.sqrt($h) * (5-5*t) * Math.sin(45*(t-4/5))
                }px);
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
                    <img src="assets/suitedup_square.jpg" alt="me" in:fade="{{delay:5000}}"/>
                </div>
                <p bind:clientHeight={para1} style:margin-top={pad1} style:text-align=left in:fade="{{delay:5000}}">I'm open to opportunities of all kinds in the Boston area or remote. Whether it's a small passion project of yours or a corporate product, I'm always available to consult or collaborate.</p>
            </div>
            <br/>
            <div bind:clientHeight={outroH} in:fade="{{delay:5000}}">
                <div class="frame right">
                    <button class="button m-auto is-warning is-outlined">Say hello</button>
                </div>
                <p bind:clientHeight={para2} style:margin-top={pad2} style:text-align=right>I'm open to opportunities of all kinds in the Boston area or remote. Whether it's a small passion project of yours or a corporate product, I'm always available to consult or collaborate.</p>
            </div>
        </div>
    </div>
    {/if}
</section>

<style lang="scss">
    img {
        height: inherit;
        width: inherit;
        max-width: inherit;
        max-height: inherit;
        border-radius: inherit;
        border: 1px solid $gold;
        margin-top: inherit;
    }
    .frame {
        display: flex;
        width: 40vw;
        height: 40vw;
        max-width: 250px;
        max-height: 250px;
        border-radius: 50%;
        shape-outside: circle();
        // background-color: transparent;
        &.right {
            float: right;
            margin-left: 5vw;
        }
        &.left {
            float: left;
            margin-right: 5vw;
        }
    }
    button {
        z-index: 1;
        width: 40vw;
        height: 40vw;
        max-width: 250px;
        max-height: 250px;
        border-radius: 50%;
        shape-outside: circle();
    }
</style>