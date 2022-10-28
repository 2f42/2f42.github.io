/** @type {import('./$types').PageServerLoad} */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function load({ fetch }) {
    const response = await fetch("/api/home");
    const files = await response.json();
    return { 
        files
    };
}