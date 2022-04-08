import styled from "styled-components";

export const Container = styled.div`
min-width: 500px;
display: flex ;
background-color:#edf9fb;
 box-shadow: 5px 5px 5px #888888;
align-items: flex-start;
flex-direction: column;
background-color:#edf9fb;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
`;

export const Div = styled.div`
width:100%;
display: flex ;
justify-content:center;
`;
export const SenhaTitulo = styled.h2`
color: #3f3d56;
`;
export const SenhaValor = styled.h3`
padding: 5px;
background-color: #50BED2;
color: #fff;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
`;
export const P = styled.p`
margin: 10px;
color: #fff;
padding: 5px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border-bottom-left-radius:  5px;
background-color: #e2a8a8;
size: 10px;
`;
export const Img = styled.img`
width: 200px;
height: 200px;
`;
export const Button = styled.button`
padding: 10px 20px;
font-size: 20px;
border: none;
color: #fff;
box-shadow: 2px 2px 2px #888888;
background-color: #50BED2;
&&:hover{
    background-color: #6fdccf;
}
`;
export const DivButton = styled.div`
margin-top: 20px;
width:90%;
display: flex ;
justify-content: end;
margin-bottom: 20px;
`;

