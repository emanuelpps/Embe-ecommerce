import './Categories.css';
import { Link } from 'react-router-dom';


const Categories = () => {


    return(
        <div class="row mt-5 cardCenter">
            <div class="cardStyle">
                <Link to='/category/Cocina'><img src="https://i.ibb.co/b2KsRfh/categories-cocina.png" class="card-img-top" alt="Productos de Cocina"/></Link>
            </div>
            <div class="cardStyle">
                <Link to='/category/Cuarto'><img src="https://i.ibb.co/xFxf5gL/categories-cuarto.png" class="card-img-top" alt="Productos para el Cuarto"/></Link>
            </div>
            <div class="cardStyle">
                <Link to='/category/Bano'><img src="https://i.ibb.co/R3TmHKv/categories-bano.png" class="card-img-top" alt="Producto de Bano"/></Link>
            </div>
            <div class="cardStyle">
                <Link to='/category/Living'><img src="https://i.ibb.co/LQDzj5C/categories-living.png" class="card-img-top" alt="Productos de Living"/></Link>
            </div>
        </div>
    )
}

export default Categories;