import styled from "styled-components";


export const Container = styled.div`
 width: 700px;
 min-height: 500px;
 display: flex;
 border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
background-color:#edf9fb;
 box-shadow:  5px  5px 5px #888888;
 flex-direction: column;
 background-color:#edf9fb;
 align-items: center;
 @media (max-width:800px) {
     margin-top: 50px;
    }
 @media (max-width: 800px) {
      width: 350px;
    }
    @media (max-width: 350px) {
      width: 250px;
    }
    @media (max-width:250px) {
      width: 200px;
    }
`;
export const Body = styled.div`
 width: 100%;
 height: 80%;
 margin-top: 100px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;




export const HeaderCard = styled.div`
width: 100%;
    display: flex ;
    justify-content: end;
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
width:  ${props => `${props.width}`}px;
height:  ${props => `${props.height}`}px;
@media (max-width: 800px) {
      width: 80px;
      height: 80px;
    }
`;

export const Senha = styled.h1`
padding:  5px;
font-size:50px;
background-color: #50BED2;
color: #fff;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
@media (max-width: 800px) {
        font-size: 25px;
    }
`;
export const Nome = styled.h2`
/* font-size: 1.83vw; */
color: #3f3d56;
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
    box-shadow:  5px 5px 5px #888888;}
    @media (max-width: 800px) {
        font-size: 15px;
    }
`;
export const ButtonClose = styled.button`
/* padding: 10px;
width: 40px;
height: 40px;
border-radius: 50%;
border: none;
color: #fff;
background-color: #e2a8a8;
box-shadow:  5px  5px 5px #888888; */
position: relative;
    justify-items: center;
    border: none;
    background: none;
    color: #e2a8a8;
    font-size: 30px;
    font-weight: bold;
`;