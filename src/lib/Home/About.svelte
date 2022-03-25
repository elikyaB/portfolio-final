<script>

    export let w
    export let h
    // export let y

    const tabs = ['Web Development', 'Frontend', 'Backend', 'Development']

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

    let top
    let bottom
    let tabWidths = []
    let sumTabs

    $: {
        bottom = (h-top-1.5*16*2-52)/h*100 + 'vh';
        sumTabs = tabWidths.reduce((acc,cur) => acc+cur, 0) * 1.1 // adjust for 5vw margins
        console.log(h,top,bottom, tabWidths, sumTabs)
    }
</script>

<section id="about" class="page--with-nav has-background-dark has-text-light">
    <div bind:clientHeight={top}>
        <div class="contain">
            <h1 class="heading has-text-warning">From ideation to realization</h1>
            <p>Ever curious, ever learning.</p>
            <p>That's all it means to be full stack.</p>
        </div>
        <div class="{w>sumTabs?'contain':''} tabs no-scrollbars" bind:this={scrollTab}>
            <ul bind:clientWidth={tabWidth} class="is-justify-content-space-between">
                {#each tabs as tab, i}
                    <li id={`tab${i}`} class={active[i]?'is-active':''}
                    bind:clientWidth={tabWidths[i]} on:click={() => {changeActive(i)}}>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <a><h2>{tab}</h2></a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="contain">
        <div style:height={bottom} class="is-flex is-flex-direction-column is-justify-content-space-between">
            {#if active[0]}
                <div>
                    <span class="iconify-inline" data-icon='ion:logo-html5'/>
                    <h3 class="heading is-size-6">HTML</h3>
                    <p>The skeleton of the web, necessary for not only proper layout, accessibility, and search engine optimization via semantic and head tags.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon='ion:logo-css3' />
                    <h3 class="heading is-size-6">CSS</h3>
                    <p>The skin of the web, used to create a pixel perfect aesthetic starting from a mobile-first design but being responsive to devices of all sizes.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon='ion:logo-javascript' />
                    <h3 class="heading is-size-6">JavaScript</h3>
                    <p>The meat of the web, and brain behind all sorts of interactivity including animation, event handling, editing HTML via the DOM, or loading data from the backend.</p>
                </div>
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
    h3 {display: inline;}
</style>