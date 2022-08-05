import { useContext,createContext, useState } from "react";

export const CartContext = createContext({});

const { Provider } = CartContext;


const useCartContext = () => useContext(CartContext);


export const CartProvider = ({defaultValue = [], children}) =>{

    const [cart, setCart] = useState(defaultValue);
    const [items, setItems] = useState(0);
    const [total, setTotal] = useState(0);

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


    const isInCart = (itemName)=> {
        const isIn = cart.find(product => product.item === itemName);

        return isIn;
    };

    /* const updateItems = ()=>{
        let total = cart.reduce(( acc,element) => acc  + element.quantity, 0);
        setItems(total);
    }; */

    //const getProductsFromCart = (id) => {
      //  return cart.find((element) => element.id === id);
    //};

    /* const getItemQuantity = (id) => {
        const data = getProductsFromCart(id);
        return data ? data.num : 0;
    }; */


    const getTotal = () => {
        const sumalize = cart.reduce( (acc, prod) => acc + prod.price * prod.quantity, 0 );
        setTotal(sumalize);
    };

    function getTotalProducts() {
        let quantity = 0;
        cart.map(i => quantity += i.quantity);
        return quantity;
    }

    function totalPrice() {
        let total = 0;
        cart.map ( (i) => total += i.price * i.quantity );
        return total;
    }

    const removeFromCart = (name) =>{
        const newCart = [...cart];
        const cartFilter = newCart.filter(item =>{
            return item.name !== name;
        });
        setCart(cartFilter)
    }
    

    const clearCart = () =>{
        setCart([]);
    }

    const context = {
        cart,
        clearCart,
        addToCart,
        isInCart,
        //getProductsFromCart,
        //getItemQuantity,
        items,
        //updateItems,
        total,
        getTotal,
        getTotalProducts,
        removeFromCart,
        totalPrice
    }

    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
};
export default useCartContext;