import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    background-color:#edf9fb; background-color:#edf9fb;
    box-shadow: 5px 5px 5px #888888;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    @media (max-width: 800px) {
        width: 300px;
    }
    @media (max-width: 350px) {
        width: 200px;
    }
`;


export const HeaderCard = styled.div`
    display: flex ;
    justify-content: end;
`;

export const BodyCard = styled.div`
    display: flex ;
    align-items: center;
    flex-direction: column;
`;

export const Div = styled.div`
width:100%;
display: flex ;
justify-content:center;
`;
export const SenhaTitulo = styled.h1`
color: #3f3d56;
@media (max-width: 800px) {
    font-size: 25px;
    }
    @media (max-width: 350px) {
     font-size: 15px;
    }
`;
export const SenhaValor = styled.h1`
padding: 5px;
background-color: #50BED2;
color: #fff;
border-top-right-radius: 10px;
border-bottom-right-radius:10px;
border-bottom-left-radius: 10px;
@media (max-width: 800px) {
font-size: 25px;
    }
    @media (max-width: 350px) {
        font-size: 15px;
    }
`;
export const P = styled.p`
color: #3f3d56;
@media (max-width: 800px) {
font-size: 15px;
    }
    @media (max-width: 350px) {
        font-size: 10px;
    }
`;
export const Img = styled.img`
width: 200px;
height: 200px;
`;
export const DivDados = styled.div`
    width:80%;
    display: flex ;
    margin-bottom: 5px;
`;
export const Button = styled.button`
    position: relative;
    justify-items: center;
    border: none;
    background: none;
    color: #e2a8a8;
    font-size: 30px;
    font-weight: bold;
`;



