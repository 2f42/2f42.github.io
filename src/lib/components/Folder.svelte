<script>
    import { createEventDispatcher } from "svelte";
	import { object_without_properties } from "svelte/internal";

    const dispatch = createEventDispatcher();

    /**
     * @type import("$lib/utils").FSNode
     */
    export let node;
    export let expanded = true;
    /**
	 * @type string
	 */
    export let activeFile;

    /**
	 * @type {string[]}
	 */
     export let sortedChildren = [];

    if (node.content.type == "folder") {
        sortedChildren = Object.keys(node.children).map((k) => k);

        sortedChildren.sort((a, b) => {
            return (node.children[b].content.type == "folder" ? 10 : 0) - (node.children[a].content.type == "folder" ? 10 : 0) + a.localeCompare(b);
        });
    }
    function expand() {
        expanded = !expanded;
    }

    function select() {
        dispatch("changefile", { file: node.content });
    }

    /**
	 * @param {{ detail: { file: { path: any; }; }; }} event
	 */
    function changeFile(event) {
        activeFile = JSON.stringify(event.detail.file.path);
        dispatch("changefile", event.detail);
    }
</script>

<li>
    <button 
            class:selected={JSON.stringify(node.content.path) == activeFile}
            class:folder={node.content.type == "folder"}
            class:markdown={node.content.type == "markdown"}
            class:link={node.content.type == "link"}
            on:click={node.content.type == "folder" ? expand : node.content.type == "markdown" ? select : () => { window.open(node.content.url); } }>
        {node.content.path.slice(-1).toString()}
    </button>
    <span class="filetype">
        {node.content.type == "markdown" ? "text file" : node.content.type == "link" ? "hyperlink" : ""}
    </span>
    {#if node.content.type == "folder" && expanded}
        <ul>
            {#each sortedChildren as child}
                <svelte:self node={node.children[child]} bind:activeFile={activeFile} on:changefile={changeFile} />
            {/each}
        </ul>
    {/if}
</li>

<style>
    button {
        user-select: none;
        cursor: pointer;
        border: none;
        background: none;
        font-family:'Courier New', Courier, monospace;
        font-size: 0.9rem;
        color: #d6d6d6;
    }

    li {
        list-style-type: "├";
    }

    li:last-child {
        list-style-type: "└";
    }
    
    .folder::before {
        content: "\1F4C1";
    }

    .markdown::before {
        content: "\1F4DD";
    }

    .link {
        color: #6c99bb;
    }

    .link::before {
        content: "\1F517";
    }

    .selected {
        font-weight: bold;
    }

    .selected::after {
        content: " <--";
        font-weight: bold;
    }

    .filetype {
        float: right;
        text-align: right;
        font-style: italic;
        font-size: small;
    }
</style>