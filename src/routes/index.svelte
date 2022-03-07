<script>
    import Header from "$lib/Home/Header.svelte";
    import About from "$lib/Home/About.svelte";
    import Portfolio from "$lib/Home/Portfolio.svelte";
    import Contact from "$lib/Home/Contact.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
	<title>Eli B3 Web Dev</title>
</svelte:head>

<Header slot="header"/>
<main>
    <About/>
    <Portfolio/>
    <Contact/>
</main>