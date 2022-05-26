<!-- <Loading/> -->
<Navbar/>
<main>
    <Landing/>
    <About/>
    <Portfolio {content}/>
    <Contact/>
</main>

<svelte:head>
	<title>Eli B3 Web Dev</title>
    <meta name="description" content="Elikya Bokanga, a full stack Web Developer prioritizing in web, app, and game design with a special interest in blockchain technologies.">
    <meta name="author" content="Elikya Bokanga">
</svelte:head>

<svelte:window 
    bind:innerWidth={$w} 
    bind:innerHeight={$h} 
    bind:scrollY={$y}
/>

<script>
    export let content
    import { w, h, y, start } from "$lib/stores";

    import { onMount } from 'svelte'
    onMount(() => {
        if (Document !== null) {$start = true}
    })

    import Loading from "$lib/Loading.svelte";
    import Landing from "$lib/Home/Landing.svelte";
    import Navbar from "$lib/Home/Navbar.svelte";
    import About from "$lib/Home/About.svelte";
    import Portfolio from "$lib/Home/Portfolio.svelte";
    import Contact from "$lib/Home/Contact.svelte";
</script>