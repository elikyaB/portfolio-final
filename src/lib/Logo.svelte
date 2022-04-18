<script>
    export let props
    $: showFace = props.startingFace
    $: full = props.size+props.units
    $: half = (props.size/2)+props.units
    $: perspective = props.scene+props.units
    $: transition = `transform ${props.transition}s`

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
            intervalID = setInterval(changeFace, props.interval)
            setTimeout(()=>{clearInterval(intervalID)}, props.timeout)
            timeoutID = setTimeout(()=>{showFace=props.revertFace}, props.revertDelay)
        }
    }
</script>

<figure>
    <div style:width={full} style:height={full} style:perspective>
        <div class={`cube ${'show--'+showFace}`} style:transition on:click={rollDie}>
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
    .cube {
        width: inherit;
        height: inherit;
        position: relative;
        transform-style: preserve-3d;
        
        &__face {
            display: flex;
            position: absolute;
            width: inherit;
            height: inherit;
            border: 1px solid $gold;
            img {color: $gold; background-color: $gold;}
        }
    }

    .show {
        &--logo { transform: rotateY(-51.5deg) rotateX(-24deg) rotateZ(28deg); }
        &--1 { transform: rotateY(   0deg); }
        &--2 { transform: rotateY(-180deg); }
        &--3 { transform: rotateY( -90deg); }
        &--4 { transform: rotateY(  90deg); }
        &--5 { transform: rotateX( -90deg); }
        &--6 { transform: rotateX(  90deg); }
    }
</style>