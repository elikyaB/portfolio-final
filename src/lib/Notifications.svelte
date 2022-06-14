<script>
    import { notes } from '$lib/stores'
    import Note from './Note.svelte';
</script>

<aside style:top=52px>
    {#each $notes as note, i}
        <Note {note} {i}/>
    {/each}
</aside>

<style>
    aside {position: fixed;}
</style>