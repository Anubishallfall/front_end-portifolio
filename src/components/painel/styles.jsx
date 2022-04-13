import styled from "styled-components";
import ConfiguracaoSistema from "../../config/index"

export const Body = styled.div`
 width: 100%;
height: ${ConfiguracaoSistema.tela.tamanho.height}px;
 background: ${props => `url(${props.background}) no-repeat top center`};
 background-size: auto;
 display: flex;
`;
export const DivTicketAtendidos = styled.div`
 width: 30%;
 display:flex;
 flex-direction: column;
 align-items: center;
 padding-top: 10px;
 padding-bottom: 10px;
 `;
export const DivTicketDaVez = styled.div`
 width: 70%;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;

 `;

export const TicketDaVez = styled.div`
 width: 80%;
 height: 80%;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color:#044073;
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
border-bottom-left-radius:  25px;
 box-shadow: 10px 10px 10px #888888;
 `;

export const TicketAtendido = styled.div`
margin-top: 10px;
width: 80%;
height: 200px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:#50BED2; 
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
box-shadow: 5px 5px 5px #888888;
`;
export const H1 = styled.h1`
color: #fff;
`;
export const H3 = styled.h3`
color: #fff;
`;
export const H1Principal = styled.h1`
color: #fff;
font-size: 100px;
`;
export const Img = styled.img`
width:  ${props => `${props.width}`}px;
height:  ${props => `${props.height}`}px;
`;
