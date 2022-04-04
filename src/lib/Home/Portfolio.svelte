<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    const baseURL = import.meta.env.VITE_BASE_URL
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN
    const projects = writable([])

    onMount(async () => {
        fetch(`${baseURL}/entries?access_token=${accessToken}&content_type=portfolio`)
        .then(response => response.json())
        .then(data => {
            const apiData = data.items.map(item => {
                return item.fields
            })
            projects.set(apiData)
            console.log($projects)
        })
        .catch(error => {
            console.log(error)
            return []
        })
    })

    export let w
</script>

<section id="portfolio" class="page--with-nav has-background-dark has-text-light">
    <div class="contain">
        <h1 class="heading block has-text-warning is-size-6">
            A curated sample of my work
        </h1>
        {#each $projects as proj}
            <div class="is-flex is-flex-direction-row mb-5">
                <div>
                    <h2 class="heading has-text-warning">
                        {proj.title}
                    </h2>
                    <p>{proj.description}</p>
                    <ul class="is-flex is-justify-content-space-between">
                        <li>View</li>
                        <li>Code</li>
                    </ul>
                </div>
                {#if w>=786}
                    <figure>
                        <a href={proj.live}><img src={proj.image} alt="screenshot"/></a>
                        <!-- <figcaption>
                            <a href={proj.code}>
                                <span class="iconify-inline" data-icon={proj.host}/>
                            </a>
                        </figcaption> -->
                    </figure>
                {/if}
            </div>
        {/each}
        <div>See more</div>
    </div>
</section>

<style>

</style>