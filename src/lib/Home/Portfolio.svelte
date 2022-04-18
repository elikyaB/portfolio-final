<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let content
    const projects = writable([])
    onMount(async () => {projects.set(content)})
    $: {console.log($projects)}

    export let w
    export let h
    let title
    let button
    $: height = `${h-52-title-button-0.75*16*2}px`
</script>

<section id="portfolio" class="page--with-nav has-background-dark has-text-light">
    <div class="contain is-flex is-flex-direction-column">
        <h1 class="heading has-text-warning is-size-6" bind:clientHeight={title}>
            A curated sample of my work
        </h1>
        <div class="is-flex is-flex-direction-column is-justify-content-space-evenly" style:height>
            {#each $projects as proj}
                <div class="project px-3 py-2">
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
            {/each}
        </div>
        <div class="button mx-auto is-warning is-outlined" bind:clientHeight={button}>
            See more
        </div>
    </div>
</section>

<style lang="scss">
    .project {
        border: 1px solid $gold;
        border-radius: 5px;
    }
    h2, a {font-size: 12px;}
    a {text-transform: uppercase;}
</style>