<script>
    const test = {
        title: "title",
        image: "",
        live: "",
        github: "",
        page: "",
        description: "stuff stuff stuff",
        tags: ["HTML", "CSS", "JS"]
    }

    const array = [test, test, test]
</script>

<section id="portfolio" class="page--with-nav has-background-dark has-text-light">
    <div class="container">
        <h1 class="heading block has-text-warning">A curated sample of my best work</h1>
        {#each array as test}
            <article>
                <div class="block">
                    <h2><a class="heading has-text-warning" href={test.page}>{test.title}</a></h2>
                    <p>{test.description}</p>
                    <p>
                        {#each test.tags as tag}
                            <span class="tag">{tag}</span>
                        {/each}
                    </p>
                </div>
                <figure>
                    <a href={test.live}><img src={test.image} alt="Live"/></a>
                    <figcaption>
                        <a href={test.github}><img src='' alt="Github"/></a>
                    </figcaption>
                </figure>
            </article>
        {/each}
    </div>
</section>

<style>
    article {display: flex; flex-direction: row;}
</style>