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
export const H3 = styled.h3`
color: #fff;
`;
export const DivH3 = styled.div`
display: flex;
justify-content: center;
width: 200px;
background-color:#50BED2;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
margin-bottom: 10px;
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
color:#50BED2;
`;
export const SubTitulo = styled.h2`
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