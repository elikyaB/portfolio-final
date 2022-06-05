<script>
    import Socials from "$lib/Socials.svelte";
    import { y, h, navH, typewriter } from "$lib/stores";

    const contactSocials = {
        id: "contactLinks",
        style: "is-flex is-justify-content-space-around",
        links: ["linkedIn", "twitter", "gitHub", "codePen", "linkTree"]
    }

    let titleH
    let introH
    let outroH
    let para1
    let para2
    $: pad1 = `${(introH-para1) / 2}px`
    $: pad2 = `${(outroH-para2) / 2}px`
    $: height = `${$h-$navH*2-titleH}px`
    $: animate = $y>$h*2.5
</script>

<section id="contact" class="page--with-nav has-background-dark has-text-light">
    {#if animate}
    <div class="contain">
        <h1 class="heading block has-text-warning" transition:typewriter="{{speed:3}}" bind:clientHeight={titleH}>
            Let's get in touch
        </h1>
        <div class="is-flex is-flex-direction-column is-justify-content-space-evenly" style:height>
            <div bind:clientHeight={introH}>
                <div class="frame left">
                    <img id="me" src="assets/suitedup_square.jpg" alt="me"/>
                </div>
                <p bind:clientHeight={para1} style:margin-top={pad1} style:text-align=left>I'm open to opportunities of all kinds in the Boston area or remote. Whether it's a small passion project of yours or a corporate product, I'm always available to consult or collaborate.</p>
            </div>
            <br/>
            <div bind:clientHeight={outroH}>
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
    #me {
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
        background-color: transparent;
        &.right {
            float: right;
            margin-left: 20px;
        }
        &.left {
            float: left;
            margin-right: 20px;
        }
    }
    button {
        // font-size: 7vw;
        z-index: 1;
        width: 40vw;
        height: 40vw;
        max-width: 250px;
        max-height: 250px;
        border-radius: 50%;
        shape-outside: circle();
    }
</style>