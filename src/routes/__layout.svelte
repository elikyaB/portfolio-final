<script>
  import "../app.scss";
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";

  let w
  let h
  let y

  $: {console.log(w,h,y)}

</script>

<svelte:window bind:innerWidth={w} bind:innerHeight={h} bind:scrollY={y}/>

<slot name="header" w={w} {h} {y}/>
<Navbar {w} {h} {y}/>
<slot {w} {h} {y} />
<Footer/>


