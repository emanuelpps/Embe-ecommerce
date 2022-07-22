//import ItemCount from 'components/ItemCount/ItemCount';
import React from 'react';
import './Cart.css';


const CartItem = ({product, quantity, removeFromCart, id, clearCart} ) => {
        
    

    return (
        <article className="">
           <section class="h-100"  alt=''>
            <div class="container h-100 py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">

                    <div class="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <p class="mb-0"><span class="text-muted">Ordenar por:</span> <a href="#!" class="text-body">precio <i
                            class="fas fa-angle-down mt-1"></i></a></p>
                    </div>
                    </div>

                    <div class="card rounded-3 mb-4">
                    <div class="card-body p-4">
                    <div className="cart-item__delete" onClick={()=>removeFromCart(id)}>
                                X
                            </div>
                        <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                            <img src={product.img} class="img-fluid rounded-3" alt={product.name}/>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                            <p class="lead fw-normal mb-2">{product.name}</p>
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                            <i class="fas fa-minus"></i>
                            </button>

                            <input id="form1" min="0" name="quantity" value={quantity} type="number"
                            class="form-control form-control-sm" />

{/*<button class="btn btn-link px-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"/>
                            <i class="fas fa-plus"/></i>
                            </button>*/}
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h5 class="mb-0">${product.price}</h5>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="card">
                    <div class="card-body">
                        <button type="button" class="btn btn-success btn-block btn-lg">Finalizar Compra</button>
                    </div>
                    </div>

                </div>
                </div>
            </div>
            </section>



{/*<div className="cart-item__delete" onClick={()=>removeFromCart(id)}>
                X
            </div>
            <div className="cart-item__img">
                <img src={product.img} alt="" />
            </div>
            <h2 className="cart-item__name">{product.name}</h2>
            <span className="cart-item__price">${product.price}</span>
            <span className="cart-item__qty"><strong>Cantidad: {quantity}</strong> </span>
    <span className="cart-item__qty"><strong>Total:</strong> ${product.price * quantity} </span>*/}
            
        </article>


    );
}

export default CartItem;





