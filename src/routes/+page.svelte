<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let count = 0;
    console.log(data);
</script>

<svelte:head>
    <title>Genshinfo</title>
</svelte:head>

<main>
    <h1>Welcome to Genshinfo</h1>
    <div class="page">
        <h2>Home</h2>
        <div class="page-content">
            <section class="main-articles">
                <article>
                    <h3>What is Genshin Impact?</h3>
                    <img src="https://whatifgaming.com/wp-content/uploads/2021/11/Wyrd-Art.jpg" alt="genshin imapct">
                    <p>
                        Genshin Impact is an open-world action RPG developed and published by HoYoverse for the PC, iOS/Android, and PS4/PS5 platforms.
                        The game is free-to-play with a gacha monetization system in the form of Wishes.
                    </p>
                </article>
                <article>
                    <h3>Characters</h3>
                    <div class="characters">
                        {#each data.characters as character}
                        <a href="/characters/{character.key}">
                            <div class="character item">
                                <img src="{character.img}" alt="character img">
                                <span>{character.name}</span>
                            </div>
                        </a>
                        {/each}
                    </div>
                </article>
                <article>
                    <h3>Nations</h3>
                    {#each data.nations as nation}
                    <a href="/nations/{nation}"><span>{nation.charAt(0).toUpperCase() + nation.substring(1)}</span><br></a>
                    {/each}
                </article>
            </section>
            <section class="side-articles">
                <aside>
                    <h3>Elements</h3>
                    <div class="elements">
                        {#each data.elements as element}
                        <a href="/elements/{element}">
                            <div class="element item">
                                <img src="https://api.genshin.dev/elements/{element}/icon" alt="{element} icon">
                                <span>{element.charAt(0).toUpperCase() + element.substring(1)}</span>
                            </div>
                        </a>
                        {/each}
                    </div>
                </aside>
                <aside>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cupiditate maxime ad magni neque officiis quia, voluptate perspiciatis fugiat, provident explicabo quasi dolores ullam eaque labore eligendi atque, dicta expedita.
                </aside>
            </section>
        </div>
    </div>
</main>

<style>
    main {
        align-self: center;
        width: 80%;
    }

    main > h1 {
        text-shadow: 0 0 10px black;
        text-align: center;
    }

    .page {
        padding: 1% 5%;
        background: var(--secondary);
        display: flex;
        flex-direction: column;
    }

    .page-content {
        display: grid;
        justify-content: space-between;
        grid-template-columns: 65% 30%;
    }

    article, aside {
        border: 1px solid rgb(100,100,200);
        padding: 2% 3%;
        margin-bottom: 30px;
    }

    article > img, aside > img {
        width: 100%;
        max-width: 600px;
    }

    .characters {
        text-align: center;
        display: grid;
        justify-content: center;
        gap: 5px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    .character {
        padding: 5px;
        border: 1px solid gray;
    }

    .character > img {
        width: 100%;
    }

    .elements {
        text-align: center;
        display: grid;
        justify-content: center;
        gap: 5px;
        grid-template-columns: repeat(auto-fit, minmax(50px, 80px));
    }

    .element > img {
        width: 100%;
    }

    .item {
        transition: background-color 0.3s;
    }

    .item:hover {
        background-color: rgba(255,255,255,0.1);
    }

    @media (max-width: 1000px) {
        .page-content {
            grid-template-columns: auto;
        }
    }
</style>