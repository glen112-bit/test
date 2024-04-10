import React, {  useState, useEffect, useContext } from 'react';
import { Cartcontext } from "./context/Context.js";
import api from './services/api.js'
import './App.css';
import { Item , Carrito   } from './components'
import { Skeleton } from '@mui/material'

function App() {

  const [productos, setProductos] = useState();

  useEffect(() => {
    async function getData(){
    const respo = await api.get()
    const resp = await respo.data.products
      setProductos(resp)
      }
    getData()
},[productos]);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  return (
    <div className="App">
      <header className="App-header">
        <section>
          {typeof(productos) !== 'undefined' ?
           <Item 
             dispatch = { dispatch }
             productos={productos}/>
           :
              
           <Skeleton variant="rectangular" animation="wave" width={340} height={340} />
          }
          <Carrito />
        </section>
      </header>
    </div>
  );
}

export default App;
