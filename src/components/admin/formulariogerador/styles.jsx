

import styled from "styled-components";


export const Form = styled.form`
width: 37%;
display: flex;
justify-content: center;
@media (max-width: 800px) {
width: 100%
    }
`;
export const Div = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;

`;
export const Button = styled.button`
margin-top: 20px;
padding: 8px 20px;
font-size:25px;
border: none;
color: #fff;
background-color: #50BED2;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow:  0.38vw 0.38vw  0.38vw  #888888;
 }
 @media (max-width: 800px) {
    width: 100%;
    padding: 15px 40px;
    }
`;

export const DivButton = styled.div`
width: 100%;
display: flex;
justify-content:center;

`;

export const Img = styled.img`
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
/* font-size: 1.83vw; */
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
/* font-size: 24px; */
color: #3f3d56;
`;
