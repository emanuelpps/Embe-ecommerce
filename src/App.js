import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
/*import ItemCount from './components/ItemCount';*/
import NavBar from './components/NavBar/NavBar';
import { ItemDetailContainer } from 'components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from 'components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Context/CartContext';
import Home from './components/pages/home/Home';
import Footer from 'components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Header/>
      <NavBar/>
      <Routes>
          <Route exact path= "/cart" element={<Cart/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/category/:catId" element={<ItemListContainer />}></Route>
          <Route path="/product/:itemId" element={<ItemDetailContainer/>}></Route>
          <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;