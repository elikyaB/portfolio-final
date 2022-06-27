<script context="module">
    // import Navbar from '$lib/Home/Navbar.svelte';
    // let skipFade = false

    export function load({ error, status }) {
        console.log(error, status)
        return {
            props: {
                title: `${error.message}`,
                status: status
            }
        };
    }
</script>
  
<script>
    import '../app.scss'
    // import Navbar from '$lib/Home/Navbar.svelte';
    // let skipFade = false
    export let title, status
</script>


<main class="page has-background-dark">
    <div class="contain">
        <h1 id="status" class="heading has-text-warning">{status}</h1>
        <div id="error">
            <p>{title}</p>
            <a href="/">Back to Home</a>
        </div>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    p {overflow-wrap:break-word;}
    #status {
        font-size: 20vw;
        line-height: 20vw;
    }
</style>

