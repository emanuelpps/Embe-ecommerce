import './Item.css';


function Item (props){

    return(    
            <div class="col">
              <div class="card h-100">
                <img src={props.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">{props.name}</h5>
                  <p class="card-text">${props.price}</p>
                  <button type="button" className="btn btn-danger flex-fill ms-1" /*onClick={sumar}*/>Ver detalle de producto</button>
                </div>
              </div>
                 {/*<p>Productos Agregados al carrito: {num} Unidades</p>*/}
                        
                        {/*<button type="button" className="btn btn-primary flex-fill me-1" data-mdb-ripple-color="dark" onClick={vaciar}>Vaciar</button>*/}
                        
            </div>
  
  
                     
    )
}

export default Item;