<script>
  import Navbar from './Navbar.svelte';
</script>

<div class="border-container">
  <div class="home-container border border-2 rounded-3 p-4">
    <Navbar />
    
    <div class="container mt-4">
      <slot />
    </div>
  </div>
</div>

<style>
  .border-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px;
    box-sizing: border-box;
    overflow: hidden;
  }
  
  .home-container {
    border-color: #FFE551 !important;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
  }
</style>
