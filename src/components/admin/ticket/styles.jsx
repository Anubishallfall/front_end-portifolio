import styled from "styled-components";

export const Container = styled.div`
width: 400px;
display: flex ;
align-items: center;
flex-direction: column;
background-color:#edf9fb; background-color:#edf9fb;
 box-shadow: 5px 5px 5px #888888;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;
@media (max-width: 800px) {
width: 280px;
    }
    @media (max-width: 350px) {
     width: 200px;
    }
`;

export const Div = styled.div`
width:100%;
display: flex ;
justify-content:center;
`;
export const SenhaTitulo = styled.h1`
color: #3f3d56;
@media (max-width: 800px) {
font-size: 15px;
    }
`;
export const SenhaValor = styled.h1`
padding: 5px;
background-color: #50BED2;
color: #fff;
border-top-right-radius: 10px;
border-bottom-right-radius:10px;
border-bottom-left-radius: 10px;
@media (max-width: 800px) {
font-size: 15px;
    }
`;
export const P = styled.p`
color: #3f3d56;
@media (max-width: 800px) {
font-size: 10px;
    }
`;
export const Img = styled.img`
width: 200px;
height: 200px;
`;
export const DivDados = styled.div`
width:80%;
display: flex ;
margin-bottom: 5px;
`;
export const Button = styled.button`
padding:10px;
width: 40px;
height:  40px;
border-radius: 50%;
border: none;
color: #fff;
background-color: #e2a8a8;
position: relative;
left: 200px;
bottom: 470px;
box-shadow:  5px   5px   5px  #888888;
@media (max-width: 800px) {
    left: 140px;
    bottom: 370px;
    }
    @media (max-width: 350px) {
    left: 100px;
    bottom: 370px;
    }
`;



