import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.76vw;
    width: ${({ width }) => width ? width : "100%"};

    @media(max-width:  800px){
        width: 100%;
    }
`;

export const InputText = styled.input`
border-top: none;
border-left: none;
border-right: none;
padding: 10px 20px;
outline: none;
padding-left:25px;
background:  ${props => `url(${props.background}) no-repeat left`};
background-size: 20px;
`;
export const InputLabel = styled.label`
    color: #000;
    margin-top: 5px;
`;