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
 border-top-right-radius: 0.76vw;
border-bottom-right-radius:  0.76vw;
border-bottom-left-radius:   0.76vw;
 background-color:#edf9fb;
 padding: 1.53vw;
 box-shadow:  0.38vw  0.38vw  0.38vw #888888;
 transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow: 1.53vw 1.53vw 1.53vw #888888;
 }
`;

export const Img = styled.img`
width:  ${props => `${props.width}`}vw;
height:  ${props => `${props.height}`}vw;
`;
export const DivH3 = styled.div`
display: flex;
width: 100%;
justify-content: center;
max-width:  15.31vw;
background-color:#50BED2;
border-top-right-radius:  0.76vw;
border-bottom-right-radius:  0.76vw;
border-bottom-left-radius:   0.76vw;
margin-bottom:  0.76vw;
`;
export const H3 = styled.h3`
font-size: 1.59vw;
color: #fff;
`;
export const DivHeader = styled.div`
 width: 100%;
 display: flex;
 justify-content:center ;
 margin-bottom: 3.82vw;
`;
export const H1 = styled.h1`
font-size:  2.45vw;
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
padding:  0.38vw;
background-color: #e2a8a8;
border-radius:  0.76vw;
box-shadow:  0.38vw  0.38vw  0.38vw #888888;
`;