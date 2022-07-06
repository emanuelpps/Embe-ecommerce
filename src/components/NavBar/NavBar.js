/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="container">
        <Link to='/'><img src="/img/Embe_logo.png" className="logo"/></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navbar justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to='/inicio'>Inicio</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='/nosotros'>Nosotros</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to='/category/Living'>Living</Link></li>
                <li><Link class="dropdown-item" to='/category/Cuarto'>Cuarto</Link></li>
                <li><Link class="dropdown-item" to='/category/Cocina'>Cocina</Link></li>
                <li><Link class="dropdown-item" to='/category/Bano'>Baño</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='/contacto'>Contacto</Link>
            </li>
          </ul>        
      </div>
      <CartWidget/>
    </div>
</nav>
  );
}

export default NavBar;
