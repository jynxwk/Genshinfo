<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Genshinfo</title>
</svelte:head>

<img src="https://whatifgaming.com/wp-content/uploads/2021/11/Wyrd-Art.jpg" alt="genshin impact wallpaper" id="wallpaper">
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
                        <a href="/characters/{character}">
                            <div class="character item">
                                <img src="https://api.genshin.dev/characters/{character}/icon" alt="character">
                                <span>{character}</span>
                            </div>
                        </a>
                        {/each}
                    </div>
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

    #wallpaper {
        position: fixed;
        width: 100%;
        height: 200px;
        object-fit: cover;
        z-index: -1;
    }
    main {
        align-self: center;
        width: 80%;
    }

    main > h1 {
        text-shadow: 0 0 10px black;
        text-align: center;
    }

    .page {
        position: relative;
        top: 70px;
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
        width: 60%;
    }

    .characters {
        text-align: center;
        display: grid;
        justify-content: center;
        gap: 5px;
        grid-template-columns: repeat(auto-fill, clamp(100px, 10vw, 150px));
    }

    .character {
        aspect-ratio: 1;
        padding: 5px;
        border: 1px solid gray;
        min-width: 50px;
    }

    .character > img {
        width: 100%;
    }

    .elements {
        text-align: center;
        display: grid;
        justify-content: center;
        gap: 5px;
        grid-template-columns: repeat(auto-fill, clamp(50px, 5vw, 80px));
    }

    .element {
        aspect-ratio: 1;
    }

    .element > img {
        width: 100%;
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