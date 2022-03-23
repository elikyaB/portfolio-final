<script>
    import Icon from '@iconify/svelte'
    import envelopeIcon from '@iconify/icons-fa/envelope'
    import linkedinIcon from '@iconify/icons-fa/linkedin'
    import twitterIcon from '@iconify/icons-fa/twitter'
    import githubIcon from '@iconify/icons-fa/github'
    import codepenIcon from '@iconify/icons-fa/codepen'
    import linktreeIcon from '@iconify/icons-simple-icons/linktree'

    export let props
    // console.log(props, props.links.length)

    export const dict = {
        email: {
            href: "mailto:elikyabokanga@gmail.com",
            i_class: "fa:envelope",
            offline: envelopeIcon,
        },
        linkedIn: {
            href: "https://www.linkedin.com/in/ebokanga/",
            i_class: "fa:linkedin",
            offline: linkedinIcon,
        },
        twitter: {
            href: "https://twitter.com/eliB3webdev",
            i_class: "fa:twitter",
            offline: twitterIcon,
        },
        gitHub: {
            href: "https://github.com/elikyaB",
            i_class: "fa:github",
            offline: githubIcon,
        },
        codePen: {
            href: "https://codepen.io/Elikya",
            i_class: "fa:codepen",
            offline: codepenIcon,
        },
        linkTree: {
            href: "https://linktr.ee/elikya.dev",
            i_class: "simple-icons:linktree",
            offline: linktreeIcon,
        },
    }

    // props.links.forEach(link => {
    //     console.log(dict[link])
    // });
</script>

<aside id={props.id} class="socials">
    <!-- <span class="icon is-large">
        <a href="mailto:elikyabokanga@gmail.com">
            <i class="fa-solid fa-envelope fa-xl"/>
        </a>
    </span>
    <span class="icon is-large">
        <a href="https://www.linkedin.com/in/ebokanga/">
            <i class="fa-brands fa-linkedin-in fa-xl"/>
        </a>
    </span>
    <span class="icon is-large">
        <a href="https://twitter.com/eliB3webdev">
            <i class="fa-brands fa-twitter fa-xl"/>
        </a>
    </span>
    <span class="icon is-large">
        <a href="https://github.com/elikyaB">
            <i class="fa-brands fa-github fa-xl"/>
        </a>
    </span>
    <span class="icon is-large">
        <a href="https://codepen.io/Elikya">
            <i class="fa-brands fa-codepen fa-xl"/>
        </a>
    </span> -->
    {#each props.links as i}
        {console.log(dict[i].offline)}
        <Icon icon={dict[i].offline} />
    {/each}
    <br/>
    <Icon icon={linktreeIcon} />
</aside>

<style>
    aside {display:flex; justify-content: space-around;}
</style>