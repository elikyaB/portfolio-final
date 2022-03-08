<script>
    // import { writable, get } from "svelte/store";
    import Header from "$lib/Home/Header.svelte";
    import Navbar from "$lib/Home/Navbar.svelte";
    import About from "$lib/Home/About.svelte";
    import Portfolio from "$lib/Home/Portfolio.svelte";
    import Contact from "$lib/Home/Contact.svelte";

    let w
    let h
    let y

    // $: {console.log(w,h,y)}

</script>

<svelte:head>
	<title>Eli B3 Web Dev</title>
</svelte:head>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} bind:scrollY={y}/>

<Header {h}/>
<Navbar {w} {h} {y}/>
<main>
    <About/>
    <Portfolio/>
    <Contact/>
</main>