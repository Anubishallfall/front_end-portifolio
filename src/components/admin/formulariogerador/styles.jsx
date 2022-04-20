

import styled from "styled-components";


export const Form = styled.form`
width: 30.62vw;
height:  30.62vw;
`;
export const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;
export const Button = styled.button`
margin-top: 1.53vw;
padding: 0.61vw 1.53vw;
font-size: 1.91vw;
border: none;
color: #fff;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow:  0.38vw 0.38vw  0.38vw  #888888;
 }
`;

export const DivButton = styled.div`
width: 100%;
display: flex;
justify-content:center;

`;

export const Img = styled.img`
width: 15.31vw;
height: 15.31vw;
`;

export const ImgCadastro = styled.img`
width: 15.31vw;
height: 15.31vw;
`;
export const DivImg = styled.div`
border-radius:  11.48vw;
background-color:#50BED2;
padding: 1.53vw;
`;
export const InputRadio = styled.input`
background-color: #eee;
&:hover{
    background-color: #ccc;
    cursor: pointer;
}
`;
export const Label = styled.label`
font-size: 1.83vw;
`;
export const ConteinerInput = styled.div`
width: 80%;
margin-top: 1.53vw;
display: flex;
justify-content: space-evenly;
`;
export const DivInput = styled.div`
display: flex;
justify-content:space-evenly;
align-items:center;
`;

export const H2 = styled.h2`
font-size: 1.83vw;
color: #3f3d56;
`;
