import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {

    return(
        <>
            <div class="footer-basic">
                <footer>
                    <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><Link to="#">Inicio</Link></li>
                        <li class="list-inline-item"><Link to="#">Nosotros</Link></li>
                        <li class="list-inline-item"><Link to="#">Productos</Link></li>
                        <li class="list-inline-item"><Link to="#">Contacto</Link></li>
                    </ul>
                    <p class="copyright">Emanuel Pagés 2022</p>
                </footer>
            </div>
        </>
    )
};

export default Footer;