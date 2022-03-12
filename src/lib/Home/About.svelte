<script>
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte'
    export let w
    export let h
    export let y

    // function checkVar(a,b,c) {
    //     console.log(a,b,c)
    //     setTimeout(()=>{checkVar()}, 20)
    // }

    // onMount(() => checkVar(w,h,y))

    // function sticky(node, {duration = 400, i}) {
    //     console.log(node.textContent, i)
    //     const o = +getComputedStyle(node).opacity

    //     return {duration, css: t => `
    //         opacity: ${t * o}
    //     `}
    // }

    
</script>

<section id="about" class="page--with-nav has-background-dark has-text-light">
    <div>
        <p>From ideation to realization</p>
        <p>I'm a full stack developer trying to make the web a better place. {y}</p>
        <p>I have grand visions, and wanted to be that guy who could just take any idea and run with it.</p>
        <p>Here's a few technologies I've been working with recently: JavaScript, React, Svelte, MongoDB, Bulma, SASS</p>
    </div>
</section>

<style>
   
</style>