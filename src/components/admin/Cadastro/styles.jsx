
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
width: 500px;
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
padding: 10px 20px;
outline: none;
`;
export const Label = styled.label`
margin-top:10px
`;
export const DivInput = styled.div`
width: 80%;
display: flex;
flex-direction: column;

`;

export const Img = styled.img`
width: 200px;
height: 200px;
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
margin-top: 25px;
padding: 10px 15px;
font-size: 20px;
border: none;
color: #fff;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow: 5px 5px 5px #888888;
 }
`;
export const DivCirculo = styled.div`
padding: 10px;
border-top-left-radius: 50px;
border-top-right-radius: 150px;
border-bottom-right-radius: 150px;
border-bottom-left-radius:  150px;
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
display: block;
    }
`;

export const ImgVoltarLogin = styled.img`
width: 400px;
height: 400px;
@media (max-width: 800px) {
display: block;
    }
`;
export const ButtonLogin = styled.button`
margin-bottom: 25px;
margin-right: 50px;
padding: 10px 15px;
font-size: 20px;
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
font-size: small;
color: #707070;
`;
export const PLogin = styled.p`
font-size: small;
color: #50BED2;
cursor: pointer;
margin-left: 2px;
`;