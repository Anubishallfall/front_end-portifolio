import styled from "styled-components";


export const Container = styled.div`
 width: 53.59vw;
 min-height: 38.28vw;
 display: flex;
 border-top-right-radius: 0.76vw;
border-bottom-right-radius: 0.76vw;
border-bottom-left-radius:  0.76vw;
background-color:#edf9fb;
 box-shadow:  0.38vw  0.38vw  0.38vw #888888;
 flex-direction: column;
 justify-content: center;
 background-color:#edf9fb;
 align-items: center;
`;
export const DivTicket = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const DivButton = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-around;
`;

export const Img = styled.img`
width:  ${props => `${props.width}`}vw;
height:  ${props => `${props.height}`}vw;
`;

export const Senha = styled.h1`
padding:  0.38vw;
font-size: 3.82vw;
background-color: #50BED2;
color: #fff;
border-top-right-radius: 0.76vw;
border-bottom-right-radius: 0.76vw;
border-bottom-left-radius:  0.76vw;
`;
export const Nome = styled.h2`
font-size: 1.83vw;
color: #3f3d56;
`;
export const Button = styled.button`
margin-top: 1.53vw;
padding: 8px 1.53vw;
font-size: 1.91vw;
border: none;
color: #fff;
background-color: #50BED2;
 transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow:  0.38vw 0.38vw 0.38vw #888888;}
`;
export const ButtonClose = styled.button`
padding: 0.76vw;
width: 3.06vw;
height: 3.06vw;
border-radius: 50%;
border: none;
color: #fff;
background-color: #e2a8a8;
box-shadow:  0.38vw  0.38vw  0.38vw #888888;
position: relative;
left:  26.03vw;
bottom:  2.67vw;
`;