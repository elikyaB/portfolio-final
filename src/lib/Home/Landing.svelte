<script>
    import { h } from '$lib/stores'
    import { onMount } from 'svelte'

    const titles = ["coder", "programmer", "developer", "engineer"]
    let title = "coder"
    // letters that overlap transition wrong
    let hello
    let word
    let start
    let wordlock = false

    onMount(() => {start = true})

    function titleSwitch (t) {
        const current = titles.findIndex((w) => {return w === t})
        const next = current < titles.length-1 ? current+1 : 0
        title = titles[next]
        setTimeout(() => {titleSwitch(title)}, 3000)
    }

    function roll(node, {delay=0, duration=1000, i}) {
        console.log(node.textContent, title, i)
        if (title[i] === node.textContent) {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===0? -90+t*90: 90-t*90}deg)
                translateZ(7vw)
            `}
        } else {
            return {delay, duration, css: t => `
                transform: rotateX(${i%2===1? -90+t*90: 90-t*90}deg)
                translateZ(7vw)
            `}
        } 
    }

    function typewriter(node, { delay=0, speed=0.5, func=null }) {
        // preprocess child nodes 
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

        return {
            delay,
            duration,
            tick: t => {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
                if (func && node.textContent === text) {
                    setTimeout(()=>{wordlock = true},3000)
                    setTimeout(()=>{titleSwitch(title)},3000+3000)
                }
            }
        }
	}
</script>

<header class="hero is-dark page">
    <div class="hero-body pb-0" style:padding-top={`${($h-hello-word)/2}px`}>
        {#if start}
            <h1 class="title m-0" bind:clientHeight={hello}>
                <div in:typewriter>Hi!</div>
                <div in:typewriter="{{delay:1000,func:true}}">I'm Eli</div>
            </h1>
            {#key title}
                <figure class='title m-0 is-flex' bind:clientHeight={word}>
                    {#if wordlock}
                        {#each title as letter, i}
                            <div class="letter has-text-warning"
                            in:roll="{{i:i}}" out:roll="{{i:i}}">{letter}</div>
                        {/each}
                    {:else}
                        <div class="has-text-warning" 
                        in:typewriter="{{delay:3000}}">
                            webdev
                        </div>
                    {/if}
                </figure>
            {/key}
        {/if}
    </div>
</header>

<style>
    header {font-family: 'Share Tech Mono', monospace;}
    .title {font-size:13vw;}
    figure {position:absolute;}
</style>