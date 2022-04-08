import React from 'react'
import { Container, SenhaValor, Div, SenhaTitulo, P, Img, Button, DivButton } from "./styles";
import Icone from "../../config/undraw_personal_info_re_ur1n (1).svg"
import { useNavigate } from "react-router-dom";
function CredenciasLoja({ loja }) {
    let navigate = useNavigate();
    return (
        <Container>
            <Div><Img src={Icone} /></Div>
            <Div>
                <SenhaTitulo>Username:</SenhaTitulo>
                <SenhaValor>{loja.username}</SenhaValor>
            </Div>
            <Div>
                <SenhaTitulo>Senha:</SenhaTitulo>
                <SenhaValor>{loja.password}</SenhaValor>
            </Div>
            <Div>
                <P> card contém informaçoes sigilosas recomendamos cuide bem delas</P>
            </Div>
            <DivButton>
                <Button onClick={() => navigate(-1)}>
                    Login
                </Button>
            </DivButton>
        </Container>
    )
}

export default CredenciasLoja