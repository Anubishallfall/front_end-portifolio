import styled from "styled-components";

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.76vw;
    width: ${({ width }) => width ? width : "100%"};

    @media(max-width:  61.25vw){
        width: 100%;
    }
`;

export const InputText = styled.input`
border-top: none;
border-left: none;
border-right: none;
padding:  0.76vw 1.53vw;
outline: none;
padding-left: 1.91vw;
background:  ${props => `url(${props.background}) no-repeat left`};
background-size: 1.53vw;
&::placeholder {
    font-size:  1.47vw;
 
}
  
`;
export const InputLabel = styled.label`
    color: #000;
    margin-top:  0.38vw;
`;