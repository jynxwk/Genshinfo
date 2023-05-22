<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>

<svelte:head>
    <title>{data.name} - Elements</title>
</svelte:head>

<h1>{data.name}</h1>
<img src="https://api.genshin.dev/elements/{data.name.toLowerCase()}/icon" alt="{data.name} Icon">