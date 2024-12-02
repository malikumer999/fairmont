import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
     <nav class="navbar navbar-expand-lg px-5 ">
  <div class="nav-bar container-fluid">
    <Link class="navbar-brand" href="/"><img src="./Assests/images/fairmontlogo.webp" alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav fw-bolder">
        <li class="nav-item">
          <Link class="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item ">
          
          <a class="nav-link "  href="#location">Location</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#amenities">Amenities</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#payment">Payment Plan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#properties">Properties</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="/brochure">Brochure</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
