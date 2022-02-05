<script>
    let sY
    $: selfieY = `${sY-window.innerHeight}px`
</script>

<svelte:window bind:scrollY={sY}/>

<section id="about" class="page--with-nav columns is-mobile is-gapless">
    <div id="photo" class="column">
        <figure class="image" style:top={selfieY}>
            <img class="is-rounded" alt="pic of me" src="https://raw.githubusercontent.com/elikyaB/files/main/selfie.jpeg" />
        </figure>
    </div>
    <div class="column">
        <div id="bio" class="pl-3">For a long time I've wanted to code, from TI-89 math hacks and VBScript stack overflow 'viruses' in high school to being an Excel macro maximalist working full-time in college. In 2021 I finally decided to bite the bullet and pursue my dreams in app, crypto, and game development.</div>
    </div>
</section>

<style>
    #about {overflow: hidden;}
    img {position: relative; z-index: -1;}
</style>