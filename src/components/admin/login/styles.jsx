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
`;
export const DivImagem = styled.div`
 width: 50%;
 display: flex;
 justify-content:center ;
`;
export const DivLoginForm = styled.div`
 width: 50%;
 display: flex;
 justify-content: center;
`;

export const Form = styled.form`
width: 300px;
height: 400px;

`;
export const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;
export const Button = styled.button`
margin-top: 20px;
padding: 8px 20px;
font-size: 25px;
border: none;
color: #fff;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow: 5px 5px 5px #888888;
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
`;

export const ImgCadastro = styled.img`
width: 200px;
height: 200px;
`;
export const DivImg = styled.div`
border-radius: 150px;
background-color:#50BED2;
padding: 20px;

`;

export const P = styled.p`
font-size: small;
color: #707070;
`;

export const PLink = styled.p`
font-size: small;
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
font-size: small;
color: #707070;
`;








