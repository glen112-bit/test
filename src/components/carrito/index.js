import React, { useId } from "react";
import { styled } from 'styled-components'
import { useCart } from "../../hooks/useCart.js";

const StyledCart = styled.li`
  max-width: 32rem;
  margin: 0 auto;
  list-style-type: none;
  margin-bottom:4rem;
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
      <StyledPrice>${price * quantity}</StyledPrice>
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
  const total = cart.map(car => Number(car.price * car.quantity))
  return (
    <>
      <label htmlFor="cart"></label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <StyledCart >
        <ul>
          {cart.map(prod => (
            <CartItem 
              {...prod}
              key={prod.id}
            />
          ))}
        </ul>
        <button onClick={clearCart}>Clear</button>
      </StyledCart>
      Total:<StyledPrice>${total.reduce((a,b) => (a+b),0)} </StyledPrice>
    </>
  );
};
