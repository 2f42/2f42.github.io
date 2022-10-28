import { fetchFilesystem } from "$lib/utils"
import { json } from "@sveltejs/kit";

export const GET = async () => {
    const allFiles = await fetchFilesystem();

    return json(allFiles);
}