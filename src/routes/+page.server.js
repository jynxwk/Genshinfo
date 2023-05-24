/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
    let response = await fetch(`https://api.genshin.dev/characters/`);
    const characters = await response.json();

    response = await fetch(`https://api.genshin.dev/elements/`);
    const elements = await response.json();
    
    return {
        characters: characters,
        elements: elements,
    }
}