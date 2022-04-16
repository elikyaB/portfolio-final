<script>
    const dieFaces = [1,2,3,4,5,6]
    let showFace = 'logo'
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

    function rollDie() {
        clearTimeout(timeoutID)
        clearInterval(intervalID)
        intervalID = setInterval(changeFace,100)
        setTimeout(()=>{clearInterval(intervalID)}, 1500)
        timeoutID = setTimeout(()=>{showFace='logo'},5000)
    }
</script>

<figure>
    <div class="scene">
        <div class={`cube ${'show--'+showFace}`} on:click={rollDie}>
            <div class="cube__face--1 is-flex">
                {#if showFace !== 'logo'}
                    <img src="assets/one.png" alt="one" class="pl-2">
                {:else}
                    <img src="assets/b.png" alt="B">
                {/if}
            </div>
            <div class="cube__face--2">
                <img src="assets/two.png" alt="two">
            </div>
            <div class="cube__face--3">
                <img src="assets/three.png" alt="three">
            </div>
            <div class="cube__face--4">
                <img src="assets/four.png" alt="four">
            </div>
            <div class="cube__face--5">
                {#if showFace !== 'logo'}
                    <img src="assets/five.png" alt="five">
                {:else}
                    <img src="assets/e.png" alt="E">
                {/if}
            </div>
            <div class="cube__face--6">
                <img src="assets/six.png" alt="six">
            </div>
        </div>
    </div>
</figure>

<style lang="scss">
    $volume: 30px;

    .scene {
        width: $volume;
        height: $volume;
        perspective: 800px; // use transition to/from 0px for loading screen
    }
    .cube {
        width: inherit;
        height: inherit;
        position: relative;
        transform-style: preserve-3d;
        transform: translateZ(-0.5*$volume);
        transition: transform 0.2s;
        
        &__face {
            position: absolute;
            width: $volume;
            height: $volume;
            border: 1px solid $gold;
            img {color: $gold; background-color: $gold;}

            &--1, &--2, &--3, &--4, &--5, &--6 { @extend .cube__face; }
            &--1 { transform: rotateY(  0deg) translateZ(0.5*$volume); }
            &--2 { transform: rotateY(180deg) translateZ(0.5*$volume); }
            &--3 { transform: rotateY( 90deg) translateZ(0.5*$volume); }
            &--4 { transform: rotateY(-90deg) translateZ(0.5*$volume); }
            &--5 { transform: rotateX( 90deg) translateZ(0.5*$volume); }
            &--6 { transform: rotateX(-90deg) translateZ(0.5*$volume); }
        }
    }

    .show {
        transform: translateZ(-0.5*$volume);
        &--logo, &--1, &--2, &--3, &--4, &--5, &--6 { @extend .show; }
        &--logo { transform: rotateY(-51.5deg) rotateX(-24deg) rotateZ(28deg); }
        &--1 { transform: rotateY(   0deg); }
        &--2 { transform: rotateY(-180deg); }
        &--3 { transform: rotateY( -90deg); }
        &--4 { transform: rotateY(  90deg); }
        &--5 { transform: rotateX( -90deg); }
        &--6 { transform: rotateX(  90deg); }
    }
</style>