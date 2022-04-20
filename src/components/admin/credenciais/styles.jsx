import styled from "styled-components";

export const Container = styled.div`
min-width: 38.28vw;
display: flex ;
align-items: center;
flex-direction: column;
`;

export const Div = styled.div`
width:100%;
display: flex ;
justify-content:center;
`;
export const Img = styled.img`
width:  15.31vw;
height:  15.31vw;
`;
export const Button = styled.button`
padding: 0.76vw 1.53vw;
font-size: 1.53vw;
border: none;
color: #fff;
box-shadow: 0.15vw 0.15vw 0.15vw #888888;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow:  0.38vw 0.38vw 0.38vw #888888;}

`;
export const DivButton = styled.div`
margin-top: 1.53vw;
width:100%;
display: flex ;
justify-content: center;
margin-bottom: 1.53vw;
`;
export const H2 = styled.h2`
font-size: 1.83vw;
color: #3f3d56;
`;

