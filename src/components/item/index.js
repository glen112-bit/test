// import { Carrito } from '../../components'
import styled from 'styled-components'
// eslint-disable-next-line
import React, {useState} from 'react';

const StyledItem = styled.section`
  border: 2px solid white;
  border-radius: 5%;
  max-width: 30rem;
  max-heigth: 30rem;
  margin:4rem;
`
const StyledTitle = styled.h1`
font-size:24px;
`
const StyledImg = styled.img`
  height:10rem;
  border-radius: 5%;
`
const StyledText = styled.p`
  font-size: 15px;
  padding: 1rem;
`
const StyledPrice = styled.div`
 color:gold;
`
const StyledButton = styled.button`
  display:flex
  margin:0 auto;
`

export const Item = ({ productos }) =>{
  // localStorage.setItem('valor', productos)

  // let myProducts = localStorage.getItem('valor')
  console.log(typeof(productos))
  return (
    <>
      {productos.map(prod => (
      <StyledItem key={prod.id}>
        <StyledTitle>
          {prod.brand}
        </StyledTitle>
        <StyledImg 
          src={prod.photo}
          alt={prod.brand}
        />
        <StyledPrice>
          {prod.price}
        </StyledPrice>
        <StyledText>
          {prod.description}
        </StyledText>
        <StyledButton>AddToCar</StyledButton >
      </StyledItem>
     ))}
      </>
    );
}


