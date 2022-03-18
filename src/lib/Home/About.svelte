<script>

    export let w
    // export let h
    // export let y

    const tabs = ['Web Development', 'Frameworks & Libraries', 'Databases', 'Thingamajig', 'deploying stuff', 'being a badass']

    let tabWidth
    let scrollTab
    let active = [true, false, false]

    function changeActive(i) {
        active = [false, false, false]
        active[i] = true
        if (w < tabWidth) {
            scrollTab.scrollTo({
                left: tabWidth*i/tabs.length, 
                behavior: 'smooth'
            })
        }
    }

    $: {
        // console.log(w,h,y, tabWidth, active[0])
    }
    
</script>

<section id="about" class="page--with-nav has-background-dark has-text-light">
    <div class="container">
        <h1 class="heading block has-text-warning">From ideation to realization</h1>
        <p>Ever curious, ever learning.</p>
        <p>Give me your plans, let's make them come to life.</p>
        <p>Here's a few technologies I've been working with recently:</p>
    </div>
    <div class="tabs no-scrollbars" bind:this={scrollTab}>
        <ul bind:clientWidth={tabWidth}>
            {#each tabs as tab, i}
                <li id={`tab${i}`} class={active[i]?'is-active':''}
                on:click={() => {changeActive(i)}}>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a>{tab}</a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="container">
        <div class="skills">
            {#if active[0]===true}
                <p>content0</p>
            {:else if active[1]===true}
                <p>content1</p>
            {:else}
                <p>content2</p>
            {/if}
        </div>
    </div>
</section>

<style>
    ul {justify-content: space-between;}
</style>