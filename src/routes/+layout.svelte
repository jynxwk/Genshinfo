<script>
    import Header from "$lib/components/header.svelte";
    import Nav from "$lib/components/nav.svelte";
    import Footer from "$lib/components/footer.svelte";
    import "./styles.css";
</script>

<!-- <Header/> -->
<!-- <Nav/> -->
<img src="https://whatifgaming.com/wp-content/uploads/2021/11/Wyrd-Art.jpg" alt="genshin impact wallpaper" id="wallpaper">
<slot/>
<Footer/>

<style>
    #wallpaper {
        position: fixed;
        width: 100%;
        height: 200px;
        object-fit: cover;
        z-index: -1;
    }
</style>