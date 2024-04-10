import styled from 'styled-components';
import React from 'react';


const StyledItem = styled.section`
  border: 2px solid white;
  border-radius: 5%;
  max-width: 20rem;
  max-heigth: 20rem;
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
  margin-bottom:1em;
`

export const Item = ({ productos, dispatch }) =>{

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>
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
        <StyledButton onClick={() => dispatch({ type: "ADD", payload: prod })}
        >AddToCar</StyledButton >
      </StyledItem>
     ))}
      </div>
    );
}

