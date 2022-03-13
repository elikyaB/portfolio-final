<script>

    export let w
    export let h
    export let y

    const tabs = ['Web Development', 'Frameworks & Libraries', 'Databases']

    let tW

    
    let active = [true, false, false]
    function deactivate() {
        active = [false, false, false]
    }

    $: {
        // console.log(w,h,y, tW, active[0])
        
    }
    
</script>

<section id="about" class="page--with-nav has-background-dark has-text-light">
    <div class="container">
        <h1 class="heading block has-text-warning">From ideation to realization</h1>
        <p>Ever curious, ever learning.</p>
        <p>Give me your plans, let's make them come to life.</p>
        <p>Here's a few technologies I've been working with recently:</p>
    </div>
    <div class="tabs no-scrollbars">
        <ul bind:clientWidth={tW}>
            {#each tabs as tab, i}
                <li id={`tab${i}`} class={active[i]?'is-active':''}
                on:click={() => {deactivate(); active[i]=true}}>
                    <a>{tab}</a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="container">
        <div class="skills">

        </div>
    </div>
</section>

<style>
    .container {margin: 0 5vw;}
</style>