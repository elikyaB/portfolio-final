<!-- <Loading/> -->
<Navbar/>
<Notifications/>
<ScrollArrow/>
<main>
    <Landing/>
    <About/>
    <Portfolio {content}/>
    <Contact/>
    <Footer/>
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
    on:resize={resizer}
/>

<script>
    export let content
    import { w, h, y, start, openForm } from "$lib/stores";

    import { onMount } from 'svelte'
    onMount(() => {
        if (Document !== null) {$start = true}
        if ($start) {window.scrollTo(0,0)}
    })

    function resizer (e) {
        if (!$openForm) setTimeout(()=>{adjuster()}, 500)
    }

    function adjuster () {
        window.scrollTo({top: Math.round($y/$h)*$h, behavior: 'smooth'})
    }

    $: if ($start && !$openForm) {document.documentElement.style.setProperty('--vh', `${$h/100}px`)}

    import Loading from "$lib/Loading.svelte";
    import Landing from "$lib/Home/Landing.svelte";
    import Navbar from "$lib/Home/Navbar.svelte";
    import About from "$lib/Home/About.svelte";
    import Portfolio from "$lib/Home/Portfolio.svelte";
    import Contact from "$lib/Home/Contact.svelte";
    import Footer from "$lib/Footer.svelte";
    import Notifications from "$lib/Notifications.svelte";
    import ScrollArrow from "$lib/ScrollArrow.svelte";
</script>