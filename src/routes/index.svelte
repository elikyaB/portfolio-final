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
    on:mousewheel|capture|stopPropagation={scroller}
/>

<script>
    export let content
    import { w, h, y, start } from "$lib/stores";

    import { onMount } from 'svelte'
    onMount(() => {if (Document !== null) {$start = true}})

    // function resizer (e) {
    //     document.documentElement.style.setProperty('--vh', `${$h/100}px`)
    // }

    let scrolling = false
    let target = 0
    $: if ($start) {window.scrollTo({top: target*$h, behavior:'smooth'})}


    function scroller (e) {
        // console.time(e.timeStamp)
        if (!scrolling) {
            scrolling = true
            // setTimeout(()=>{
                if (e.deltaY>0) { pageDown() }
                if (e.deltaY<0) { pageUp() }
                setTimeout(()=>{scrolling=false;}, 100)
            // }, 200)
        }
        // console.timeEnd(e.timeStamp)
    }

    function pageDown () { target = Math.ceil($y/$h) }
    function pageUp () { target = Math.floor($y/$h) }

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