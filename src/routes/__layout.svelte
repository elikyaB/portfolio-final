<script>
  import "../app.scss";
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import Notifications from "$lib/Notifications.svelte";
</script>

<svelte:head>
    <script src="https://code.iconify.design/2/2.2.0/iconify.min.js"/>
</svelte:head>

<Navbar/>
<Notifications/>
<slot/>
<Footer/>