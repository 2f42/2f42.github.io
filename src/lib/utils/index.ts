export interface FSFile {
    type: string;
    path: string[];
    url?: string;
    meta?: object;
    content?: object;
}

export interface FSNode {
    children: {[key: string]: FSNode};
    content: FSFile;
}

const fetchMarkdownFiles = async () => {
    const allMarkdownFiles = import.meta.glob<{metadata: object, default: {render: () => object}}>("/src/home/**/*.md");
    const iterableMarkdownFiles = Object.entries(allMarkdownFiles);

    return await Promise.all (
        iterableMarkdownFiles.map(async ([path, resolver]) => {
            const filePath = path.slice(5).split("/");
            const file = await resolver();
            return {
                type: "markdown",
                path: filePath,
                meta: file.metadata,
                content: file.default.render(),
            };
        })
    );
}

const fetchLinkFiles = async () => {
    const allLinks = import.meta.glob("/src/home/**/*.link", { as: "raw" });
    const iterableLinks = Object.entries(allLinks);

    return await Promise.all (
        iterableLinks.map(async ([path, resolver]) => {
            const filePath = path.slice(5).split("/");
            const url = await resolver();
            return {
                type: "link",
                path: filePath,
                url: url,
            }
        })
    );
}

const insertFSNode = (node: FSNode, path: string[], file: FSFile) => {
    const [head, ...tail] = path;

    if (path.length == 1) {
        node.children[head] = { children: {}, content: file };
        return;
    }
    
    if (!(head in node.children))
        node.children[head] = { children: {}, content: { type: "folder", path: node.content.path.concat(head) } };

    insertFSNode(node.children[head], tail, file);
}

export const fetchFilesystem = async () => {
    const markdown: FSFile[] = await fetchMarkdownFiles();
    const links: FSFile[] = await fetchLinkFiles();

    const files = markdown.concat(links);

    const fileTree: FSNode = { children: {}, content: { type: "folder", path: [] } };
    files.forEach(file => insertFSNode(fileTree, file.path, file));

    return fileTree;
}
