import React from 'react'

function navbar () {
    return (
        <div>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  
  <a class="navbar-brand" href="#">BLUErossh</a>

  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>

  
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Product</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Company</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">connect</a>
      </li>
    </ul>
  </div>
</nav>



  
        </div>
    )
}

export default navbar
