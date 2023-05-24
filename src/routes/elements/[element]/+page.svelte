<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{data.name} - Elements</title>
</svelte:head>

<main>
    <div id="basic-information">
        <h1>{data.name}</h1>
        <img src="https://api.genshin.dev/elements/{data.name.toLowerCase()}/icon" alt="{data.name} Icon">
    </div>
    <div id="details">
        <div id="reactions">
            <h3>Reactions</h3>
            {#each data.reactions as reaction}
            <div class="reaction">
                <div class="elements">
                    <h4>{reaction.name}</h4>
                    {#each reaction.elements as element}
                    <img src="https://api.genshin.dev/elements/{element.toLowerCase()}/icon" alt="{element} Icon">
                    {/each}
                </div>
                <p>{reaction.description}</p>
            </div>
            {/each}
        </div>
    </div>
</main>

<style>
    main {
        padding: 2%;
    }
    
    #basic-information {
        display: flex;
        align-items: center;
    }
    
    #basic-information > img {
        width: 3rem;
        margin-left: 1%;
    }

    #details {
        margin: 2%;
    }

    .reaction {
        margin: 1% 0;
    }

    .reaction > .elements {
        display: flex;
        align-items: center;
    }

    .reaction > .elements > img {
        height: 2rem;
        margin-left: 1%;
    }
</style>