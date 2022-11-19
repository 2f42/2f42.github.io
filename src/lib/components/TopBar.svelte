<script lang="ts">
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
    
    let date = new Date();
    $: datetime = date.toLocaleString("en-GB", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
        + " -> " + date.toLocaleTimeString("en-GB");

    onMount(() => {
        setInterval(() => {
            date = new Date();
        }, 500);
    });

</script>

<div class="topbar inverted">
    -&gt; 24f2.dev{$page.url.pathname}

    <div class="time not-inverted">
        {datetime}
    </div>
</div>

<style>
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