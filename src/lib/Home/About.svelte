<script>

    export let w
    // export let h
    // export let y

    const tabs = ['Programming', 'Architecture', 'Engineering', 'Development']

    let tabWidth
    let scrollTab
    let active = [true, false, false, false]

    function changeActive(i) {
        active = [false, false, false, false]
        active[i] = true
        if (w < tabWidth) {
            scrollTab.scrollTo({
                left: (tabWidth/2)*(i/tabs.length), 
                behavior: 'smooth'
            })
        }
    }

    $: {
        // console.log(w,h,y, tabWidth, active[0])
    }
    
</script>

<section id="about" class="page--with-nav has-background-dark has-text-light">
    <div class="contain">
        <h1 class="heading block has-text-warning">From ideation to realization</h1>
        <p>Ever curious, ever learning.</p>
        <p>Give me your plans, let's make them come to life.</p>
        <p>Here's a few technologies I've been working with recently:</p>
    </div>
    <div class="{w>576?'contain':''} tabs no-scrollbars" bind:this={scrollTab}>
        <ul bind:clientWidth={tabWidth} class="is-justify-content-space-between">
            {#each tabs as tab, i}
                <li id={`tab${i}`} class={active[i]?'is-active':''}
                on:click={() => {changeActive(i)}}>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a>{tab}</a>
                </li>
            {/each}
        </ul>
    </div>
    <div class="contain">
        <div class="skills">
            {#if active[0]}
                <!-- <blockquote cite="https://www.etymonline.com/word/program#etymonline_v_2640">"a definite plan or scheme, method of operation or line of procedure prepared or announced beforehand"</blockquote> -->
                <ol>
                    <li>Client Requirements</li>
                    <p>This</p>

                </ol>
                {:else if active[1]}
                <p>content1</p>
            {:else if active[2]}
                <p>content2</p>
            {:else if active[3]}
                <p>content3</p>
            {/if}
        </div>
    </div>
</section>

<style>
</style>