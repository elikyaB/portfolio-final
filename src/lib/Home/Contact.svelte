<script>
    import Socials from "$lib/Socials.svelte";

    const contactSocials = {
        id: "contactLinks",
        style: "is-flex is-justify-content-space-around",
        links: ["linkedIn", "twitter", "gitHub", "codePen", "linkTree"]
    }
</script>

<section id="contact" class="page--with-nav has-background-dark has-text-light">
    <div class="contain">
        <h1 class="heading block has-text-warning">Let's get in touch</h1>
        <p class="block">I'm open to opportunities of all kinds in the Boston area or remote. Whether it's a small passion project of yours or a corporate product, I'm always available to consult or collaborate.</p>
        <div class="is-flex mb-5">
            <button class="button mx-auto is-warning is-outlined">Say hello</button>
        </div>
        <p class="block">If you want to keep a pulse on where I'm headed, I'm active on these platforms:</p>
        <Socials props={contactSocials}/>
    </div>
</section>