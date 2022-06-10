<script>
    import {y, h, socialDelay} from '$lib/stores'
    import { fade } from 'svelte/transition'

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

<footer class="has-background-dark has-text-light pb-3">
    <div class="contain">
        {#key $socialDelay>0 && $y>$h*2.5}
        <div id="socials" style:height=52px class="is-flex is-justify-content-space-evenly">
            <a href='https://www.linkedin.com/in/ebokanga/'>
                <span class="iconify-inline" data-icon='fa:linkedin' in:pop/>
            </a>
            <a href='https://twitter.com/eliB3webdev'>
                <span class="iconify-inline" data-icon='fa:twitter' in:pop="{{delay:200}}"/>
            </a>
            <a href='https://github.com/elikyaB'>
                <span class="iconify-inline" data-icon='fa:github' in:pop="{{delay:400}}"/>
            </a>
            <a href='https://codepen.io/Elikya'>
                <span class="iconify-inline" data-icon='fa:codepen' in:pop="{{delay:600}}"/>
            </a>
            <a href='https://linktr.ee/elikya.dev'>
                <span class="iconify-inline" data-icon='simple-icons:linktree' in:pop="{{delay:800}}"/>
            </a>
        </div>
        <div style:text-align=center in:fade="{{delay:$socialDelay+1200}}">
            Designed & Built by<br/>
            &copy; 2022 Elikya Bokanga
        </div>
        {/key}
    </div>
</footer>

<style>
    #socials>a {padding-top: 12px;}
</style>