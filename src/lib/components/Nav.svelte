<script>
    import logo from "$lib/img/Genshin_Impact_logo.svg"; 
</script>

<nav>
    <img src="{logo}" alt="genshin impact logo">
    <a href="#link">Link 1</a>
    <a href="#link">Link 2</a>
    <a href="#link">Link 3</a>
</nav>

<style>
    nav {
        position: fixed;
        display: flex;
        right: 0;
        flex-direction: column;
        align-items: center;
        padding: 1%;
        background-color: var(--primary);
        height: 100%;
        width: 120px;
    }

    nav > * {
        margin: 2% 0;
        width: 100%;
        text-align: center;
    }

    nav > a:hover {
        background-color: rgba(255,255,255,0.1);
    }

    @media (max-width: 800px) {
        nav {
            display: none;
        }
    }
</style>