import './ItemCount.css';
import { useState } from "react";
import Swal from 'sweetalert2'


function ItemCount({ stock }) {
    
    const [num, setNum] = useState(0);

    const sumar = () =>{
        if(num < stock){
        setNum(num + 1)
        } else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El producto se encuentra sin stock',
          })
        }
    }

    const vaciar = () =>{
        setNum(0)
    }
    

    
  return (
    <section /*style="background-color: #eee;"*/>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
        <div class="card text-black">
          <img src="https://www.homecollection.com.ar/pub/media/catalog/product/cache/image/e9c3970ab036de70892d86c6d221abfe/f/a/fa0a3897-min_1.jpg"
            class="card-img-top" alt="iPhone" />
          <div class="card-body">
            <div class="text-center mt-1">
              <h4 class="card-title">PANERA TUSOR GRIS</h4>
              <h6 class="text-primary mb-1 pb-3">$1.399</h6>
              <p>Productos Agregados al carrito: {num} Unidades</p>
            </div>
            <div class="d-flex flex-row">
              <button type="button" class="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark" onClick={vaciar}>Vaciar</button>
              <button type="button" class="btn btn-danger flex-fill ms-1" onClick={sumar}>Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </div>
     </div> 
  </div>
</section>
  );
}

export default ItemCount;
