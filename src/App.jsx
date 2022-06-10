/* import { useState } from 'react'; */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ComponentContainer from './components/ComponentContainer/ComponentContainer';
import ItemListContainer from './components/ItemListContainer/ItemList';
import CartWidget from './components/CartWidget/CartWidget';
import { useState } from 'react';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemListContainer/ItemList';
import Item from './components/ItemListContainer/Item';





function App() {
  let tituloApp = "TuBurguer VIP"
  
  return (
    <>
    <NavBar />
    <Titulo titulo={tituloApp} subtitulo='Las mejores burguers del condado' />
     <ItemCount stock={5} initial={1} onAdd /> 
    <ItemListContainer/>
    </>
    
  );
}




export default App;
