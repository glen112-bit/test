import { Item } from '../../components'
import React, {useState} from 'react';

  export const Carrito = ({producto, item}) => {
     // console.log('producto:', producto);
      return (
      <>
        <div>Carrito</div>
         <Item 
            key={item.id}
            name={item.name}
            price={item.price}
            img = {item.img}
         />
      </>
    );
}


