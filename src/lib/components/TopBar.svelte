<script lang="ts">
    import { page } from '$app/stores';
	import { onMount } from 'svelte';
    
    let date = new Date();
    $: datetime = date.toLocaleString("en-GB", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
        + " -> " + date.toLocaleTimeString("en-GB");

    onMount(() => {
        setInterval(() => {
            date = new Date();
        }, 700);
    });

</script>

<div class="topbar inverted">
    &#9495; 24f2.dev{$page.url.pathname}

    <div class="time not-inverted">
        {datetime}
    </div>
</div>

<style>
    .topbar {
        margin: 0.5rem;
        padding: 0.5rem;
    }

    .time {
        margin: -0.2rem;
        padding: 0.2rem 0.7rem;
        float: right;
    }
</style>