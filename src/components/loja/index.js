import React, { useState, useEffect } from 'react';
// import { Item } from '../../components'
import api from '../../services/api.js'

// export const Loja = ({producto, setProducto, item }) => {
export const Loja = () => {  
  const [products, setProducts] = useState({}); 

  useEffect(() => {
    api.get()
      .then(res => {
        console.log(typeof(products))
        console.log('products:', products);
        setProducts(res.data.products);
      })
      .catch(err => {
        console.log('error:', err);
   })
      .finally(err   =>{
        console.log('err:', err);
      })
},[products]);
// console.log('item:', item);
// console.log('products:', products);
    // const response = async () =>products.map((prod) => ( <Item
    // key={prod.id}
    // name = {prod.name}
    // brand = {prod.brand}
    // description= {prod.description}
    // price = {prod.price}
    // img = {prod.photo}
    // setProducto = {setProducto}
    // producto = {producto}
    // item = {item}
  // /> ))
// response()
       return (
      <>
      </>
    );
}


