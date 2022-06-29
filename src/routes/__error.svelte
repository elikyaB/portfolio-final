<script context="module">
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
    export let title, status
</script>


<main class="page has-background-dark">
    <div class="contain">
        <h1 id="status" class="heading has-text-warning">{status}</h1>
        <div id="error">
            <p style:margin-top=5vh>{title}</p>
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
        font-size: 30vw;
        line-height: 20vw;
    }
    #error {font-size: 5vw;}
</style>

