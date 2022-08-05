import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
/*import ItemCount from './components/ItemCount';*/
import NavBar from './components/NavBar/NavBar';
import { ItemDetailContainer } from 'components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from 'components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Context/CartContext';
import Home from './components/pages/home/Home';
import Footer from 'components/Footer/Footer';
import Checkout from 'components/Checkout/Checkout';
import Nosotros from 'components/pages/nosotros/nosotros';
import Contacto from 'components/pages/contacto/contacto';




function App() {
  return (
    <div className="App">
      <CartProvider>
      <HashRouter>
      <Header/>
      <NavBar/>
      <Routes>
          <Route exact path= "/cart" element={<Cart/>}></Route>
          <Route path="/embe-ecommerce" element={<Home/>}></Route>
          <Route path="/category/:catId" element={<ItemListContainer />}></Route>
          <Route path="/all-products" element={<ItemListContainer />}></Route>
          <Route path="/product/:itemId" element={<ItemDetailContainer/>}></Route>
          <Route path="*" element={<Navigate to="/embe-ecommerce"/>}/>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/nosotros" element={<Nosotros/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
      </Routes>
      <Footer/>
      </HashRouter>
      </CartProvider>
    </div>
  );
}

export default App;