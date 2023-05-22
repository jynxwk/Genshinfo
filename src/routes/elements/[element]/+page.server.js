import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const response = await fetch(`https://api.genshin.dev/elements/${params.element}`);
    const data = await response.json();
    console.log(data);
    if (!data.error) {
        return data;
    }

    throw error(404, 'Not found');
}