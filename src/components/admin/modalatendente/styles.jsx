import styled from "styled-components";


export const Container = styled.div`
 width: 700px;
 min-height: 500px;
 display: flex;
 border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
background-color:#edf9fb;
 box-shadow: 5px 5px 5px #888888;
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
width:  ${props => `${props.width}`}px;
height:  ${props => `${props.height}`}px;
`;

export const Senha = styled.h1`
padding: 5px;
font-size: 50px;
background-color: #50BED2;
color: #fff;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom-left-radius:  10px;
`;
export const Nome = styled.h2`
color: #3f3d56;
`;
export const Button = styled.button`
margin-top: 20px;
padding: 8px 20px;
font-size: 25px;
border: none;
color: #fff;
background-color: #50BED2;
&&:hover{
    background-color: #6fdccf;
}
`;
export const ButtonClose = styled.button`
padding: 10px;
width: 40px;
height: 40px;
border-radius: 50%;
border: none;
color: #fff;
background-color: #e2a8a8;
box-shadow: 5px 5px 5px #888888;
position: relative;
left: 340px;
bottom: 35px;
`;