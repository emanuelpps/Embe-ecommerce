import './Categories.css';
import { Link } from 'react-router-dom';


const Categories = () => {


    return(
        <div class="row mt-5 cardCenter">
            <div class="cardStyle">
                <Link to='/category/Cocina'><img src="./img/categories-cocina.png" class="card-img-top" alt="Productos de Cocina"/></Link>
            </div>
            <div class="cardStyle">
                <Link to='/category/Cuarto'><img src="./img/categories-cuarto.png" class="card-img-top" alt="Productos para el Cuarto"/></Link>
            </div>
            <div class="cardStyle">
                <Link to='/category/Bano'><img src="./img/categories-bano.png" class="card-img-top" alt="Producto de Bano"/></Link>
            </div>
            <div class="cardStyle">
                <Link to='/category/Living'><img src="./img/categories-living.png" class="card-img-top" alt="Productos de Living"/></Link>
            </div>
        </div>
    )
}

export default Categories;