import styled from "styled-components";
import ConfiguracaoSistema from "../../../config/index"

export const Body = styled.div`
 width: 100%;
height: ${ConfiguracaoSistema.tela.tamanho.height}px;
 background: ${props => `url(${props.background}) no-repeat top center`};
 background-size: auto;
 display: flex;
 flex-direction: column;
 justify-content: center;
`;

export const Conteiner = styled.div`
 width: 100%;
 display:flex;
 justify-content: center;
 align-items: center;
`;

export const Content = styled.div`
 width: 50%;
 display: flex;
 justify-content:center ;
`;

export const DivOptions = styled.div`
 display: flex;
align-items: center;
 flex-direction: column;
 border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
 background-color:#edf9fb;
 padding: 20px;
 box-shadow: 5px 5px 5px #888888;
 transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow: 20px 20px 20px #888888;
 }
`;

export const Img = styled.img`
width:  ${props => `${props.width}`}px;
height:  ${props => `${props.height}`}px;
`;
export const DivH3 = styled.div`
display: flex;
width: 100%;
justify-content: center;
max-width: 200px;
background-color:#50BED2;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
margin-bottom: 10px;
`;
export const H3 = styled.h3`
color: #fff;
`;
export const DivHeader = styled.div`
 width: 100%;
 display: flex;
 justify-content:center ;
 margin-bottom: 50px;
`;
export const H1 = styled.h1`
color: #3f3d56;
`;
export const DivTitulo = styled.div`
height: 100px;
 display: flex;
 flex-direction: column;
 align-items: center;
`;
export const Erro = styled.p`
color: #fff;
padding: 5px;
background-color: #e2a8a8;
border-radius: 10px;
box-shadow: 5px 5px 5px #888888;
`;