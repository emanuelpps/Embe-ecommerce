
import Header from './components/Header/Header';
/*import ItemCount from './components/ItemCount';*/
import NavBar from './components/NavBar/NavBar';
import { ItemDetailContainer } from 'components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from 'components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListContainer/>
    </div>
  );
}

export default App;