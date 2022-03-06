<script>
  import "../app.scss";
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<slot name="header"/>
<Navbar/>
<slot />
<Footer/>

