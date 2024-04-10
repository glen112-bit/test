import React, { useState, useEffect } from 'react';
import api from './services/api.js'
// import styled from 'styled-components'
import './App.css';

import { Item } from './components'
function App() {
//
  const [productos, setProductos] = useState();
  // const [producto, setProducto] = useState({});
  // const item = [];
//
  useEffect(() => {
    async function getData(){
    const respo = await api.get()
    const resp = await respo.data.products
      // const response = JSON.stringify(resp)
      setProductos(resp)
      // eslint-disable-next-line
      console.log(typeof(productos))
      }
    getData()
},[]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {typeof(productos) !== 'undefined' ?
           <Item productos={productos}/>
           :
            setTimeout(()=> 3000, <Item productos={productos}/>)
          }
        </div>
      </header>
    </div>
  );
}

export default App;
