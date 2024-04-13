import { useContext } from 'react';
import { CartContext } from '../context/cart.js'

export const useCart = () => {
  const context = useContext(CartContext);

  if(context === undefined) {
    throw new Error('debe ser usado con provider')
  }
  return context
}
