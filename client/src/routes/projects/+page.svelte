<script>
  import PageContainer from '$lib/components/PageContainer.svelte';
</script>

<PageContainer>
  <h1>Projects</h1>
  <p class="mb-4">Here are some of my recent projects:</p>
  
  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Squa</h5>
          <p class="card-text">A messaging app built into the terminal, using go and the bubbletea library</p>
          <div class="d-flex gap-2 mt-auto">
            <a href="/projects/detail" class="btn btn-outline-warning btn-sm disabled" >View Project</a>
            <a href="https://github.com/onioncall/squa" class="btn btn-outline-warning btn-sm">GitHub</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Docker Compose Example</h5>
          <p class="card-text">A docker compose project made for a work demonstration of microservices, using dotnet and sveltekit</p>
          <div class="d-flex gap-2 mt-auto">
            <a href="projects/detail" class="btn btn-outline-warning btn-sm disabled">View Project</a>
            <a href="https://github.com/onioncall/docker-compose-example" class="btn btn-outline-warning btn-sm">GitHub</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">onioncall.dev</h5>
          <p class="card-text">This site, built with svelte</p>
          <div class="d-flex gap-2 mt-auto">
            <a href="/projects/detail" class="btn btn-outline-warning btn-sm disabled" >View Project</a>
            <a href="https://github.com/onioncall/onioncall.dev" class="btn btn-outline-warning btn-sm">GitHub</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">slugly</h5>
          <p class="card-text">Printing Text, Fast and Slow with Golang</p>
          <div class="d-flex gap-2 mt-auto">
            <a href="/projects/detail" class="btn btn-outline-warning btn-sm disabled" >View Project</a>
            <a href="https://github.com/onioncall/slugly" class="btn btn-outline-warning btn-sm">GitHub</a>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Tuidal</h5>
          <p class="card-text">A terminal user interface for interacting with tidal, using the bubbletea library written in go</p>
          <div class="d-flex gap-2 mt-auto">
            <a href="/projects/detail" class="btn btn-outline-warning btn-sm disabled" >View Project</a>
            <a href="https://github.com/onioncall/tuidal" class="btn btn-outline-warning btn-sm">GitHub</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Project TBD</h5>
        </div>
      </div>
    </div>
    
</PageContainer>

<style>
  /* Card styling */
  .card {
    background-color: #303030;
    border: 1px solid #444;
    transition: all 0.3s ease;
  }
  
  .card:hover {
    border-color: #FFE551;
    box-shadow: 0 0 10px rgba(255, 229, 81, 0.3);
    transform: translateY(-3px);
  }
  
  .card-title {
    color: #FFE551;
  }
  
  .card-text {
    color: #ccc;
  }
  
  .btn-outline-warning {
    color: #FFE551;
    border-color: #FFE551;
  }
  
  .btn-outline-warning:hover {
    background-color: #FFE551;
    color: #252323;
  }
</style>
