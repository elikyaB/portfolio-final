<svelte:head>
	<title>Eli B3 Web Dev</title>
    <meta name="description" content="Elikya Bokanga, a full stack Web Developer prioritizing in web, app, and game design with a special interest in blockchain technologies.">
    <meta name="author" content="Elikya Bokanga">
</svelte:head>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} bind:scrollY={y}/>

<script>
    import Landing from "$lib/Home/Landing.svelte";
    import Navbar from "$lib/Home/Navbar.svelte";
    import About from "$lib/Home/About.svelte";
    import Portfolio from "$lib/Home/Portfolio.svelte";
    import Contact from "$lib/Home/Contact.svelte";
    import Logo from "$lib/Logo.svelte";

    export let content
    let w
    let h
    let y
</script>

<Logo/>
<Navbar {w} {h} {y}/>
<main>
    <Landing {h}/>
    <About {w} {h} {y}/>
    <Portfolio {content} {w} {h}/>
    <Contact/>
</main>