/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './NavBar.css';
import image from "./../img/Embe_logo.png";
import CartWidget from './CartWidget';
import Logo from './Logo';

function NavBar() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="container-fluid">
        <Logo />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Categoria</a></li>
                <li><a class="dropdown-item" href="#">Categoria</a></li>
                <li><a class="dropdown-item" href="#">Categoria</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link">Contacto</a>
            </li>
          </ul>
            <CartWidget/>        
      </div>
    </div>
</nav>
  );
}

export default NavBar;
