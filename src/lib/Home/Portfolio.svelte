<script>
    export let w

    const test = {
        title: "title",
        image: "https://picsum.photos/100",
        live: "",
        code: "",
        host: "fa:github",
        page: "",
        description: "stuff stuff stuff",
        tags: ["HTML", "CSS", "JS"]
    }

    const array = [test, test, test]
</script>

<section id="portfolio" class="page--with-nav has-background-dark has-text-light">
    <div class="contain">
        <h1 class="heading block has-text-warning">
            A curated sample of my best work
        </h1>
        {#each array as test}
            <div class="is-flex is-flex-direction-row mb-5">
                <div>
                    <a href={test.page}>
                        <h2 class="heading has-text-warning">{test.title}</h2>
                    </a>
                    <p>{test.description}</p>
                    <p>
                        {#each test.tags as tag}
                            <span class="tag mr-1">{tag}</span>
                        {/each}
                    </p>
                </div>
                {#if w>=576}
                    <figure>
                        <a href={test.live}><img src={test.image} alt="screenshot"/></a>
                        <!-- <figcaption>
                            <a href={test.code}>
                                <span class="iconify-inline" data-icon={test.host}/>
                            </a>
                        </figcaption> -->
                    </figure>
                {/if}
            </div>
        {/each}
        <div>See more</div>
    </div>
</section>