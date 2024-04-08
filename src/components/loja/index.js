import React, { useState, useEffect } from 'react';
import { Item } from '../../components'
import api from '../../services/api.js'

export const Loja = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    api.get()
    .then(res => {
      setProducts(res.data.products);
      })
      .catch(err => {
        console.log('error:', err);
   })
},[]);
console.log('products:', products);
let response = () => products.map((prod) => ( <Item 
  key={prod.id} 
  name = {prod.name}
  brand = {prod.brand}
  description= {prod.description}
  price = {prod.price}
  img = {prod.photo}
  /> ))
      return (
      <>
        {response() }
      </>
    );
}


