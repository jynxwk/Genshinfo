/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
    /* Fetch characterlist */
    let response = await fetch(`https://api.genshin.dev/characters/`);
    const characterlist = await response.json();

    /* Fetch name of each character */
    let characters = [];



    for (let i = 0; i < characterlist.length; i++) {
        let key = characterlist[i];
        response = await fetch(`https://api.genshin.dev/characters/${key}`);
        let data = await response.json();
        let name = undefined;

        if (data.name) {
            name = data.name;
        }

        let img = `https://api.genshin.dev/characters/${key}/icon`;
        
        await characters.push({key, name, img})
    }
    
    // characterlist.forEach(async key => {
    //     response = await fetch(`https://api.genshin.dev/characters/${key}`);
    //     let data = await response.json();
    //     let name = undefined;

    //     if (data.name) {
    //         name = data.name;
    //     }

    //     let img = `https://api.genshin.dev/characters/${key}/icon`

    //     await characters.push({key, name, img})
    // });
    
    response = await fetch(`https://api.genshin.dev/elements/`);
    const elements = await response.json();

    response = await fetch(`https://api.genshin.dev/nations`);
    const nations = await response.json();

    return {
        characters: characters,
        elements: elements,
        nations: nations,
    }
}