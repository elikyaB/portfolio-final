<script>
    const test = {
        title: "title",
        image: "",
        live: "",
        github: "",
        description: ["stuff1", "stuff2", "stuff3"],
        tags: ["HTML", "CSS", "JS"]
    }

    const array = [test, test, test]
</script>

<section id="portfolio" class="page--with-nav has-background-dark has-text-light">
    <div class="container">
        <h1 class="heading block has-text-warning">A curated sample of my best work</h1>
        {#each array as test}
            <article>
                {test.title}
            </article>
        {/each}
    </div>
</section>

<style>

</style>