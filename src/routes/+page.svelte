<script lang="ts">
	import Neofetch from "$lib/components/Neofetch.svelte";
	import TopBar from "$lib/components/TopBar.svelte";
    import "$lib/styles/style.scss";
	import { onMount } from "svelte";
	import { select_options } from "svelte/internal";

    let date = new Date();
    $: time = date.toLocaleTimeString();
    $: timeNum = date.getHours() + date.getMinutes()/60;

    let loadTime = Infinity;

    onMount(() => {
        setInterval(() => {
            date = new Date();
        }, 1000);

        loadTime = (window.performance.timing.loadEventEnd - window.performance.timing.navigationStart)/1000;
    });
</script>

<TopBar />

<div>
    <p>Good { (4 <= timeNum && timeNum < 12) ? "morning" : (12 <= timeNum && timeNum < 18) ? "afternoon" : "evening" }!</p>
    <p>Welcome to <a href="/">2f42.dev</a>!</p>
    <p>Page { Number.isFinite(loadTime) ? "loaded in " + loadTime + " seconds" : "loading..." }</p>

    <Neofetch />
</div>

<style>
    div {
        padding: 0.5rem;
        margin: 0.5rem;
    }
</style>
