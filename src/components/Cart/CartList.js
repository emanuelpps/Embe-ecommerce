import React, { useContext } from 'react'
import  {CartContext} from '../Context/CartContext';
import CartItem from './CartItem';
import './CartList.css';

const CartList = () => {

    const cartContext = useContext(CartContext);
    const { cart, removeFromCart, clearCart } = cartContext;

    return (
        <section className="list-cart-container">
            {cart ? (
                cart.map((product) => {
                return(
                    <CartItem  
                        product={product.data}
                        key={product.data.id}
                        quantity ={product.quantity} 
                        removeFromCart={removeFromCart}
                        />
                    );
                    })
                ) : ( 
                <div class="text-center">
                    <div className='spinner-border' role="status">
                    <span className='visually-hidden'>Loading...</span>
                    </div>
                </div>
            )}
            {cart.length ? (
                <button  className="button-primary button-padding"  onClick={clearCart}>Vaciar Carrito</button>
            ) : (
            <p>No hay productos en el carrito</p>
            )};
        </section>
    );
};

export default CartList
