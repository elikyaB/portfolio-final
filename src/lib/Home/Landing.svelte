<script>
    import { h, start, typewriter } from '$lib/stores'
    
    const titles = ["programmer", "architect", "engineer", "developer"]
    let title = "webdev"
    let hello
    let word
    let wordlock = false
    let startTitles
    $: pT = `${($h-hello-word)/2}px`

    function titleSwitch (t) {
        const current = titles.findIndex((w) => {return w === t})
        const next = current<titles.length-1 ? current+1 : 0
        title = titles[next]
        setTimeout(() => {titleSwitch(title)}, 3000)
    }

    function titleStarter () {
        setTimeout(() => {startTitles = true}, 1000)
    }

    function roll(node, {delay=0, duration=1000, previous=false, i}) {
        if (!wordlock) {
            duration = 0
            delay = (1000 / title.length) * i
            if (i+1 === title.length) {
                wordlock = true
                setTimeout(()=>{titleSwitch(title)},2000)
            }
            return {delay, duration, css: t => `opacity: ${t}`}
        }
        if (!previous) {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===0 ? -90+t*90 : 90-t*90}deg)
                translateZ(7vw)
            `}
        } else {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===1 ? -90+t*90 : 90-t*90}deg)
                translateZ(7vw)
            `}
        } 
    }
</script>

<header id="landing" class="hero is-dark page">
    <div class="hero-body pb-0" style:padding-top={pT}>
        {#if $start}
            <h1 class="title m-0" bind:clientHeight={hello}>
                <div in:typewriter>Hi!</div>
                <div in:typewriter="{{delay:1000, next:true, fn:titleStarter}}">I'm Eli</div>
            </h1>
            {#key title}
                <figure class='title m-0 is-flex has-text-warning' bind:clientHeight={word}>
                    {#if startTitles}
                        {#each title as letter, i}
                                <div in:roll="{{i:i}}"
                                out:roll="{{i:i, previous:true}}">
                                    {letter}
                                </div>
                        {/each}
                    {/if}
                </figure>
            {/key}
        {/if}
    </div>
</header>

<style>
    .title {font-size:13vw;}
    figure {position:absolute;}
</style>