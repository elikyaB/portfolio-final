<script>
    import {w, y, h, socialDelay} from '$lib/stores'

    let firstRender = true
    $: animate = $y>$h*2.25
    $: if (animate) {firstRender = false}

    const socials = ['linkedIn', 'twitter', 'gitHub', 'codePen', 'linkTree']

    const dic = {
        linkedIn: { href: "https://www.linkedin.com/in/ebokanga/", i_class: "fa:linkedin" },
        twitter: { href: "https://twitter.com/eliB3webdev", i_class: "fa:twitter" },
        gitHub: { href: "https://github.com/elikyaB", i_class: "fa:github" },
        codePen: { href: "https://codepen.io/Elikya", i_class: "fa:codepen" },
        linkTree: { href: "https://linktr.ee/elikya.dev", i_class: "simple-icons:linktree" }
    }

    function pop (node, {delay=0, duration=400}) {
        const o = +getComputedStyle(node).opacity
        delay += $socialDelay
        return {delay, duration, css: t => `
            opacity: ${t*o};
            transform:
                scale(${t<1/2 ? 2-(t*1.5)*2 : t}
                    , ${t<1/2 ? 0.5+(t*1.5)*2 : 2-(t-0.5)*2})
                translateY(${t<1/2 ? -16*t : -16*(1-t)}px)
                rotate(
                    ${t>3/8 && t<1/2 ? -0.1*(t-3/8)*8 
                    : t>=1/2 && t<5/8 ? -0.1*(1-(t-1/2)*8) 
                    : 0}turn)
            ;
        `}
    }
</script>

<footer class="has-background-dark has-text-light pb-4">
    <div class="contain">
        <div id="socials" style:height=52px class="is-flex is-justify-content-space-evenly">
            {#key $socialDelay>0 && (animate || ($w<576 && !firstRender))}
                {#each socials as icon, i}
                    <a href={dic[icon].href} in:pop="{{delay:i*200}}" target="_blank" rel="noopener noreferrer">
                        <span class="iconify-inline" data-icon={dic[icon].i_class}/>
                    </a>
                {/each}
            {/key}
        </div>
        <div style:text-align=center>
            Designed & Built by<br/>
            &copy; 2022 Elikya Bokanga
        </div>
    </div>
</footer>

<style>
    #socials>a {padding-top: 12px;}
</style>