import React from 'react'

export default function Navbar2(props) {
  return (
    <>
    <nav class={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
      </div>
   
 
  <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode}id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault">Enable DarkMode</label>
  </div>
</div>
 
</nav>
  </>
  )
}
