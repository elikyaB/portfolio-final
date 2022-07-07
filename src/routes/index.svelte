<ScrollArrow/>
<main>
    <Landing/>
    <Portfolio {content}/>
    <Process/>
    <Person/>
</main>

<script>
    export let content
    import { w, h, y, start, openForm } from "$lib/stores"
    import { onMount } from 'svelte'
    onMount(() => {
        if (Document !== null) {$start = true}
        if ($start) {window.scrollTo(0,0)}
    })

    let timeout

    function resizer (e) {
        if ($start && !$openForm) {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`)     
        }
    }

    import Landing from "$lib/Home/Landing.svelte";
    import Portfolio from "$lib/Home/Portfolio.svelte";
    import Process from "$lib/Home/Process.svelte";
    import Person from "$lib/Home/Person.svelte";
    import ScrollArrow from "$lib/Home/ScrollArrow.svelte";
</script>

<svelte:head>
	<title>Eli B3 Web Dev</title>
    <meta name="description" content="Elikya Bokanga, a full stack Web Developer prioritizing in web, app, and game design with a special interest in blockchain technologies.">
    <meta name="author" content="Elikya Bokanga">
</svelte:head>

<svelte:window 
    bind:innerWidth={$w} 
    bind:innerHeight={$h} 
    bind:scrollY={$y}
    on:resize|capture={resizer}
/>