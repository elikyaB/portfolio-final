<script>
    let active = false
    function activate(){active = !active}
    function test(){console.log('works')}
    let hide = false
    function conceal(){hide = !hide}
</script>

<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <a href="/" class="navbar-item">Eli B3 | Web Dev</a>
        <div 
            class="{`navbar-burger has-dropdown is-arrowless${active?' is-active':''}`}"
            on:click={test,activate}
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <!-- <div class="{`navbar-dropdown is-right${active?' is-active':''}`}">
                <div class="navbar-item">About</div>
                <div class="navbar-item">Portfolio</div>
                <div class="navbar-item">Contact</div>
                <hr class="navbar-divider"/>
                <div class="navbar-item">Resume</div>
                <div class="navbar-item">Github</div>
                <div class="navbar-item">Blog</div>
            </div> -->
        </div>
    </div>
    <div id="pages" class="{`navbar-menu justify-content${active?' is-active':''}`}">
        <div class="navbar-start">
            <a href="#about" class="navbar-item">About</a>
            <a href="#portfolio" class="navbar-item">Portfolio</a>
            <a href="#contact" class="navbar-item">Contact</a>
            <a href="#about" class="navbar-item">About</a>
            <a href="#portfolio" class="navbar-item">Portfolio</a>
            <a href="#contact" class="navbar-item">Contact</a>
        </div>
        <div class="navbar-end">
            <!-- <div 
                class="{`navbar-burger navbar-item navbar-link has-dropdown is-hoverable is-arrowless${active?' is-active':''}`}"
                on:click={activate}
                on:pointerenter={activate}
                on:pointerleave={activate}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <div class="{`navbar-dropdown is-right${active?' is-active':''}`}">
                    <div class="navbar-item">About</div>
                    <div class="navbar-item">Portfolio</div>
                    <div class="navbar-item">Contact</div>
                    <hr class="navbar-divider"/>
                    <div class="navbar-item">Resume</div>
                    <div class="navbar-item">Github</div>
                    <div class="navbar-item">Blog</div>
                </div>
            </div> -->
        </div>
    </div>
</nav>

<style>

</style>