import styled from "styled-components";
import { Link } from "react-router-dom";
import ConfiguracaoSistema from "../../../config/index"

export const Body = styled.div`
 width: 100%;
height: ${ConfiguracaoSistema.tela.tamanho.height}px;
 background: ${props => `url(${props.background}) no-repeat top center`};
 display: flex;
 flex-direction: column;
 justify-content: center;
`;
export const Conteiner = styled.div`
 width: 100%;
 display:flex;
 align-items: center;
 @media (max-width: 800px) {
    height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
export const DivImagem = styled.div`
 width: 50%;
 display: flex;
 justify-content:center ;
 @media (max-width: 800px) {
display: none;
visibility: hidden;
    }
`;
export const DivLoginForm = styled.div`
 width: 50%;
 display: flex;
 justify-content: center
`;

export const Form = styled.form`
width: 23vw;
height: 30.75vw;
@media (max-width: 800px) {
width: 100%;
height: 200%;
    }

`;
export const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;
export const Button = styled.button`
margin-top: 1.3vw;
padding: 0.55vw 1.5vw;
font-size: 2vw;
border: none;
color: #fff;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow: 0.3vw  0.3vw  0.3vw #888888;
 }
`;

export const DivButton = styled.div`
width: 100%;
display: flex;
justify-content:center;

`;

export const Img = styled.img`
width:  ${props => `${props.width}`}vw;
height:  ${props => `${props.height}`}vw;
@media (width: 100px) {
   display: none;
   visibility: hidden;
        
    }
`;

export const ImgCadastro = styled.img`
width: 15.31vw;
height: 15.31vw;
`;
export const DivImg = styled.div`
border-radius: 11.48vw;
background-color:#50BED2;
padding: 1.53vw;

`;

export const P = styled.p`
font-size:  0.99vw;
color: #707070;
`;

export const PLink = styled.p`
font-size:  0.99vw;
color: #50BED2;
cursor: pointer;
margin-left: 0.15vw;
`;
export const DivLink = styled.div`
margin-top: 1.53vw;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Erro = styled.p`
font-size:  0.99vw;
color: #707070;
`;








