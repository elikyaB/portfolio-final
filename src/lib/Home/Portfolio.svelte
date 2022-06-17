<script>
    import { onMount } from "svelte"
    import { h, y, projects, typewriter, mode, colors } from "$lib/stores"
    import { fade } from "svelte/transition"
    import { cubicOut } from "svelte/easing"

    export let content
    onMount(async () => {projects.set(content)})
    // $: {console.log($projects)}

    let title
    let button
    let sampleHeight = 0
    $: page = `${$h}px`
    $: dropNum = $projects.length+1
    $: height = `${$h-52-title-button-0.75*16*2}px`
    $: animate = $y > $h * 1.5
    $: clr = colors[$mode]
    
    function grow(node, {delay=0, i=0, easing=cubicOut}) {
        const style = getComputedStyle(node)
        const o = +style.opacity
        const w = +style.width.slice(0,-2)
        const h = +style.height.slice(0,-2)
        const drop = -sampleHeight
        sampleHeight = h

        let duration = 1000
        let stagger = duration * i/dropNum
        delay += stagger

        return {delay, duration, easing, css: (t,u) => `
            opacity: ${t<1/3 ? 3*t*o : 1};
            transform: translate(
                ${t<1/3 ? w/2 : t<2/3 ? w/2*u : 0}px, 
                ${t<1/3 ? drop*(1-3*t) : 0}px
            );
            width: ${t<1/3 ? 0 : 1.5*(t-1/3)*w}px;
            height: ${t<2/3 ? 0 : 3*(t-2/3)*h}px;
            background: linear-gradient(
                to right, 
                ${clr.bG} ${t<2/3 ? 0 : 100*(t-2/3)*3}%, 
                ${clr.hL} ${t<2/3 ? 0 : 50+50*(t-2/3)*3}%
            );
        `}
    }

    const uncensor = (node, {delay=1000, duration=500, exact=false, color, i}) => {
        let stagger = delay * i/dropNum
        delay += stagger

        if (!exact) {
            const len = node.childNodes[0].length
            const letterW = +getComputedStyle(node).fontSize.slice(0,-2)*0.54
            const wordW = letterW * (len+2)
            const lineW = +getComputedStyle(node).width.slice(0,-2)
            const percent = wordW/lineW
            return {delay, duration, css: t => `
                background: linear-gradient(
                    to left, 
                    ${clr.bG} ${100*((1-percent)+(percent*t))}%, 
                    ${color} ${5+95*t}%
                )
            `}
        } else {
            return {delay, duration, css: t => `
                background: linear-gradient(
                    to left, 
                    ${clr.bG} ${100*t}%, 
                    ${color} ${100*t}%
                )
            `}
        }
    }
</script>

<section id="portfolio" class="page--with-nav has-background-dark has-text-light">
    {#if animate}
    <div class="contain is-flex is-flex-direction-column">
        <h1 class="heading has-text-warning" bind:clientHeight={title}>
            <div transition:typewriter="{{speed:3}}">
                A curated sample of my work
            </div>
        </h1>
        <div class="is-flex is-flex-direction-column is-justify-content-space-evenly" style:height>
            {#each $projects as proj, i}
                <div class="project px-3 py-2" in:grow="{{i:i}}">
                    <div in:fade="{{delay:1000+1000*i/dropNum, duration:500}}">
                        <h2 class="heading has-text-warning" in:uncensor="{{color:clr.hL, i:i}}">
                            {proj.title}
                        </h2>
                        <p class="mb-1" in:uncensor="{{color:clr.text, i:i+1/3}}">
                            {proj.description}
                        </p>
                        <ul class="is-flex is-justify-content-space-between">
                            {#each proj.links.array as link}
                                <li>
                                    <a href={link.url} in:uncensor="{{color:clr.link, i:i+2/3, exact:true}}">
                                        {link.text}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
        <div class="button mx-auto is-warning is-outlined hide" bind:clientHeight={button} in:grow="{{i:dropNum-1}}">
            <div in:fade="{{delay:2000}}">See more</div>
        </div>
    </div>
    {/if}
</section>

<style lang="scss">
    .project {
        border: 1px solid $gold;
        border-radius: 5px;
    }
    h2, li {font-size: 12px;}
    a {
        text-transform: uppercase;
        &:hover {text-decoration: underline;}
    }
</style>