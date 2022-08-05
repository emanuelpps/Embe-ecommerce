import React from 'react'
import CartItem from './CartItem';

const Cart = () => {


    return (
        <main className="text-center">
            <div className='Header'>
                <h3 className='Cart-Heading mt-4'>Carrito de Compras</h3>
                </div>
            <CartItem />
        </main>
    );
};

export default Cart;