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
 @media (max-width: 963px) {
  height: auto;
    }
`;
export const Container = styled.div`
 width: 100%;
 display: flex;
 @media (max-width: 963px) {
    flex-direction: column;
    align-items: center;
    }
`;
export const Div = styled.div`
 width: 33%;
 display: flex;
 justify-content: center;
 @media (max-width: 963px) {
   margin-bottom: 20px;
   width: 100%;
    }
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
    box-shadow: 20px 20px 20px  #888888;
 }
 @media (max-width:963px) {
   width: 80%;
    }
`;
export const Img = styled.img`
width:  ${props => `${props.width}`}px;
height:  ${props => `${props.height}`}px;
@media (max-width: 963px) {
   width: 100px;
   height: 100px;
    }
`;
export const H3 = styled.h3`
/* font-size: 1.59vw; */
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
margin-bottom:  10px;
@media (max-width: 963px) {
   width: 150px;
    }
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
/* font-size:  2.45vw; */
color:#50BED2;
@media (max-width: 302px) {
    font-size: 22px;
    }
`;
export const SubTitulo = styled.h2`
/* font-size: 1.83vw; */
color:#3f3d56;
@media (max-width: 302px) {
  font-size: 18px;
    }
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
export const DivButtonLogout = styled.div`
display: flex;
padding-top: 5px ;
padding-left: 20px;
`;
export const ButtonLogout = styled.button`
background-color:#50BED2;
color: white;
transition: transform .5s;
border: none;
padding: 8px 20px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
font-size: 20px;
&:hover{
    transform: scale(1.1);
    box-shadow: 4px 4px 4px #888888;
 }
 @media (max-width: 302px) {
  font-size: 18px;}
`;