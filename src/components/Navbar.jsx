import React from 'react'
import '../CSS/Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg">
  <a class="navbar-brand" href="#">Medical Darpan</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Distributors</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Manufacturers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Blog</a>
      </li>
      
    </ul>
    
  </div>
  <div>
    <span className="login">Login</span>
  </div>
  <i class="fa fa-user" aria-hidden="true"></i>
</nav>
    </div>
  )
}

export default Navbar