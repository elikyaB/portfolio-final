<script>
    import { w, h, y } from "$lib/stores";
    const tabs = ['Web Development', 'Frontend', 'Backend', 'Workflow']

    let tabWidth
    let scrollTab
    let active = [true, false, false, false]

    function changeActive(i) {
        active = [false, false, false, false]
        active[i] = true
        if ($w < tabWidth) {
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
        bottom = ($h-top-0.75*16*2-52)/$h*100 + 'vh';
        sumTabs = tabWidths.reduce((acc,cur) => acc+cur, 0) * 1.1 
        // * 1.1 adjusts for 5vw margins
    }
</script>

<section id="about" class="page--with-nav has-background-dark has-text-light">
    <div bind:clientHeight={top}>
        <div class="contain">
            <h1 class="heading has-text-warning is-size-6">From ideation to realization</h1>
            <p>Ever curious, ever learning.</p>
            <p class="mb-4">That's what it means to be full stack.</p>
        </div>
        <div class="tabs no-scrollbars mb-3" class:contain={$w>sumTabs} bind:this={scrollTab}>
            <ul bind:clientWidth={tabWidth} class="is-justify-content-space-between">
                {#each tabs as tab, i}
                    <li id={`tab${i}`} class:is-active={active[i]}
                    bind:clientWidth={tabWidths[i]} on:click={() => {changeActive(i)}}>
                        <!-- svelte-ignore a11y-missing-attribute -->
                        <a><h2>{tab}</h2></a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
    <div class="contain">
        <div id="skills" style:height={bottom} class="is-flex is-flex-direction-column is-justify-content-space-around">
            {#if active[0]}
                <div>
                    <span class="iconify-inline" data-icon='ion:logo-html5'/>
                    <h3 class="heading has-text-warning is-inline is-size-6">HTML</h3>
                    <p>The skeleton of the web, necessary for not only proper layout, accessibility, and search engine optimization via semantic and head tags.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon='ion:logo-css3' />
                    <h3 class="heading has-text-warning is-inline is-size-6">CSS</h3>
                    <p>The skin of the web, used to create a pixel perfect aesthetic starting from a mobile-first design but being responsive to devices of all sizes.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon='ion:logo-javascript' />
                    <h3 class="heading has-text-warning is-inline is-size-6">JavaScript</h3>
                    <p>The meat of the web, and brain behind all sorts of interactivity including animation, event handling, editing HTML via the DOM, or loading data from the backend.</p>
                </div>
            {:else if active[1]}
                <div>
                    <span class="iconify-inline" data-icon="ion:logo-react"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">React</h3>
                    <p>A JS framework with a large ecosystem of libraries, and a meta-framework Next.js for SSR and SSG.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="simple-icons:svelte"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">Svelte</h3>
                    <p>A JS framework that uses a compiler for high performance. I used its meta-framework SvelteKit to make this site.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="simple-icons:sass"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">SASS</h3>
                    <p>A CSS preprocessor that enables programmatic extension of CSS.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="simple-icons:bulma"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">Bulma</h3>
                    <p>A modular CSS framework using BEM architecture to access many prebuilt styles.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="simple-icons:tailwindcss"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">Tailwind</h3>
                    <p>A utility CSS framework using Atomic architecture for high levels of customizability.</p>
                </div>
            {:else if active[2]}
                <div>
                    <div class="is-inline-block">
                        <span class="iconify-inline" data-icon="fa-brands:node-js"/>
                        <h3 class="heading has-text-warning is-inline is-size-6">Node.js</h3>
                    </div>
                    <div class="is-inline-block right">
                        <span class="iconify-inline" data-icon="ion:logo-python"/>
                        <h3 class="heading has-text-warning is-inline is-size-6">Python</h3>
                    </div>
                    <p>Server-side languages I use to design and develop RESTful JSON APIs, through the Express.js or Masonite framework respectively.</p>
                </div>
                <div>
                    <div class="is-inline-block">
                        <span class="iconify-inline" data-icon="simple-icons:mongodb"/>
                        <h3 class="heading has-text-warning is-inline is-size-6">MongoDB</h3>
                    </div>
                    <div class="is-inline-block right">
                        <span class="iconify-inline" data-icon="simple-icons:postgresql"/>
                        <h3 class="heading has-text-warning is-inline is-size-6">Postgres</h3>
                    </div>
                    <p>Proficiency in both NoSQL and SQL databases allows me to choose the best tool for the job, whether defining data models or handling migrations.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="file-icons:api-blueprint"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">Middleware</h3>
                    <p>The glue of a software stack, I'm experienced with setting up user authentication, third-party APIs, and CMS for ease of client use.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="carbon:infrastructure-classic"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">Infrastructure</h3>
                    <p>I'm familiar with IaaS tools such as Heroku, Netlify, and Vercel for CI/CD.</p>
                </div>
            {:else if active[3]}
                <div>
                    <span class="iconify-inline" data-icon="bi:terminal"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">IDE</h3>
                    <p>Familiar with VS Code and the Unix-based Bash and Zsh environments, including the NPM and PIP package managers.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="ion:git-branch"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">GIT</h3>
                    <p>Real-world experience with collaborating with other developers and handling merge conflicts on GitHub.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="fluent:window-dev-tools-24-regular"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">DevTools</h3>
                    <p>Expertise with various tools for debugging, testing, and performance benchmark assessments.</p>
                </div>
                <div>
                    <span class="iconify-inline" data-icon="gg:trello"/>
                    <h3 class="heading has-text-warning is-inline is-size-6">Agile</h3>
                    <p>Experience with the SDLC as well as best practices for streamlining tasks and delegation in a remote development environment.</p>
                </div>
            {/if}
        </div>
    </div>
</section>

<style>
    .right {float:right;}
</style>