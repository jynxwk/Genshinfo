import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const response = await fetch(`https://api.genshin.dev/characters/${params.character}`);
    const data = await response.json();
    if (!data.error) {
        return data;
    }

    throw error(404, 'Not found');
}