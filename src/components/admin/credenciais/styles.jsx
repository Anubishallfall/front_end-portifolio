import styled from "styled-components";

export const Container = styled.div`
min-width: 500px;
display: flex ;
align-items: center;
flex-direction: column;
@media (max-width: 800px) {
      width: 250px;
    }
`;

export const Div = styled.div`
width:100%;
display: flex ;
justify-content:center;
`;
export const Img = styled.img`
width: 200px;
height: 200px;
@media (max-width: 800px) {
    width: 100px;
    height: 100px;
    }
`;
export const Button = styled.button`
padding: 8px 20px;
font-size: 20px;
border: none;
color: #fff;
box-shadow: 1px 1px 1px #888888;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow:  5px 5px 5px #888888;}
    @media (max-width: 800px) {
    font-size: 15px;
    }
`;
export const DivButton = styled.div`
margin-top: 20px;
width:100%;
display: flex ;
justify-content: center;
margin-bottom: 20px;
`;
export const H2 = styled.h2`
font-size: 23px;
color: #3f3d56;
@media (max-width: 800px) {
    font-size: 15px;
    }
`;

