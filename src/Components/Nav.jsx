import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <>
    <header>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid" id='navInnerItem'>
    <a class="navbar-brand" href="#"> <span className="ship">Ship</span><span className='up'>Up</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Solutions</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Industries</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Insights</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News And Media</a>

        </li>
        <div id='navButton'>

        
        <li class="nav-item" id='requestQuote'>
          <a class="nav-link" href="#" id='requestDemo'>Request Quote</a>
        </li>
       
        <li class="nav-item" id='joinNow'>
          <a class="nav-link" href="#" id='joinNow'>Join Now</a>
        </li>
        </div>
      </ul>
      
    </div>
  </div>
</nav>

    </header>
   
    </>
  )
}

export default Nav