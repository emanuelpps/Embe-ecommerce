import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext

export const CartProvider = ({defaultValue = [], children}) =>{

    const [cart, setCart] = useState(defaultValue);

    const addToCart = (data, quantity) => {
        console.log(data)
        if(isInCart(data.id)){
            const newCart = [...cart]
            for (const element of newCart) {
                if (element.data.id === data.id){
                    element.quantity = element.quantity + quantity;
                }
            }
            setCart(newCart);

        } else {
            setCart ([
                ...cart, {
                    data: data,
                    quantity: quantity
                }
            ])
        }
       
    }

    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id)
    }

    const removeFromCart = (id) =>{
        const newCart = [...cart].filter(element => element.data.id !== id);
        setCart(newCart)
    }

    const clearCart = () =>{
        setCart([]);
    }

    const context = {
        cart,
        clearCart,
        addToCart,
        isInCart,
        removeFromCart
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
};