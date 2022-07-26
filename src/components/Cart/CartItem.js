//import ItemCount from 'components/ItemCount/ItemCount';
//import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext } from 'react';
import './Cart.css';
import  {CartContext} from '../Context/CartContext';
import { Link } from 'react-router-dom';
import CartList from './CartList';
//import BuyingForm from 'components/BuyingForm/BuyingForm';
//import BuyingForm from 'components/BuyingForm/BuyingForm';


const CartItem = () => {

    const { cart, total, removeFromCart, getTotal}= useContext(CartContext);

    if (cart.length !== 0) {

        return (
            <div className="cart-container">
                <div className="cart">
                    <div className="cart-columns">
                        <p></p>
                        <p className="column">Imagen</p>
                        <p className="column">Nombre</p>
                        <p className="column">Cantidad</p>
                        <p className="column">Precio</p>
                        <p className="column">Total</p>
                    </div>
                    <div className="cart-items">
                        {
                            cart.map( ({ item, name, quantity, price, img, total }) =>(
                                <CartList key={item} item={item} name={name} quantity={quantity} price={price} img={img} total={total} removeFromCart={removeFromCart}  />
                            ))
                        }
                    </div>
                    <div className="cart-total">
                        <p className="total-amount">
                        Subtotal ${ getTotal }
                        </p>
                        <Link to="/checkout" /* element={
                            cart.map( ({ item, name, quantity, price, total }) =>(
                                <BuyingForm  item={item} name={name} quantity={quantity} price={price} total={total}/>
                            ))} */ className="waves-effect btn">Finalizar compra</Link>
                    </div>
                </div>
            </div>
        )

    } else {
        return(
            <div className="cart-container-empty">
                <i className="material-icons empty-cart"></i>
                <h4 className="empty-cart-title">Carrito vacío <br/> </h4>
                <Link to="/"><button className="waves-effect waves-light btn backToLanding-btn">Volver a la tienda</button></Link> 
            </div>
        )
    }


}


export default CartItem;





