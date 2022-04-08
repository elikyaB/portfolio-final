<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let content
    const projects = writable([])
    onMount(async () => {projects.set(content)})
    // $: {console.log($projects)}

    export let w
</script>

<section id="portfolio" class="page--with-nav has-background-dark has-text-light">
    <div class="contain is-flex is-flex-direction-column">
        <h1 class="heading block has-text-warning is-size-6">
            A curated sample of my work
        </h1>
        {#each $projects as proj}
            <div class="project mb-4 px-3 py-2">
                <h2 class="heading has-text-warning">
                    {proj.title}
                </h2>
                <p class="mb-1">{proj.description}</p>
                <ul class="is-flex is-justify-content-space-between">
                    {#each proj.links.array as link}
                        <li>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
        <div class="button mx-auto is-warning is-outlined">
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