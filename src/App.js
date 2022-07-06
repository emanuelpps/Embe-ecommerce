import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
/*import ItemCount from './components/ItemCount';*/
import NavBar from './components/NavBar/NavBar';
import { ItemDetailContainer } from 'components/ItemDetailContainer/ItemDetailContainer';
import {ItemListContainer} from 'components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/category/:catId" element={<ItemListContainer />}></Route>
          <Route path="/product/:itemId" element={<ItemDetailContainer/>}></Route>
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;