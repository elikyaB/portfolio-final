<script>
    import { notes } from '$lib/stores'
    import Note from './Note.svelte'
</script>

<aside style:top=76px style:position=fixed>
    {#each $notes as note, i}
        <Note {note} {i}/>
    {/each}
</aside>