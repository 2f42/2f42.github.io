<script lang="ts">
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
    import "$lib/styles/style.scss";
    
    let date = new Date();
    $: datetime = date.toLocaleString("en-GB", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
        + " -> " + date.toLocaleTimeString("en-GB");

    const path = $page.url.pathname.slice(1).split("/");
    const breadcrumbs = path.reduce((paths, val) => [...paths, paths.at(-1) + "/" + val], [""]).slice(1).map((e, i) => { return {url: e, name: path[i]} });

    onMount(() => {
        setInterval(() => {
            date = new Date();
        }, 500);
    });

</script>

<div class="topbar inverted">
    &rarr;&nbsp;<a href="/">2f42.dev</a>{#each breadcrumbs as crumb}/<a href={crumb.url}>{crumb.name}</a>{/each}

    <div class="time not-inverted">
        {datetime}
    </div>
</div>

<style lang="scss">
    @import "../styles/colours.scss";

    a {
        color: $bg-colour;
    }
    
    a:hover {
        color: $bg-colour;
    }

    .topbar {
        margin: 0.5rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .time {
        margin: -0.2rem;
        margin-left: auto;
        padding: 0.2rem 0.7rem;
        float: right;
    }

    @media (max-width: 35rem) {
        .time {
            margin: 0.5rem auto -0.2rem auto;
        }
    }
</style>
