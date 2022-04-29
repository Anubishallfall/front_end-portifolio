import styled from "styled-components";
import ConfiguracaoSistema from "../../../config/index"

export const Body = styled.div`
 width: 100%;
height: ${ConfiguracaoSistema.tela.tamanho.height}px;
 background: ${props => `url(${props.background}) no-repeat top center`};
 background-size: auto;
 display: flex;
 justify-content: center;
 @media (max-width: 800px) {
  flex-direction: column;
  align-items: center;
    }
`;
export const DivTicketAtendidos = styled.div`
 width: 30%;
 display:flex;
 flex-direction: column;
 align-items: center;
 padding-top: 0.76vw;
 padding-bottom:  0.76vw;
 @media (max-width: 800px) {
flex-direction: row;
width: 100%;
justify-content: space-evenly;
padding: 10px;
    }
 `;
export const DivTicketDaVez = styled.div`
 width: 70%;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 @media (max-width: 800px) {
width: 90%;
height: 50%;
    }
 `;

export const TicketDaVez = styled.div`
 width: 80%;
 height: 80%;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color:#044073;
border-top-right-radius: 1.914vw;
border-bottom-right-radius: 1.914vw;
border-bottom-left-radius:  1.914vw;
 box-shadow:  0.76vw  0.76vw  0.76vw #888888;
 `;

export const TicketAtendido = styled.div`
margin-top:  0.76vw;
width: 80%;
height: 15.313vw;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:#50BED2; 
border-top-right-radius:  0.76vw;
border-bottom-right-radius:  0.76vw;
border-bottom-left-radius:   0.76vw;
box-shadow: 0.382vw 0.382vw 0.382vw #888888;
@media (max-width: 800px) {
    width: 30%;
    }
`;
export const H1 = styled.h1`
color: #fff;
font-size:  2.45vw;
@media (max-width: 500px) {
font-size: 15px;
    }
    @media (max-width: 361px) {
font-size: 10px;
    }
`;
export const H3 = styled.h3`
font-size: 1.59vw;
color: #fff;
@media (max-width: 500px) {
font-size: 10px;
    }
    @media (max-width: 361px) {
font-size: 7px;
    }
`;
export const H1Principal = styled.h1`
color: #fff;
font-size: 7.65vw;
@media (max-width: 500px) {
font-size: 20px;
    }
`;
export const Img = styled.img`
width:  ${props => `${props.width}`}vw;
height:  ${props => `${props.height}`}vw;
`;
