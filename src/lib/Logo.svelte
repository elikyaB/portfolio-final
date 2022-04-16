<script>
    export let props
    $: showFace = props.face
    $: full = props.size+props.units
    $: half = (props.size/2)+props.units
    $: perspective = props.scene+props.units

    const dieFaces = [1,2,3,4,5,6]
    let index = 0
    let intervalID
    let timeoutID
    
    function changeFace() {
        index = dieFaces.indexOf(showFace)
        while (index == dieFaces.indexOf(showFace)) {
            showFace = Math.ceil(Math.random()*6)
        }
        // console.log(showFace)
    }

    export function rollDie() {
        if (props.d6) {
            clearTimeout(timeoutID)
            clearInterval(intervalID)
            intervalID = setInterval(changeFace,100)
            setTimeout(()=>{clearInterval(intervalID)}, 1500)
            timeoutID = setTimeout(()=>{showFace='logo'},5000)
        }
    }
</script>

<figure>
    <div style:width={full} style:height={full} style:perspective>
        <div class={`cube ${'show--'+showFace}`} on:click={rollDie}>
            <div style:transform={`rotateY(0deg) translateZ(${half})`} class="cube__face">
                {#if showFace !== 'logo'}
                    <img src="assets/one.png" alt="one" style:padding-left={`${props.size/4+props.units}`}>
                {:else}
                    <img src="assets/b.png" alt="B">
                {/if}
            </div>
            <div style:transform={`rotateY(180deg) translateZ(${half})`} class="cube__face">
                <img src="assets/two.png" alt="two">
            </div>
            <div style:transform={`rotateY(90deg) translateZ(${half})`} class="cube__face">
                <img src="assets/three.png" alt="three">
            </div>
            <div style:transform={`rotateY(-90deg) translateZ(${half})`} class="cube__face">
                <img src="assets/four.png" alt="four">
            </div>
            <div style:transform={`rotateX(90deg) translateZ(${half})`} class="cube__face">
                {#if showFace !== 'logo'}
                    <img src="assets/five.png" alt="five">
                {:else}
                    <img src="assets/e.png" alt="E">
                {/if}
            </div>
            <div style:transform={`rotateX(-90deg) translateZ(${half})`} class="cube__face">
                <img src="assets/six.png" alt="six">
            </div>
        </div>
    </div>
    <figcaption class="is-hidden">
        <a href="https://www.fontspace.com/qube-font-f31578">QUBE Font</a> by <a href="https://www.fontspace.com/walter-designer">Walter Designer</a>
    </figcaption>
</figure>

<style lang="scss">
    // $volume: 20px;
    // :global({var(--size):10px;})
    // :root {--full:20px; --half:10px}
    // .scene {
    //     // width: $volume;
    //     // height: $volume;
    //     perspective: 800px; // use transition to/from 0px for loading screen
    // }
    .cube {
        width: inherit;
        height: inherit;
        position: relative;
        transform-style: preserve-3d;
        // transform: translateZ(-0.5*$volume);
        transition: transform 0.2s;
        
        &__face {
            display: flex;
            position: absolute;
            width: inherit;
            height: inherit;
            border: 1px solid $gold;
            img {color: $gold; background-color: $gold;}

            // &--1, &--2, &--3, &--4, &--5, &--6 { @extend .cube__face; }
            // &--1 { transform: rotateY(  0deg) translateZ(0.5*$volume); }
            // &--2 { transform: rotateY(180deg) translateZ(0.5*$volume); }
            // &--3 { transform: rotateY( 90deg) translateZ(0.5*$volume); }
            // &--4 { transform: rotateY(-90deg) translateZ(0.5*$volume); }
            // &--5 { transform: rotateX( 90deg) translateZ(0.5*$volume); }
            // &--6 { transform: rotateX(-90deg) translateZ(0.5*$volume); }
        }
    }

    .show {
        // transform: translateZ(-0.5*$volume);
        // &--logo, &--1, &--2, &--3, &--4, &--5, &--6 { @extend .show; }
        &--logo { transform: rotateY(-51.5deg) rotateX(-24deg) rotateZ(28deg); }
        &--1 { transform: rotateY(   0deg); }
        &--2 { transform: rotateY(-180deg); }
        &--3 { transform: rotateY( -90deg); }
        &--4 { transform: rotateY(  90deg); }
        &--5 { transform: rotateX( -90deg); }
        &--6 { transform: rotateX(  90deg); }
    }
</style>