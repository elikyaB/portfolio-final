<script>
    import { onMount } from "svelte";
    import { w, h, y, projects, typewriter } from "$lib/stores";
    import { fade } from "svelte/transition";
    import { cubicOut, cubicIn, cubicInOut } from "svelte/easing";

    export let content
    onMount(async () => {projects.set(content)})
    // $: {console.log($projects)}

    let title
    let button
    let sampleHeight = 0
    $: height = `${$h-52-title-button-0.75*16*2}px`
    $: animate = $y > $h * 1.5
    
    function grow(node, {delay=0, i=0, easing=cubicOut}) {
        const style = getComputedStyle(node)
        const o = +style.opacity
        const w = +style.width.slice(0,-2)
        const h = +style.height.slice(0,-2)
        const drop = -sampleHeight
        sampleHeight = h
        console.log(drop)

        let duration = 2000
        let stagger = duration * i/$projects.length
        delay += stagger
        duration -= stagger

        return {delay, duration, easing, css: (t,u) => `
            opacity: ${t<1/3 ? 3*t*o : 1};
            transform: translate(
                ${t<1/3 ? w/2 : t<2/3 ? w/2*u : 0}px, 
                ${t<1/3 ? drop*(1-3*t) : 0}px
            );
            width: ${t<1/3 ? 0 : t<2/3 ? 1.5*(t-1/3)*w : w}px;
            height: ${t<2/3 ? 0 : 3*(t-2/3)*h}px;
            background: linear-gradient(
                to left, 
                hsl(0,0%,21%) ${t<2/3 ? 0 : 100*(t-2/3)*3}%, 
                #FFE08A ${t<2/3 ? 0 : 50+50*(t-2/3)*3}%
            );
        `}
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
                    <div in:fade="{{delay:4000}}">
                        <h2 class="heading has-text-warning">
                            {proj.title}
                        </h2>
                        <p class="mb-1">{proj.description}</p>
                        <ul class="is-flex is-justify-content-space-between">
                            {#each proj.links.array as link}
                                <li>
                                    <a href={link.url}>
                                        {link.text}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        </div>
        <div class="button mx-auto is-warning is-outlined" bind:clientHeight={button}>
            See more
        </div>
    </div>
    {/if}
</section>

<style lang="scss">
    .project {
        border: 1px solid $gold;
        border-radius: 5px;
    }
    h2, a {font-size: 12px;}
    a {text-transform: uppercase;}
    a:hover {text-decoration: underline;}
</style>