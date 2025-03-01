<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import '../app.css';
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Import Bootstrap JS only on the client side
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  });
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
  :global(body) {
    background-color: #252323;
    color: #FFE551;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>

<div class="app">
  <slot />
</div>
