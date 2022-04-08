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
 justify-content: center;
 align-items: center;
`;
export const DivImagem = styled.div`
 width: 50%;
 display: flex;
 justify-content:center ;
`;
export const DivGerador = styled.div`
 width: 50%;
 display: flex;
 justify-content: center;
`;
export const Img = styled.img`
width:  ${props => `${props.width}`}px;
height:  ${props => `${props.height}`}px;
`;