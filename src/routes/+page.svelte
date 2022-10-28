<script>
	import FileView from "$lib/components/FileView.svelte";
	import Folder from "$lib/components/Folder.svelte";

    /**
	 * @type {{ files: import("$lib/utils").FSNode }}
	 */
    export let data;
    export let activeFile = JSON.stringify(["home", "index.md"]);
    export let file = data.files.children["home"].children["index.md"].content;

    /**
	 * @param {{ detail: { file: import("$lib/utils").FSFile }; }} event
	 */
    function changeFile(event) {
        activeFile = JSON.stringify(event.detail.file.path);
        file = event.detail.file;
    }
</script>

<main>
    <div class="explorer">
        <ul>
            <Folder node={data.files.children.home} expanded={true} bind:activeFile={activeFile} on:changefile={changeFile} />
        </ul>
    </div>

    <div class="fileview">
        <FileView bind:file={file} />
    </div>
</main>

<style>
    ul {
        list-style: none;
        font-family:'Courier New', Courier, monospace;
    }

    main {
        display: grid;
        grid-template-areas:
            "explorer   fileview";
        grid-template-columns: 3fr 4fr 3fr;
        gap: 0 0.5rem;
    }

    .explorer {
        position: sticky;
        align-self: start;
        top: 0;
        grid-area: explorer;
        border-right: 1px solid white;
        padding-right: 2rem;
    }

    .fileview {
        grid-area: fileview;
        border-left: 1px solid white;
        padding: 0 2rem;
        /*border-right: 1px solid black;*/
        font-family: Arial, Helvetica, sans-serif;
        overflow: auto;
    }
</style>