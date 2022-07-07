<script>
    import { w, h, y, typewriter } from "$lib/stores";
    import { fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    const tabs = ['Programming', 'Architecture', 'Engineering', 'Development']

    let top
    let tabWidth
    let scrollTab
    let tabWidths = []
    let active
    let firstRender = true
    $: if ($w>=1200 && $h>=800) {active = [true, true, true, true]} else {active = [true, false, false, false]}
    $: animate = $y > $h * 1.25
    $: if (animate) {firstRender = false}
    $: bottom = `${$h-top-0.75*16*2-52}px`
    $: sumTabs = tabWidths.reduce((a,c) => a+c, 0) * 1.1 
        // * 1.1 adjusts for 5vw margins

    function changeActive(i) {
        if ($w<1200 || $h<800) {
            active = [false, false, false, false]
            active[i] = true
            if ($w < tabWidth) {
                scrollTab.scrollTo({
                    left: (tabWidth/2)*(i/tabs.length), 
                    behavior: 'smooth'
                })
            }
        }
    }

    function myFly(node, {delay=0, i=0, easing=cubicOut}) {
        const o = +getComputedStyle(node).opacity
        let duration = 400
        delay += duration * i
        duration -= duration * i

        return {delay, duration, easing, css: (t, u) => `
            transform: translateX(${-tabWidth * u}px);
            opacity: ${t * o};
        `}
    }
</script>

<section id="process" class="page--with-nav has-background-dark has-text-light">
    {#if animate || ($w<576 && !firstRender)}
    <div bind:clientHeight={top}>
        <div id="motto" class="contain">            
            <h1 class="heading has-text-warning" style:text-align=center transition:typewriter="{{speed:3}}">
                From ideation to realization
            </h1>
            <p class="has-text-centered" in:fade="{{delay:200}}">
                Ever curious, ever learning.
            </p>
            <p class="has-text-centered" in:fade="{{delay:400}}" style:margin-bottom={$w>400?'2vw':'0px'}>
                That's the meaning of full stack.
            </p>
        </div>
        <div class="tabs no-scrollbars mb-3" class:contain={$w>sumTabs} bind:this={scrollTab}>
            <ul class="is-justify-content-space-around" 
            bind:clientWidth={tabWidth} in:fade="{{delay:500}}">
                {#each tabs as tab, i}
                    <li id={`tab${i}`} class:is-active={active[i]} bind:clientWidth={tabWidths[i]} in:fade="{{delay:500+250*i}}" on:click={() => {changeActive(i)}}>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <a><h2>{tab}</h2></a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="contain">
        {#key active}
        <div id="skills" style:height={bottom} class="is-flex is-flex-direction-row is-justify-content-space-around">
            {#if active[0]}
                <div class="is-flex is-flex-direction-column">
                    <div in:myFly="{{delay:400}}" out:myFly>
                        <span class="iconify-inline" data-icon='bx:user-voice'/>
                        <h3 class="heading has-text-warning is-inline">Requirements</h3>
                        <p>Through iterative dialogue we'll come up with our ideal user story - how your target audience should interact with your app.</p>
                    </div>
                    <div in:myFly="{{delay:400, i:1/3}}" out:myFly="{{i:1/3}}">
                        <span class="iconify-inline" data-icon='charm:layout-dashboard'/>
                        <h3 class="heading has-text-warning is-inline">Wireframing</h3>
                        <p>Next we'll work through potential design templates, and color design schemes. If you have your own, all the better!</p>
                    </div>
                    <div in:myFly="{{delay:400, i:2/3}}" out:myFly="{{i:2/3}}">
                        <span class="iconify-inline" data-icon="mdi:timeline-clock-outline"/>
                        <h3 class="heading has-text-warning is-inline">Timeline</h3>
                        <p>Lastly we'll settle on shared expectations and a schedule of check-in dates and deliverables.</p>
                    </div>
                </div>
            {/if}
            {#if active[1]}
                <div class="is-flex is-flex-direction-column">
                    <div in:myFly="{{delay:400}}" out:myFly>
                        <span class="iconify-inline" data-icon="carbon:data-structured"/>
                        <h3 class="heading has-text-warning is-inline">Data Modelling</h3>
                        <p>Mapping your app's entities and relationships facilitates test-driven development.</p>
                    </div>
                    <div in:myFly="{{delay:400, i:1/3}}" out:myFly="{{i:1/3}}">
                        <span class="iconify-inline" data-icon="carbon:api"/>
                        <h3 class="heading has-text-warning is-inline">API Design</h3>
                        <p>What happens on the server, stays on the server - keeping your proprietary business logic safe.</p>
                    </div>
                    <div in:myFly="{{delay:400, i:2/3}}" out:myFly="{{i:2/3}}">
                        <span class="iconify-inline" data-icon="bi:stack"/>
                        <h3 class="heading has-text-warning is-inline">Tech Stack</h3>
                        <p>I'll select the most suitable technologies to maximize performance within the finalized budget.</p>
                    </div>
                </div>
            {/if}
            {#if active[2]}
                <div class="is-flex is-flex-direction-column">
                    <div in:myFly="{{delay:400}}" out:myFly>
                        <span class="iconify-inline" data-icon="fluent:beaker-32-filled"/>
                        <h3 class="heading has-text-warning is-inline">Benchmarking</h3>
                        <p>A testing framework to minimize development errors and acquire objective performance metrics.</p>
                    </div>
                    <div in:myFly="{{delay:400, i:1/3}}" out:myFly="{{i:1/3}}">
                        <span class="iconify-inline" data-icon="icon-park-solid:writing-fluently"/>
                        <h3 class="heading has-text-warning is-inline">Documentation</h3>
                        <p>Code is self-documenting, besides the protocols and best-practices that must be established for posterity.</p>
                    </div>
                    <div in:myFly="{{delay:400, i:2/3}}" out:myFly="{{i:2/3}}">
                        <span class="iconify-inline" data-icon="carbon:drone-delivery"/>
                        <h3 class="heading has-text-warning is-inline">MVP Delivery</h3>
                        <p>Integration of the various technologies to successfully deploy the app's prototype.</p>
                    </div>
                </div>
            {/if}
            {#if active[3]}
                <div class="is-flex is-flex-direction-column">
                    <div in:myFly="{{delay:400}}" out:myFly>
                        <span class="iconify-inline" data-icon="fa:gift"/>
                        <h3 class="heading has-text-warning is-inline">Fulfillment</h3>
                        <p>Fleshing out quality of life functionality, eye-catching aesthetics and animation.</p>
                    </div>
                    <div in:myFly="{{delay:400, i:1/3}}" out:myFly="{{i:1/3}}">
                        <span class="iconify-inline" data-icon="eos-icons:performance"/>
                        <h3 class="heading has-text-warning is-inline">Optimization</h3>
                        <p>Refactoring code for performance and readability, or configuring the app for different environments.</p>
                    </div>
                    <div in:myFly="{{delay:400, i:2/3}}" out:myFly="{{i:2/3}}">
                        <span class="iconify-inline" data-icon="wpf:maintenance"/>
                        <h3 class="heading has-text-warning is-inline">Maintenance</h3>
                        <p>Bug fixes, updates, and app changes on an as-needed basis, billed separately.</p>
                    </div>
                </div>
            {/if}
        </div>
        {/key}
    </div>
    {/if}
</section>

<style lang='scss'>
    #skills>div {
        height: inherit;
        justify-content: space-around;    
    }
    @media screen and (min-width: 1200px) and (min-height: 800px) {
        #skills>div>div {
            padding-left: 1vw;
            padding-right: 1vw;
            border-left: 1px solid $gold;
        }
        .tabs>ul {border-color: $gold;}
    }
</style>

<!-- <style>
    /* Tooltip container */
    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
    }
    
    /* Tooltip text */
    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;
     
      /* Position the tooltip text - see examples below! */
      position: absolute;
      z-index: 1;
    }
    
    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
      visibility: visible;
    }
    </style> -->