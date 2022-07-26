import { createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;




export const CartProvider = ({defaultValue = [], children}) =>{

    const [cart, setCart] = useState(defaultValue);
    const [items, setItems] = useState(0);
    //const [total, setTotal] = useState(0);

    const addToCart = (data, num) => {
        console.log(data)
        if(isInCart(data.id)){
            const newCart = [...cart]
            for (const element of newCart) {
                if (element.data.id === data.id){
                    element.num = element.num + num;
                }
            }
            setCart(newCart);

        } else {
            setCart ([
                ...cart, {
                    data: data,
                    quantity: num,
                    name: data.name,
                    price: data.price,
                    img: data.img
                }
            ])
        }
    }


const isInCart = (id) => {
        return cart.find((element) => element.data.id === id)
    }

    const updateItems = ()=>{
        let total = cart.reduce(( acc,element) => acc  + element.quantity, 0);
        setItems(total);
    };

    const getProductsFromCart = (id) => {
        return cart.find((element) => element.id === id);
    };

    const getItemQuantity = (id) => {
        const data = getProductsFromCart(id);
        return data ? data.num : 0;
    };


    const getTotal = () => {
        let total = 0;
        cart.map((i) => total += i.price * i.num);
        return total;
    };

    function getTotalProducts() {
        let quantity = 0;
        cart.map(i => quantity += i.num);
        return quantity;
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
        getProductsFromCart,
        getItemQuantity,
        items,
        updateItems,
        getTotal,
        getTotalProducts,
        removeFromCart,
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
};
