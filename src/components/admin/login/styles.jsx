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
 justify-content: center;
 @media (max-width: 800px) {
width: 100%;
    }

`;

export const Form = styled.form`
width: 300px;
height: 400px;
@media (max-width: 800px) {
width: 80%;
    }

`;
export const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;
export const Button = styled.button`
margin-top: 15px;
padding: 8px 20px;
font-size: 25px;
border: none;
color: #fff;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow: 4px 4px 4px #888888;
 }
 @media (max-width: 800px) {
    width: 100%;
    padding: 15px 40px;
    }
`;

export const DivButton = styled.div`
width: 100%;
display: flex;
justify-content:center;
`;

export const Img = styled.img`
width:  ${props => `${props.width}`}px;
height:  ${props => `${props.height}`}px;
@media (width: 100px) {
   display: none;
   visibility: hidden;
        
    }
`;

export const ImgCadastro = styled.img`
width:200px;
height:200px;
`;

export const DivImg = styled.div`
border-radius: 150px;
background-color:#50BED2;
padding: 20px;

`;

export const P = styled.p`
font-size: 12px;
color: #707070;
`;

export const PLink = styled.p`
font-size: 12px;
color: #50BED2;
cursor: pointer;
margin-left: 2px;
`;
export const DivLink = styled.div`
margin-top: 20px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Erro = styled.p`
color: #707070;
`;









