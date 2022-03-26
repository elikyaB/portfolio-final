<script>
    export let w
    export let h
    // export let y

    const tabs = ['Web Development', 'Frontend', 'Backend', 'Development']

    let tabWidth
    let scrollTab
    let active = [false, false, true, false]

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
        // console.log(h,top,bottom, tabWidths, sumTabs)
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
        <div id="skills" style:height={bottom} class="is-flex is-flex-direction-column is-justify-content-space-between">
            {#if active[0]}
                <div>
                    <span class="iconify-inline" data-icon='ion:logo-html5'/>
                    <h3 class="heading is-size-6 is-inline">HTML</h3>
                    <p>The skeleton of the web, necessary for not only proper layout, accessibility, and search engine optimization via semantic and head tags.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon='ion:logo-css3' />
                    <h3 class="heading is-size-6 is-inline">CSS</h3>
                    <p>The skin of the web, used to create a pixel perfect aesthetic starting from a mobile-first design but being responsive to devices of all sizes.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon='ion:logo-javascript' />
                    <h3 class="heading is-size-6 is-inline">JavaScript</h3>
                    <p>The meat of the web, and brain behind all sorts of interactivity including animation, event handling, editing HTML via the DOM, or loading data from the backend.</p>
                </div>
            {:else if active[1]}
                <div>
                    <span class="iconify-inline" data-icon="ion:logo-react"/>
                    <h3 class="heading is-size-6 is-inline">React</h3>
                    <p>A declarative JS framework with a large ecosystem of libraries to iterate quickly, and a meta-framework Next.js for SSR and SSG.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="simple-icons:svelte"/>
                    <h3 class="heading is-size-6 is-inline">Svelte</h3>
                    <p>A JS framework that uses a compiler to achieve high performance. I used its meta-framework SvelteKit to make this site.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="simple-icons:sass"/>
                    <h3 class="heading is-size-6 is-inline">SASS</h3>
                    <p>A CSS preprocessor that enables programmatic reuse and extension of CSS.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="simple-icons:bulma"/>
                    <h3 class="heading is-size-6 is-inline">Bulma</h3>
                    <p>A modular CSS framework using BEM architecture to access many prebuilt styles.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="simple-icons:tailwindcss"/>
                    <h3 class="heading is-size-6 is-inline">Tailwind</h3>
                    <p>A utility CSS framework using Atomic architecture for high levels of customizability.</p>
                </div>
            {:else if active[2]}
                <div>
                    <span class="iconify-inline" data-icon=""/>
                    <h3 class="heading is-size-6 is-inline">backend</h3>
                    <p></p>
                </div>
            {:else if active[3]}
                <div>
                    <span class="iconify-inline" data-icon=""/>
                    <h3 class="heading is-size-6">dev</h3>
                    <p></p>
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    /* #skills {max-width: 375px; margin: 0 auto;} */
</style>