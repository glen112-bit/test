import styled from 'styled-components'
import React, {useState} from 'react';

const StyledItem = styled.section`
  border: 2px solid white;
  border-radius: 5%;
  max-width: 30rem;
  max-heigth: 30rem;
  margin:4rem;
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

export const Item = ({name, brand, description, price, img}) => {
    
      return (
      <StyledItem>
        <h1>{name}</h1>
        <h3>{brand}</h3>
        <StyledText>{description}</StyledText>
        <StyledPrice>${price}</StyledPrice>
        <StyledImg src={img} alt="image" />
      </StyledItem>
    );
}


