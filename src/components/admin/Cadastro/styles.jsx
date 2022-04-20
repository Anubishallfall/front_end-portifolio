
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
 align-items: center;
 @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;
export const Form = styled.form`
align-items: center;
width:  38.28vw;
display: flex;
flex-direction: column;
`;
export const Div = styled.div`
width: 100%;
display: flex;
justify-content: center;
    flex-wrap: wrap;
`;
export const Input = styled.input`
border-top: none;
border-left: none;
border-right: none;
padding:  0.76vw 1.53vw;
outline: none;
`;
export const Label = styled.label`
margin-top:0.76vw 
`;
export const DivInput = styled.div`
width: 80%;
display: flex;
flex-direction: column;

`;

export const Img = styled.img`
width:  15.31vw;
height: 15.31vw;
`;
export const DivImagem = styled.div`
 width: 100%;
 display:flex;
justify-content:center;
`;
export const DivButton = styled.div`
 width: 80%;
 display:flex;
 justify-content: space-between;
 align-items: center;
`;
export const Button = styled.button`
margin-top: 1.91vw;
padding:0.76vw  1.14vw;
font-size:1.53vw;
border: none;
color: #fff;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow:  0.38vw  0.38vw  0.38vw #888888;
 }
`;
export const DivCirculo = styled.div`
padding:  0.76vw;
border-top-left-radius: 3.82vw;
border-top-right-radius:  11.48vw;
border-bottom-right-radius:11.48vw;
border-bottom-left-radius:  11.48vw;
background-color: #50BED2;
`;
export const DivFormCadastro = styled.div`
width: 50%;
display: flex;
justify-content: center;
`;
export const DivButtonVoltarLogin = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
@media (max-width: 800px) {
display: none;
visibility: hidden;
    }
`;

export const ImgVoltarLogin = styled.img`
width:  30.62vw;
height:  30.62vw;
@media (max-width: 800px) {
display:none;
visibility: hidden;
    }
`;
export const ButtonLogin = styled.button`
margin-bottom: 1.91vw;
margin-right: 3.82vw;
padding:  0.76vw  1.14vw;
font-size: 1.53vw;
border: none;
color: #fff;
background-color: #50BED2;
&&:hover{
    background-color: #6fdccf;
}
`;
export const DivButtonCadastrar = styled.div`
width: 50%;
display: flex;
justify-content: end;
`;
export const DivVoltarParaLogin = styled.div`
width: 50%;
display: flex;
justify-content: center
`;
export const P = styled.p`
font-size:  0.99vw;
color: #707070;
`;
export const PLogin = styled.p`
font-size:  0.99vw;
color: #50BED2;
cursor: pointer;
margin-left: 0.15vw;
`;