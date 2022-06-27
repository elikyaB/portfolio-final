<!-- <Loading/> -->
<Navbar/>
<Notifications/>
<ScrollArrow/>
<main>
    <Landing />
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
    on:resize|capture={resizer}
/>

<script>
    export let content
    import { w, h, y, start, openForm, notes } from "$lib/stores";
    import { onMount } from 'svelte'
    onMount(() => {
        if (Document !== null) {$start = true}
        if ($start) {window.scrollTo(0,0)}
    })

    let timeout
    // let target
    // const pages = ['#landing', '#about', '#portfolio', '#contact']

    function resizer (e) {
        if ($start && !$openForm) {
            document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`)
            document.querySelector('header').style.height = `${window.innerHeight}px`
            document.querySelectorAll('section')[0].style.height = `${window.innerHeight}px`
            document.querySelectorAll('section')[1].style.height = `${window.innerHeight}px`
            document.querySelectorAll('section')[2].style.height = `${window.innerHeight-52}px`       
        }
        if (!$openForm) {timeout = setTimeout(()=>{adjuster()}, 800)}
    }

    function adjuster () {
        // $notes = [`H:${$h}`, ...$notes]
        // $notes = [`Y:${Math.round($y)}`, ...$notes]
        // $notes = [`T: ${Math.round($y/$h)}`, ...$notes]

        // target = y>window.scrollY ? Math.floor(window.scrollY/window.innerHeight) : Math.ceil(window.scrollY/window.innerHeight)
        // document.querySelector(pages[target]).scrollIntoView({behavior: "smooth"})
        window.scroll({top: Math.round(window.scrollY/window.innerHeight)*window.innerHeight, behavior: 'smooth'})
        clearTimeout(timeout)
    }

    // import Loading from "$lib/Loading.svelte";
    import Landing from "$lib/Home/Landing.svelte";
    import Navbar from "$lib/Home/Navbar.svelte";
    import About from "$lib/Home/About.svelte";
    import Portfolio from "$lib/Home/Portfolio.svelte";
    import Contact from "$lib/Home/Contact.svelte";
    import Footer from "$lib/Footer.svelte";
    import Notifications from "$lib/Notifications.svelte";
    import ScrollArrow from "$lib/ScrollArrow.svelte";
</script>