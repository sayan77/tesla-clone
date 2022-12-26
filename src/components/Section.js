import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Container>
        <ItemText>
            <h1> Model S </h1>
            <p> Order Online for Touchless Delivery </p>
        </ItemText>

        <ButtonGroup>
            <LeftButton> Custom Order </LeftButton>
            <RightButton> Existing Inventory </RightButton>
        </ButtonGroup>
    </Container>
  )
}

export default Section


const Container = styled.div`
 background-color : blue;
 width : 100%;
 height : 100vh;
 background-image : url('/images/model-s.jpg');
 background-position : center;
 background-size : cover;
 background-repeat : no-repeat;
 display : flex;
 flex-direction : column; 
 align-items  : center;

`

const ItemText = styled.div`
padding-top : 15vh;
text-align:  center; 
 
`

const ButtonGroup = styled.div`
`

const LeftButton = styled.div`
 background-color : rgba(23, 26, 32, 0.8);
 height : 40px;
 width : 256px;
 border-radius : 100px;
 color : #fff;
 display : flex;
 justify-content : center; 
 align-items : center;
 text-transform : uppercase;
 font-size : 12px;
 opacity : 0.85;
 margin : 8px;
`

const RightButton = styled.div`
`