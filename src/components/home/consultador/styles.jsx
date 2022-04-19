import styled from "styled-components";
import ConfiguracaoSistema from "../../../config/index"

export const Body = styled.div`
 width: 100%;
height: ${ConfiguracaoSistema.tela.tamanho.height}px;
 background: ${props => `url(${props.background}) no-repeat top center`};
 background-size: auto;
 display: flex;
 flex-direction: column;
 justify-content: space-between ;
`;
export const Form = styled.form`
width: 400px;
height: 400px;
`;
export const Conteiner = styled.div`
 width: 100%;
 display:flex;
 justify-content: center;
 align-items: center;
`;
export const Button = styled.button`
margin-top: 20px;
padding: 8px 20px;
font-size: 25px;
border: none;
color: #fff;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow: 5px 5px 5px #888888;
 }
`;

export const DivButton = styled.div`
width: 100%;
display: flex;
justify-content:center;

`;

export const Img = styled.img`
width:  ${props => `${props.width}`}px;
height:  ${props => `${props.height}`}px;
`;

export const ImgCadastro = styled.img`
width: 200px;
height: 200px;
`;
export const DivImg = styled.div`
border-radius: 150px;
background-color:#50BED2;
padding: 20px;

`;
export const InputRadio = styled.input`
background-color: #eee;
&:hover{
    background-color: #ccc;
    cursor: pointer;
}
`;
export const Label = styled.label`
`;
export const ConteinerInput = styled.div`
width: 80%;
margin-top: 20px;
display: flex;
justify-content: space-evenly;
`;
export const DivInput = styled.div`
display: flex;
justify-content:space-evenly;
align-items:center;
`;

export const H2 = styled.h2`
color: #3f3d56;
`;
export const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;
export const Header = styled.div`
margin-top: 1%;
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`;
export const HeaderContentLeft = styled.div`
width: 50%;
display: flex;
justify-content: center;

`;
export const HeaderContentRigth = styled.div`
width: 20%;
display: flex;
justify-content: center;

`;
export const ButtonNavRight = styled.button`
padding: 8px 20px;
font-size: 15px;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
border-bottom-right-radius:  10px;
border: none;
color: #fff;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow: 5px 5px 5px #888888;}
`;
export const OptionDiv = styled.div`
display: flex;
flex-direction: column;

`;
export const Erro = styled.p`
font-size: small;
color: #707070;
`;
export const Footer = styled.div`
width: 100%;
height: 9%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const P = styled.p`
font-size: small;
color: #707070;
`;
export const DivLogo = styled.div`
display: flex;
flex-direction: row;
margin-left: 5%;
`;
export const TextoLogo = styled.h1`
color: #50BED2;

`;