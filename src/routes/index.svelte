<svelte:head>
	<title>Eli B3 Web Dev</title>
    <meta name="description" content="Elikya Bokanga, a full stack Web Developer prioritizing in web, app, and game design with a special interest in blockchain technologies.">
    <meta name="author" content="Elikya Bokanga">
</svelte:head>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} bind:scrollY={y}/>

<script>
    import Header from "$lib/Home/Header.svelte";
    import Navbar from "$lib/Home/Navbar.svelte";
    import About from "$lib/Home/About.svelte";
    import Portfolio from "$lib/Home/Portfolio.svelte";
    import Contact from "$lib/Home/Contact.svelte";

    let w
    let h
    let y

</script>

<Header {h}/>
<Navbar {w} {h} {y}/>
<main>
    <About {w} {h} {y}/>
    <Portfolio {w}/>
    <Contact/>
</main>