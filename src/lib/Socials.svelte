<script>
    export let props

    export const dict = {
        email: {
            href: "mailto:elikyabokanga@gmail.com",
            i_class: "fa:envelope",
        },
        linkedIn: {
            href: "https://www.linkedin.com/in/ebokanga/",
            i_class: "fa:linkedin",
        },
        twitter: {
            href: "https://twitter.com/eliB3webdev",
            i_class: "fa:twitter",
        },
        gitHub: {
            href: "https://github.com/elikyaB",
            i_class: "fa:github",
        },
        codePen: {
            href: "https://codepen.io/Elikya",
            i_class: "fa:codepen",
        },
        linkTree: {
            href: "https://linktr.ee/elikya.dev",
            i_class: "simple-icons:linktree",
        },
    }
</script>

<aside id={props.id} class={props.style}>
    {#each props.links as icon}
        <a href={icon.href}>
            <span class="iconify-inline" data-icon={dict[icon].i_class} />
        </a>
    {/each}
</aside>