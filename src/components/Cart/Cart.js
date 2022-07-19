import React from 'react'
import CartList from './CartList';

const Cart = () => {


    return (
        <main className="text-center">
            <div className='Header'>
                <h3 className='Cart-Heading'>Carrito de Compras</h3>
                </div>
            <CartList />
        </main>
    );
};

export default Cart;