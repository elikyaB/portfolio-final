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
    import { w, h, y, start } from "$lib/stores";

    import { onMount } from 'svelte'
    onMount(() => {
        if (Document !== null) {$start = true}
        if ($start) {window.scrollTo(0,0)}
    })

    function resizer (e) {
        // setTimeout(()=>{adjuster()}, 500)
    }

    $: if ($start) {document.documentElement.style.setProperty('--vh', `${$h/100}px`)}

    // function checkScrollStop () {
    //     let y1 = $y
    //     let y2, dY
    //     setTimeout(()=>{
    //         y2 = $y
    //         dY = y2-y1
    //         console.log(dY)
    //         if (dY !== 0) {
    //             console.log('scrolling')
    //         } else { 'not scrolling' }
    //     }, 50)
    // }

    function adjuster () {
        window.scrollTo({top: Math.round($y/$h)*$h, behavior: 'smooth'})
    }

    // let scrolling = false
    // let target = 0
    // $: if ($start) {window.scrollTo({top: target*$h, behavior:'smooth'})}
    // $: while (scrolling) {
    //     if ($y == target*$h) {scrolling=false}
    // }


    // function scroller (e) {
    //     if (!scrolling) {
    //         scrolling = true
    //         let y1 = $y
    //         let y2, dY
    //         setTimeout(() => {
    //             y2 = $y
    //             dY = y2-y1
    //             if (dY>0) { pageDown() }
    //             if (dY<0) { pageUp() }
    //             setInterval(()=>{if ($y==target*$h) {scrolling=false;}}, 50)
    //         }, 10);
    //     }
    // }

    // function pageDown () { target = Math.ceil($y/$h) }
    // function pageUp () { target = Math.floor($y/$h) }

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