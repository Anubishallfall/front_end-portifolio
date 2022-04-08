import styled from "styled-components";
import ConfiguracaoSistema from "../../config/index"

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
 justify-content: space-evenly;
 align-items: center;
 `;
export const DivTicket = styled.div`
 width: 33%;
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 `;
export const DivTicketCentral = styled.div`
 width: 33%;
 display:flex;
 flex-direction: column;
 justify-content: start;
 align-items: center;
 `;