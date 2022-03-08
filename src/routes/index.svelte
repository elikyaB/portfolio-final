<script>
    // import { writable, get } from "svelte/store";
    import Header from "$lib/Home/Header.svelte";
    import About from "$lib/Home/About.svelte";
    import Portfolio from "$lib/Home/Portfolio.svelte";
    import Contact from "$lib/Home/Contact.svelte";

    // export let w
    // export let h
    // export let y

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