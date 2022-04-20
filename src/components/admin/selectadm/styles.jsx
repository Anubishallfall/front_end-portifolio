import styled from "styled-components";
import { Link } from "react-router-dom";
import ConfiguracaoSistema from "../../../config/index"

export const Body = styled.div`
 width: 100%;
height: ${ConfiguracaoSistema.tela.tamanho.height}px;
 background: ${props => `url(${props.background}) no-repeat top center`};
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
`;
export const Container = styled.div`
 width: 100%;
 display: flex;
`;
export const Div = styled.div`
 width: 33%;
 display: flex;
 justify-content: center;
`;
export const DivOptions = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 border-top-right-radius: 0.76vw;
border-bottom-right-radius: 0.76vw;
border-bottom-left-radius:  0.76vw;
 background-color:#edf9fb;
 padding: 1.53vw;
 box-shadow:  0.38vw 0.38vw 0.38vw #888888;
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
export const H3 = styled.h3`
font-size: 1.59vw;
color: #fff;
`;
export const DivH3 = styled.div`
display: flex;
justify-content: center;
width: 15.31vw;
background-color:#50BED2;
border-top-right-radius: 0.76vw;
border-bottom-right-radius: 0.76vw;
border-bottom-left-radius:  0.76vw;
margin-bottom:  0.76vw;
`;
export const DivTitulo = styled.div`
display: flex;
align-items: center;
flex-direction: column
`;
export const HeaderTitulo = styled.header`
width: 100%;
display: flex;
justify-content: center;
`;
export const Titulo = styled.h1`
font-size:  2.45vw;
color:#50BED2;
`;
export const SubTitulo = styled.h2`
font-size: 1.83vw;
color:#3f3d56;
`;
export const DivSubTitulo = styled.div`
display: flex;
width: 100%;
`;
export const A = styled(Link)`
text-decoration: none;
text-transform: none;
text-overflow: none;
`;