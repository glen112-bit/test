import React, { useId } from "react";
import { styled } from 'styled-components'
import { useCart } from "../../hooks/useCart.js";

const StyledCart = styled.li`
  max-width: 32rem;
  margin: 0 auto;
  list-style-type: none;

`
const StyledImg  = styled.img`
  border-radius: 5%;
  max-width: 12rem;
`
const StyledPrice = styled.div`
 color:gold;
`

export function CartItem({ photo, price, quantity, brand  }) {
  // const { addToCart, removeFromCart } = useCart();
  return (
    <StyledCart>
      <StyledImg src={photo} alt={brand} />
      <div>
        <strong>{brand}</strong> 
      </div>
      <StyledPrice>-${price}</StyledPrice>
      <footer>
        <small>Qty: {quantity}</small>
      </footer>
    </StyledCart>
  );
}

export const Carrito = () => {
  const cartCheckboxId = useId();
  const { cart, clearCart } = useCart();
  localStorage.setItem('cart', JSON.stringify(cart))

  return (
    <>
      <label htmlFor="cart"></label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map(prod => (
            <CartItem 
              {...prod}
              key={prod.id}
            />
          ))}
        </ul>
        <button onClick={clearCart}>Clear</button>
      </aside>
    </>
  );
};
