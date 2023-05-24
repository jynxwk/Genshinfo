/** @type {import('./$types').PageLoad} */
export async function load() {
    const response = await fetch('https://gsi.fly.dev/')
    const data = await response.json()
}