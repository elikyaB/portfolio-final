<script>
    let showFace = 'logo'
    function changeFace() {
        showFace = String(Math.ceil(Math.random()*6))
        console.log(showFace)
    }
</script>

<header>
    <figure id="cube" class="hero is-dark page">
        <div class="hero-body title m-0"> 
            <div class="scene mt-5">
                <div class={`cube ${'show--'+showFace}`} on:click={changeFace}>
                  <div class="cube__face--1">B</div>
                  <div class="cube__face--2">B</div>
                  <div class="cube__face--3">3</div>
                  <div class="cube__face--4">3</div>
                  <div class="cube__face--5">E</div>
                  <div class="cube__face--6">E</div>
                </div>
            </div>
        </div>
    </figure>
</header>

<style lang="scss">
    .title {font-size: 14vw; position: absolute;}

    .scene {
        width: 15vw;
        height: 15vw;
        margin: 1vw;
        perspective: 900px; // use transition to/from 0px for loading screen
    }

    .cube {
        width: 15vw;
        height: 15vw;
        position: relative;
        transform-style: preserve-3d;
        transform: translateZ(-7.5vw);
        transition: transform 1s;
        
        &__face {
            position: absolute;
            width: 15vw;
            height: 15vw;
            border: 1px solid white;
            line-height: 15vw;
            font-size: 4vw;
            font-weight: bold;
            color: white;
            text-align: center;
            background: black; 
            opacity: 0.75;
            &--1, &--2, &--3, &--4, &--5, &--6 { @extend .cube__face; }
            &--1 { transform: rotateY(  0deg) translateZ(7.5vw); }
            &--2 { transform: rotateY(180deg) translateZ(7.5vw); }
            &--3 { transform: rotateY( 90deg) translateZ(7.5vw); }
            &--4 { transform: rotateY(-90deg) translateZ(7.5vw); }
            &--5 { transform: rotateX( 90deg) translateZ(7.5vw); }
            &--6 { transform: rotateX(-90deg) translateZ(7.5vw); }
        }
    }

    .show {
        transform: translateZ(-7.5vw);
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