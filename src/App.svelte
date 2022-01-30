<script>
	import 'bulma/bulma.sass'
	import './styles.scss'
	import Header from "./pages/Header.svelte";
	import Navbar from "./components/Navbar.svelte";
	import About from "./pages/About.svelte";
	import Portfolio from "./pages/Portfolio.svelte";
	import Contact from "./pages/Contact.svelte";
	import Footer from "./components/Footer.svelte";
</script>

<svelte:head>
	<title>Eli B3 Web Dev</title>
	<style>@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');</style>
</svelte:head>

<Header />
<Navbar />
<main>
	<About />
	<Portfolio />
	<Contact />
</main>
<Footer />