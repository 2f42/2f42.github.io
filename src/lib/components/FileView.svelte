<script>
// @ts-nocheck

    /**
    * @type import("$lib/utils").FSFile
    */
    export let file;
</script>

<article>
    {@html file.content.html}
</article>

<style>
    article :global(h1) {
        color: #b4d273;
    }
</style>