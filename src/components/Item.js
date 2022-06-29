import './Item.css';
import { useEffect, useState } from 'react';

function Item() {
    
    const[info,setInfo] = useState([])

    useEffect(()=>{
        setTimeout(() => {
        fetch('products_data.json')
        .then((resp) => resp.json())
        .then((data) => setInfo(data))
        }, 2000)
    },[])
  

return (
    
    <section /*style="background-color: #eee;"*/>
        {info.map(i =>
        <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
                <img src={i.img} className="card-img-top" alt=""/>
                <div className="card-body mt-1">
                    <h4 className="card-title">{i.name}</h4>
                    <h6 className="text-primary mb-1 pb-3">${i.price}</h6>
                    {/*<p>Productos Agregados al carrito: {num} Unidades</p>*/}
                    </div>
                    {/*<button type="button" className="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark" onClick={vaciar}>Vaciar</button>*/}
                    <button type="button" className="btn btn-danger flex-fill ms-1" /*onClick={sumar}*/>Ver detalle de producto</button>
                </div>
                </div>
            </div>
    )}
    </section>
  );
}

export default Item;